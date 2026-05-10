import "./globals.css";
import localFont from "next/font/local";

const manrope = localFont({
  src: "../Font/Manrope-Regular.ttf",
  variable: "--font-manrope",
  display: "swap",
});

const poppins = localFont({
  src: [
    {
      path: "../Font/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Font/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "HB Transportation | Reliable Freight & Trucking Services",
    template: "%s | HB Transportation",
  },
  description:
    "HB Transportation provides reliable refrigerated, produce, and dry freight transportation across the Western United States. 99% on-time delivery, 24/7 dispatch support.",
  keywords: [
    "freight transportation",
    "trucking company",
    "refrigerated freight",
    "cold chain logistics",
    "Western US shipping",
    "HB Transportation",
    "expedited shipping",
    "dedicated lanes",
  ],
  authors: [{ name: "HB Transportation", url: "https://hbtinc.org" }],
  creator: "HB Transportation",
  publisher: "HB Transportation",

  metadataBase: new URL("https://hbtinc.org"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "HB Transportation | Reliable Freight & Trucking Services",
    description:
      "Refrigerated, produce, and dry freight transportation across the Western United States. 99% on-time delivery.",
    url: "https://hbtinc.org",
    siteName: "HB Transportation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HB Transportation - Reliable Freight Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HB Transportation | Reliable Freight & Trucking Services",
    description:
      "Refrigerated, produce, and dry freight transportation across the Western United States.",
    images: ["/og-image.jpg"],
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable}`}>
      <body
        suppressHydrationWarning={true}
        className={`${manrope.className} bg-neutral-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}