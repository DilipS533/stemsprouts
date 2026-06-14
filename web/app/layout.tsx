import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LLE STEM',
  description: 'Building the next generation of engineers, innovators, and leaders.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:top-4 focus:left-4 fixed z-[100] rounded-md bg-white/6 p-2">Skip to content</a>
        <div id="main">{children}</div>
      </body>
    </html>
  )
}
