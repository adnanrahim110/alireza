import { Cormorant_Garamond, Literata } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "lenis/dist/lenis.css";
import { siteContent } from "@/content/site-content";
import SiteShell from "@/components/layouts/SiteShell";

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

export const metadata = {
  metadataBase: new URL(siteContent.seo.siteUrl),
  title: siteContent.seo.defaultTitle,
  description: siteContent.seo.defaultDescription,
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
