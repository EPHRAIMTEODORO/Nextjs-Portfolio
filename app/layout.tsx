import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ephraimteodoro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ephraim Teodoro — Fullstack Developer for Hire",
  description:
    "Fullstack developer specializing in web apps, dashboards, and automation systems. React, Next.js, Node.js, PostgreSQL. Available for freelance projects.",
  keywords: [
    "fullstack developer",
    "freelance developer",
    "web app developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "dashboard development",
    "automation systems",
    "API development",
    "Ephraim Teodoro",
  ],
  authors: [{ name: "Ephraim Teodoro", url: siteUrl }],
  creator: "Ephraim Teodoro",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ephraim Teodoro — Fullstack Developer for Hire",
    description:
      "Fullstack developer specializing in web apps, dashboards, and automation systems. Available for freelance projects.",
    siteName: "Ephraim Teodoro",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ephraim Teodoro — Fullstack Developer for Hire",
    description:
      "Fullstack developer specializing in web apps, dashboards, and automation systems. Available for freelance projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ephraim Teodoro",
      url: siteUrl,
      sameAs: [
        "https://github.com/EPHRAIMTEODORO",
        "https://www.linkedin.com/in/teodoro-e",
      ],
      jobTitle: "Fullstack Developer",
      description:
        "Fullstack developer specializing in web apps, dashboards, and automation systems.",
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "TypeScript",
        "REST APIs",
        "Dashboard Development",
        "Workflow Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ephraim Teodoro",
      description:
        "Portfolio of Ephraim Teodoro — Fullstack Developer for Hire",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
