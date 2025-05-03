import { QrCode } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { StructuredData } from "./structured-data"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <StructuredData />
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <QrCode className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">QR Code Generator</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#about-qr-codes" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#faq-heading" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
