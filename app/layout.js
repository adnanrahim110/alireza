import SiteShell from "@/components/layouts/SiteShell";
import { siteContent } from "@/content/site-content";
import "lenis/dist/lenis.css";
import { Cormorant_Garamond, Literata } from "next/font/google";
import "swiper/css";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteContent.seo.siteUrl;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.seo.defaultTitle,
  description: siteContent.seo.defaultDescription,
  applicationName: siteContent.siteName,
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} site-body`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
