import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Render & SEO Lab",
    template: "%s | Render & SEO Lab",
  },
  description: "Nowoczesny publiczny katalog produktów.",
  openGraph: {
    title: "Render & SEO Lab",
    description: "Nowoczesny publiczny katalog produktów.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
