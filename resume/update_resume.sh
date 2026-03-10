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
GIT_PDF="resume.pdf"

if [[ ! -f "$TEX_FILE" ]]; then
  error "Could not find $TEX_FILE in $(pwd)."
  exit 1
fi

info "Step 1/6: Compiling $TEX_FILE to PDF..."
if ! latexmk -pdf "$TEX_FILE"; then
  error "LaTeX compilation failed. Stopping."
  exit 1
fi
success "Compilation command completed."

info "Step 2/6: Verifying that $OUTPUT_PDF was generated..."
if [[ ! -f "$OUTPUT_PDF" ]]; then
  error "$OUTPUT_PDF was not generated. Stopping."
  exit 1
fi
success "Verified $OUTPUT_PDF exists."

# Keep git target filename aligned with requirement: git add resume.pdf
if [[ "$OUTPUT_PDF" != "$GIT_PDF" ]]; then
  info "Preparing $GIT_PDF from $OUTPUT_PDF for git tracking..."
  cp "$OUTPUT_PDF" "$GIT_PDF"
  success "Updated $GIT_PDF."
fi

info "Step 3/6: Adding generated PDF to git (git add $GIT_PDF)..."
git add "$GIT_PDF"
success "Staged $GIT_PDF."

TIMESTAMP="$(date '+%Y-%m-%d %H:%M')"
COMMIT_MSG="Resume update $TIMESTAMP"

info "Step 4/6: Committing changes with message: \"$COMMIT_MSG\""
git commit -m "$COMMIT_MSG"
success "Commit created."

info "Step 5/6: Pushing changes to remote repository..."
git push
success "Push completed."

info "Step 6/6: Resume update workflow finished successfully."
