"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import { AdPopup } from "@/components/ad-popup"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { QRCodePreview } from "@/components/qr-code-preview"
import { SeoContent } from "@/components/seo-content"
import { Faq } from "@/components/faq"

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://example.com")
  const [size, setSize] = useState(200)
  const [color, setColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [errorCorrection, setErrorCorrection] = useState("M")
  const [activeTab, setActiveTab] = useState("text")
  const [mounted, setMounted] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    // Initialize all state values on the client side to match server rendering
    setText("https://example.com")
    setSize(200)
    setColor("#000000")
    setBackgroundColor("#ffffff")
    setErrorCorrection("M")
    setActiveTab("text")
    setMounted(true)
  }, [])

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // Set default values based on tab
    if (value === "url") {
      setText("https://")
    } else if (value === "email") {
      setText("mailto:")
    } else if (value === "phone") {
      setText("tel:")
    } else if (value === "sms") {
      setText("sms:")
    } else if (value === "wifi") {
      setText("WIFI:S:<SSID>;T:<WPA|WEP|>;P:<PASSWORD>;H:<true|false|>;")
    } else {
      setText("")
    }
  }

  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto py-8 px-4">
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-pulse">Loading...</div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container mx-auto py-8 px-4">
        <section aria-labelledby="qr-generator-heading" className="mb-12">
          <h1 id="qr-generator-heading" className="text-3xl font-bold text-center mb-4">
            Free QR Code Generator
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Create custom QR codes for URLs, text, contact information, WiFi, and more. Download your QR codes in PNG,
            JPEG, or SVG format.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <Card className="shadow-md border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Create Your QR Code</CardTitle>
                  <CardDescription>
                    Customize your QR code with different content types and styling options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-6">
                    <TabsList className="grid grid-cols-3 md:grid-cols-6">
                      <TabsTrigger value="text">Text</TabsTrigger>
                      <TabsTrigger value="url">URL</TabsTrigger>
                      <TabsTrigger value="email">Email</TabsTrigger>
                      <TabsTrigger value="phone">Phone</TabsTrigger>
                      <TabsTrigger value="sms">SMS</TabsTrigger>
                      <TabsTrigger value="wifi">WiFi</TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="text" className="text-sm font-medium">
                          Content
                        </Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                                <Info className="h-4 w-4" />
                                <span className="sr-only">Info</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Enter the content for your QR code</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Input
                        id="text"
                        type="text"
                        placeholder="Enter content for QR code"
                        value={text}
                        onChange={handleTextChange}
                        className="w-full"
                        aria-label="QR code content"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="color" className="text-sm font-medium">
                          QR Code Color
                        </Label>
                        <div className="flex mt-2">
                          <Input
                            id="color"
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-12 h-10 p-1 rounded-l-md"
                            aria-label="QR code color"
                          />
                          <Input
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="flex-1 rounded-l-none"
                            aria-label="QR code color hex value"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="backgroundColor" className="text-sm font-medium">
                          Background Color
                        </Label>
                        <div className="flex mt-2">
                          <Input
                            id="backgroundColor"
                            type="color"
                            value={backgroundColor}
                            onChange={(e) => setBackgroundColor(e.target.value)}
                            className="w-12 h-10 p-1 rounded-l-md"
                            aria-label="QR code background color"
                          />
                          <Input
                            type="text"
                            value={backgroundColor}
                            onChange={(e) => setBackgroundColor(e.target.value)}
                            className="flex-1 rounded-l-none"
                            aria-label="QR code background color hex value"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="size" className="text-sm font-medium">
                          Size: {size}x{size}
                        </Label>
                      </div>
                      <Slider
                        id="size"
                        min={100}
                        max={400}
                        step={10}
                        value={[size]}
                        onValueChange={(value) => setSize(value[0])}
                        className="w-full"
                        aria-label="QR code size"
                      />
                    </div>

                    <div>
                      <Label htmlFor="errorCorrection" className="text-sm font-medium">
                        Error Correction Level
                      </Label>
                      <Select value={errorCorrection} onValueChange={setErrorCorrection}>
                        <SelectTrigger id="errorCorrection" className="mt-2" aria-label="Error correction level">
                          <SelectValue placeholder="Select error correction level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="L">Low (7%)</SelectItem>
                          <SelectItem value="M">Medium (15%)</SelectItem>
                          <SelectItem value="Q">Quartile (25%)</SelectItem>
                          <SelectItem value="H">High (30%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-center justify-center lg:sticky lg:top-24">
              <h2 className="text-xl font-semibold mb-6 text-center">Preview</h2>

              <div className="flex flex-col md:flex-row items-center justify-center w-full">
                {/* Left Ad */}
                <div className="hidden md:block">
                  <AdPopup position="left" />
                </div>

                {/* QR Code Preview */}
                <div className="mx-4">
                  <QRCodePreview
                    value={text}
                    size={size}
                    fgColor={color}
                    bgColor={backgroundColor}
                    level={errorCorrection}
                  />
                </div>

                {/* Right Ad */}
                <div className="hidden md:block">
                  <AdPopup position="right" />
                </div>
              </div>

              {/* Mobile Ads (stacked vertically) */}
              <div className="flex flex-col items-center space-y-4 mt-6 md:hidden">
                <AdPopup position="left" />
                <AdPopup position="right" />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <SeoContent />

        {/* FAQ Section */}
        <Faq />
      </main>

      <Footer />
    </div>
  )
}
