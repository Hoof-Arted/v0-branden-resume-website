import type { ReactNode } from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Branden Wachtel | AI Transformation Leader",
  description:
    "Portfolio of Branden Wachtel, AI Transformation Leader specializing in enterprise AI strategy, generative AI, and digital transformation at J.P. Morgan",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
