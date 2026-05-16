import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://zentrocommercellc.com"),
  title: {
    default: "Zentro Commerce LLC | Ecommerce & Marketplace Retail Operations",
    template: "%s | Zentro Commerce LLC",
  },
  description:
    "Zentro Commerce LLC is a USA-based ecommerce and retail distribution company partnering with brands, wholesalers, distributors, and suppliers for marketplace retail operations.",
  keywords: [
    "Zentro Commerce LLC",
    "ecommerce distribution",
    "retail sourcing",
    "Amazon marketplace retailer",
    "wholesale partnerships",
    "Sheridan Wyoming business",
  ],
  alternates: {
    canonical: "https://zentrocommercellc.com",
  },
  openGraph: {
    title: "Zentro Commerce LLC",
    description:
      "Professional ecommerce sourcing, retail distribution, and marketplace operations for trusted supplier partnerships.",
    url: "https://zentrocommercellc.com",
    siteName: "Zentro Commerce LLC",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
