import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ephraim Teodoro — Fullstack Developer for Hire",
  description: "I build fullstack web apps, dashboards, and automation systems. Available for freelance projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
