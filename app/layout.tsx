import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://qrcode-generator.xyz"),
  title: {
    default: "Free QR Code Generator | Create QR Codes Online",
    template: "%s | QR Code Generator",
  },
  description:
    "Generate custom QR codes for free. Create QR codes for URLs, text, contact information, WiFi, and more. Download in PNG, JPEG, or SVG format.",
  keywords: [
    "QR code generator",
    "create QR code",
    "free QR code maker",
    "QR code creator",
    "custom QR codes",
    "QR code for URL",
    "QR code for text",
    "QR code for WiFi",
    "download QR code",
    "QR code online",
  ],
  authors: [{ name: "Jasper", url: "mailto:jasper.050798@gmail.com" }],
  creator: "Jasper",
  publisher: "QR Code Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qrcode-generator.xyz",
    title: "Free QR Code Generator | Create QR Codes Online",
    description:
      "Generate custom QR codes for free. Create QR codes for URLs, text, contact information, WiFi, and more. Download in PNG, JPEG, or SVG format.",
    siteName: "QR Code Generator",
    images: [
      {
        url: "https://qrcode-generator.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "QR Code Generator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator | Create QR Codes Online",
    description:
      "Generate custom QR codes for free. Create QR codes for URLs, text, contact information, WiFi, and more. Download in PNG, JPEG, or SVG format.",
    images: ["https://qrcode-generator.xyz/og-image.png"],
    creator: "@jasper",
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
    icon: [{ url: "/favicon.png", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://qrcode-generator.xyz",
    languages: {
      "en-US": "https://qrcode-generator.xyz/en-US",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
