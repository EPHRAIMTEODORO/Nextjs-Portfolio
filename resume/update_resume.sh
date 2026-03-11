#!/usr/bin/env bash
set -euo pipefail

# Colored output (bonus)
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
BLUE="\033[0;34m"
NC="\033[0m"

info() {
  printf "${BLUE}[INFO]${NC} %s\n" "$1"
}

warn() {
  printf "${YELLOW}[WARN]${NC} %s\n" "$1"
}

success() {
  printf "${GREEN}[OK]${NC} %s\n" "$1"
}

error() {
  printf "${RED}[ERROR]${NC} %s\n" "$1"
}

TEX_FILE="Ephraim_Teodoro.tex"
OUTPUT_PDF="Ephraim_Teodoro.pdf"
GIT_PDF="$OUTPUT_PDF"
TEX_BASENAME="${TEX_FILE%.tex}"
TEMP_DIR=".latex-temp"
TEMP_PDF="$TEMP_DIR/$OUTPUT_PDF"

cleanup_latex_temp_files() {
  mkdir -p "$TEMP_DIR"
  rm -f \
    "$TEMP_DIR/${TEX_BASENAME}.aux" \
    "$TEMP_DIR/${TEX_BASENAME}.fdb_latexmk" \
    "$TEMP_DIR/${TEX_BASENAME}.fls" \
    "$TEMP_DIR/${TEX_BASENAME}.log" \
    "$TEMP_DIR/${TEX_BASENAME}.out" \
    "$TEMP_DIR/${TEX_BASENAME}.synctex.gz" \
    "$TEMP_PDF"

  # Backward compatibility cleanup if old temp files still exist in resume/ root.
  rm -f \
    "${TEX_BASENAME}.aux" \
    "${TEX_BASENAME}.fdb_latexmk" \
    "${TEX_BASENAME}.fls" \
    "${TEX_BASENAME}.log" \
    "${TEX_BASENAME}.out" \
    "${TEX_BASENAME}.synctex.gz"
}

NEEDS_TEX_INSTALL=0
if ! command -v latexmk >/dev/null 2>&1; then
  NEEDS_TEX_INSTALL=1
  warn "latexmk is not installed."
fi

if ! command -v kpsewhich >/dev/null 2>&1 || ! kpsewhich fullpage.sty >/dev/null 2>&1; then
  NEEDS_TEX_INSTALL=1
  warn "Required LaTeX style file fullpage.sty is missing."
fi

if [[ "$NEEDS_TEX_INSTALL" -eq 1 ]]; then
  warn "Attempting automatic installation of required LaTeX tooling..."

  if command -v apt-get >/dev/null 2>&1; then
    if [[ "${EUID:-$(id -u)}" -ne 0 ]] && ! command -v sudo >/dev/null 2>&1; then
      error "Cannot auto-install LaTeX tooling: sudo is not available for non-root user."
      warn "Install manually: apt-get update && apt-get install -y latexmk texlive-latex-extra"
      exit 1
    fi

    INSTALL_PREFIX=""
    if [[ "${EUID:-$(id -u)}" -ne 0 ]]; then
      INSTALL_PREFIX="sudo"
    fi

    info "Installing LaTeX tooling using apt-get..."
    if ! $INSTALL_PREFIX apt-get update; then
      warn "apt-get update failed (often caused by unrelated third-party repos)."
      warn "Continuing with install attempt using existing package indexes..."
    fi

    # fullpage.sty and several common resume packages live in texlive-latex-extra.
    if ! $INSTALL_PREFIX apt-get install -y latexmk texlive-latex-extra; then
      error "Failed to install required LaTeX packages automatically."
      warn "Please install it manually and rerun this script."
      warn "Suggested command: apt-get install -y latexmk texlive-latex-extra"
      exit 1
    fi

    if ! command -v latexmk >/dev/null 2>&1; then
      error "latexmk still not found after installation."
      exit 1
    fi

    if ! command -v kpsewhich >/dev/null 2>&1 || ! kpsewhich fullpage.sty >/dev/null 2>&1; then
      error "Required LaTeX style files are still missing after installation."
      warn "Try: apt-get install -y texlive-latex-extra"
      exit 1
    fi

    success "LaTeX tooling installed successfully."
  else
    error "Auto-install is currently supported on apt-get based systems only."
    warn "Install latexmk and texlive-latex-extra manually, then rerun this script."
    exit 1
  fi
fi

if [[ ! -f "$TEX_FILE" ]]; then
  error "Could not find $TEX_FILE in $(pwd)."
  exit 1
fi

info "Step 1/7: Compiling $TEX_FILE to PDF..."
mkdir -p "$TEMP_DIR"
if ! latexmk -g -pdf -interaction=nonstopmode -halt-on-error -auxdir="$TEMP_DIR" -outdir="$TEMP_DIR" "$TEX_FILE"; then
  error "LaTeX compilation failed. Stopping."
  exit 1
fi
success "Compilation command completed."

info "Step 2/7: Verifying that $OUTPUT_PDF was generated..."
if [[ ! -f "$TEMP_PDF" ]]; then
  error "$OUTPUT_PDF was not generated. Stopping."
  exit 1
fi

cp "$TEMP_PDF" "$OUTPUT_PDF"
success "Verified $OUTPUT_PDF exists."

info "Step 3/7: Adding generated files to git (git add $GIT_PDF $TEX_FILE)..."
git add "$GIT_PDF" "$TEX_FILE"
success "Staged $GIT_PDF and $TEX_FILE."

if git diff --cached --quiet; then
  info "Step 4/7: Cleaning generated LaTeX temp files..."
  cleanup_latex_temp_files
  success "LaTeX temp files cleaned."
  warn "No changes detected in $GIT_PDF or $TEX_FILE. Nothing to commit or push."
  success "Resume update workflow finished (no-op)."
  exit 0
fi

TIMESTAMP="$(date '+%Y-%m-%d %H:%M')"
COMMIT_MSG="Resume update $TIMESTAMP"

info "Step 4/7: Committing changes with message: \"$COMMIT_MSG\""
git commit -m "$COMMIT_MSG"
success "Commit created."

info "Step 5/7: Pushing changes to remote repository..."
git push
success "Push completed."

info "Step 6/7: Cleaning generated LaTeX temp files..."
cleanup_latex_temp_files
success "LaTeX temp files cleaned."

info "Step 7/7: Resume update workflow finished successfully."
