"use client"
import { useState } from 'react'

export default function Nav(){
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  // smooth scrolling for internal anchors
  function goTo(href: string){
    try{
      if (href.startsWith('#')){
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActive(href)
        setOpen(false)
        return
      }
      // full navigation
      window.location.href = href
    } catch(e){ window.location.href = href }
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 pointer-events-auto">
      <nav className="w-full py-3 px-4 rounded-xl max-w-6xl mx-auto backdrop-blur-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] border border-white/6 shadow-md">
        <div className="flex items-center justify-between">
          <a href="#" onClick={(e)=>{ e.preventDefault(); goTo('/') }} className="flex items-center gap-3"> 
            <img src="/logo.png" alt="LLE STEM logo" className="w-10 h-10 object-contain rounded-md" />
            <span className="font-semibold">LLE STEM</span>
          </a>

          <div className="md:hidden">
            <button
              aria-controls="main-navigation"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="p-2 rounded-md ring-offset-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
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
            <button onClick={()=> goTo('/about')} className={`text-sm ${active === '/about' ? 'underline font-semibold' : ''}`}>About</button>
            <button onClick={()=> goTo('/pinboard')} className={`text-sm ${active === '/pinboard' ? 'underline font-semibold text-[var(--color-accent)]' : 'text-[var(--color-accent)]'}`}>Pinboard</button>
            <button onClick={()=> goTo('/partner')} className={`text-sm ${active === '/partner' ? 'underline font-semibold' : ''}`}>Partners</button>
            <div className="ml-4 flex gap-2">
              <a href="#join" onClick={(e)=>{ e.preventDefault(); goTo('#join') }} className="btn">Join</a>
              <a href="#donate" onClick={(e)=>{ e.preventDefault(); goTo('#donate') }} className="btn-outline">Donate</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="main-navigation" className="mt-3 space-y-2 md:hidden">
            <button onClick={()=> goTo('/about')} className="block text-sm text-left w-full">About</button>
            <button onClick={()=> goTo('/pinboard')} className="block text-sm text-left w-full">Pinboard</button>
            <button onClick={()=> goTo('/partner')} className="block text-sm text-left w-full">Partners</button>
            <div className="mt-2 flex gap-2">
              <a href="#join" onClick={(e)=>{ e.preventDefault(); goTo('#join') }} className="btn w-full text-center">Join</a>
              <a href="#donate" onClick={(e)=>{ e.preventDefault(); goTo('#donate') }} className="btn-outline w-full text-center">Donate</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
