import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PUMP - Fitness Social",
  description: "Track calories, follow friends, and crush your fitness goals",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
