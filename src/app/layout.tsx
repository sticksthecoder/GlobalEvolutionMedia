import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { siteName, siteTagline } from "../lib/nav";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteName} | GEM Network`,
    template: `%s | ${siteName}`,
  },
  description: `${siteTagline} Talent agency and media house empowering creators and brands across South Africa.`,
  metadataBase: new URL("https://www.gemnetwork.co.za"),
  openGraph: {
    title: siteName,
    description: siteTagline,
    siteName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="site-atmosphere flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
