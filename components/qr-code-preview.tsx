"use client"

import { useState, useEffect, useRef } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface QRCodePreviewProps {
  value: string
  size: number
  fgColor: string
  bgColor: string
  level: string
}

export function QRCodePreview({ value, size, fgColor, bgColor, level }: QRCodePreviewProps) {
  const [mounted, setMounted] = useState(false)
  const qrRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const downloadQRCode = (format: "png" | "jpeg" | "svg" = "png") => {
    if (!qrRef.current) return

    // For PNG and JPEG formats
    if (format === "png" || format === "jpeg") {
      const canvas = document.createElement("canvas")
      const svgElement = qrRef.current.querySelector("svg")

      if (!svgElement) return

      const svgData = new XMLSerializer().serializeToString(svgElement)
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
      const svgUrl = URL.createObjectURL(svgBlob)

      const img = new Image()
      img.onload = () => {
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Fill background
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw QR code
        ctx.drawImage(img, 0, 0, size, size)

        // Convert to image and download
        const imgUrl = canvas.toDataURL(`image/${format}`)
        const link = document.createElement("a")
        link.download = `qrcode-${new Date().toISOString().slice(0, 10)}.${format}`
        link.href = imgUrl
        link.click()

        // Clean up
        URL.revokeObjectURL(svgUrl)
      }
      img.src = svgUrl
    }

    // For SVG format
    if (format === "svg") {
      const svgElement = qrRef.current.querySelector("svg")
      if (!svgElement) return

      const svgData = new XMLSerializer().serializeToString(svgElement)
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
      const svgUrl = URL.createObjectURL(svgBlob)

      const link = document.createElement("a")
      link.download = `qrcode-${new Date().toISOString().slice(0, 10)}.svg`
      link.href = svgUrl
      link.click()

      // Clean up
      setTimeout(() => {
        URL.revokeObjectURL(svgUrl)
      }, 100)
    }
  }

  if (!mounted) return null

  return (
    <Card className="p-6 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm border border-border/50 shadow-md">
      <div className="mb-4 relative group" ref={qrRef}>
        <QRCodeSVG value={value} size={size} fgColor={fgColor} bgColor={bgColor} level={level} includeMargin={true} />
      </div>

      <p className="text-sm text-muted-foreground text-center max-w-[250px] truncate mb-4">{value}</p>

      <div className="flex gap-2">
        <DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download QR Code</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenuContent align="center">
            <DropdownMenuItem onClick={() => downloadQRCode("png")}>PNG</DropdownMenuItem>
            <DropdownMenuItem onClick={() => downloadQRCode("jpeg")}>JPEG</DropdownMenuItem>
            <DropdownMenuItem onClick={() => downloadQRCode("svg")}>SVG</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  )
}
