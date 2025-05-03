# QRCode Generator - Next.js

![QRCode Generator](./public/favicon.ico)

A modern, lightweight QR code generator built with [Next.js](https://nextjs.org/). Instantly create customizable QR codes for URLs, text, contact info, and more.

## 🚀 Features

- ✅ Generate QR codes instantly from any input
- 🎨 Customize size, color, and background
- 📱 Mobile responsive design
- 🧩 Built-in support for downloading QR images
- ⚡ Fast & SEO-friendly using static export with Next.js

## 🧰 Tech Stack

- [Next.js 14+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [qrcode](https://www.npmjs.com/package/qrcode) – for QR code generation
- [Tailwind CSS](https://tailwindcss.com/) – for styling
- [Vercel / Firebase Hosting](https://vercel.com/ or https://firebase.google.com/) – for deployment (optional)

## 🖥️ Local Development

```bash
# Clone the repo
git clone https://github.com/phamhuungoc1112/qrcode-generator.git
cd qrcode-generator

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your QR generator in action.

## 🛠 Build & Export

```bash
npm run build
```

The exported static site will be available in the `out/` directory and ready for deployment.

## 🌐 Deployment

You can deploy this project using:

- **Vercel** (recommended)
- **Firebase Hosting**
- **GitHub Pages** (with static export)

## 📁 Project Structure

```
/app
  /qrcode              # QR code generation logic and UI
  /layout.tsx          # Main layout
/public
  favicon.ico          # QR-themed favicon
/utils
  generateQr.ts        # QR generation helper
```

## 📄 License

MIT License. Feel free to fork and build your own version!

---

Made with ❤️ using Next.js and v0.dev.
