export function SeoContent() {
  return (
    <section className="py-12 border-t" aria-labelledby="about-qr-codes">
      <div className="container mx-auto px-4">
        <h2 id="about-qr-codes" className="text-2xl font-bold mb-6">
          About QR Codes
        </h2>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            QR codes (Quick Response codes) are two-dimensional barcodes that can be scanned using smartphones and
            dedicated QR code readers. They were invented in 1994 by the Japanese company Denso Wave for tracking
            automotive parts. Today, QR codes have become an essential tool for businesses and individuals to share
            information quickly and efficiently.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">Why Use Our QR Code Generator?</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Free and Easy to Use</strong> - Create custom QR codes in seconds without any technical knowledge.
            </li>
            <li>
              <strong>Multiple Content Types</strong> - Generate QR codes for URLs, text, contact information, WiFi
              credentials, phone numbers, and more.
            </li>
            <li>
              <strong>Customization Options</strong> - Personalize your QR codes with custom colors and sizes to match
              your brand or personal style.
            </li>
            <li>
              <strong>High-Quality Downloads</strong> - Download your QR codes in PNG, JPEG, or SVG formats for both
              digital and print use.
            </li>
            <li>
              <strong>Error Correction</strong> - Choose from different error correction levels to ensure your QR code
              remains scannable even if partially damaged.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-4">Popular Uses for QR Codes</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Business Applications</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Business cards and contact information</li>
                <li>Product packaging and labels</li>
                <li>Restaurant menus and ordering systems</li>
                <li>Event tickets and check-ins</li>
                <li>Marketing materials and advertisements</li>
                <li>Store fronts and business locations</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Personal Uses</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sharing WiFi credentials with guests</li>
                <li>Social media profile links</li>
                <li>Personal contact information</li>
                <li>Event invitations</li>
                <li>Linking to personal websites or portfolios</li>
                <li>Sharing payment information</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-4">How to Use QR Codes Effectively</h3>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Keep it simple</strong> - The content behind your QR code should be concise and valuable to the
              scanner.
            </li>
            <li>
              <strong>Test before distributing</strong> - Always scan your QR code with multiple devices to ensure it
              works properly.
            </li>
            <li>
              <strong>Add a call-to-action</strong> - Tell people why they should scan your QR code and what they'll
              get.
            </li>
            <li>
              <strong>Ensure good contrast</strong> - Make sure there's sufficient contrast between the QR code and its
              background.
            </li>
            <li>
              <strong>Size appropriately</strong> - QR codes should be large enough to be easily scanned from the
              intended distance.
            </li>
          </ol>

          <p className="mt-6">
            Our free QR code generator makes it easy to create, customize, and download QR codes for any purpose.
            Whether you're a business owner looking to enhance your marketing materials or an individual wanting to
            share information quickly, our tool provides all the features you need to create effective QR codes.
          </p>
        </div>
      </div>
    </section>
  )
}
