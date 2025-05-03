import Script from "next/script"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "QR Code Generator",
    url: "https://qrcode-generator.xyz",
    description:
      "Free online QR code generator. Create custom QR codes for URLs, text, contact information, WiFi, and more.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Generate QR codes for URLs, text, contact information, WiFi, and more",
      "Customize QR code colors and size",
      "Download QR codes in PNG, JPEG, or SVG format",
      "Choose error correction level",
    ],
    screenshot: "https://qrcode-generator.xyz/screenshot.png",
    softwareVersion: "1.0",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "156",
    },
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}
