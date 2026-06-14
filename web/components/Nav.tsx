"use client"
import { useState } from 'react'

export default function Nav(){
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav className="w-full py-3 px-4 backdrop-blur-sm bg-white/6 border border-white/6 rounded-xl max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3"> 
            <img src="/logo.png" alt="LLE STEM logo" className="w-10 h-10 object-contain rounded-md" />
            <span className="font-semibold">LLE STEM</span>
          </a>

          <div className="md:hidden">
            <button
              aria-controls="main-navigation"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="p-2 rounded-md ring-offset-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <span className="sr-only">Toggle navigation</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                {open ? (
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="/about" className="text-sm">About</a>
            <a href="/pinboard" className="text-sm text-green-300">Pinboard</a>
            <a href="/partner" className="text-sm">Partners</a>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="main-navigation" className="mt-3 space-y-2 md:hidden">
            <a href="/about" className="block text-sm">About</a>
            <a href="/pinboard" className="block text-sm text-green-300">Pinboard</a>
            <a href="/partner" className="block text-sm">Partners</a>
          </div>
        )}
      </nav>
    </header>
  )
}
