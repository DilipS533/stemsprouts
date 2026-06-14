"use client"
import React, { useState, useMemo, useRef, useEffect } from 'react'

type Logo = { src: string; alt: string; tag?: string }

const LOGOS: Logo[] = [
  { src: '/partnerlogos/futurelead.avif', alt: 'Future Lead', tag: 'education' },
  { src: '/partnerlogos/VolunteerHub.jpg', alt: 'Volunteer Hub', tag: 'volunteer' },
  { src: '/partnerlogos/TEDxJohnsCreekLogo.jpeg', alt: 'TEDx Johns Creek', tag: 'event' },
  { src: '/partnerlogos/minoritiesinstem.png', alt: 'Minorities in STEM', tag: 'nonprofit' },
  { src: '/partnerlogos/nata.jpg', alt: 'NATA', tag: 'nonprofit' },
  { src: '/partnerlogos/nsri.png', alt: 'NSRI', tag: 'research' },
  { src: '/partnerlogos/keyurahlife.jpg', alt: 'Keyurah Life', tag: 'sponsor' },
  { src: '/partnerlogos/hcbhackclub.png', alt: 'HCB Hack Club', tag: 'club' }
]

export default function PartnerGrid({ showFilters = true }: { showFilters?: boolean }){
  const [q, setQ] = useState('')
  const [tag, setTag] = useState<string | null>(null)
  const listRef = useRef<HTMLUListElement | null>(null)

  const tags: string[] = useMemo(()=> Array.from(new Set(LOGOS.map(l=>l.tag))).filter(Boolean) as string[], [])

  const filtered = useMemo(()=> LOGOS.filter(l=>{
    if(tag && l.tag !== tag) return false
    if(!q) return true
    return l.alt.toLowerCase().includes(q.toLowerCase())
  }), [q, tag])

  // keyboard navigation: arrow keys move focus within the grid
  useEffect(()=>{
    const el = listRef.current
    if(!el) return
    function onKey(e: KeyboardEvent){
      if(!el) return
      const items = Array.from(el.querySelectorAll<HTMLButtonElement>('button.partner-item'))
      const idx = items.findIndex(i=>i === document.activeElement)
      if(items.length === 0) return
      if(e.key === 'ArrowRight' || e.key === 'ArrowDown'){
        e.preventDefault()
        const next = items[(idx+1) % items.length]
        next?.focus()
      }
      if(e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
        e.preventDefault()
        const prev = items[(idx-1 + items.length) % items.length]
        prev?.focus()
      }
    }
    el.addEventListener('keydown', onKey)
    return ()=> el.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-xl font-semibold mb-2" style={{color:'var(--primary)'}}>Our partners</h3>
      <p className="text-sm text-gray-300 mb-4">We partner with local and national organizations to deliver workshops and scale impact.</p>

      {showFilters && (
        <div className="mb-4 flex gap-3 items-center">
          <label htmlFor="partner-search" className="sr-only">Search partners</label>
          <input id="partner-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search partners" className="rounded-md px-3 py-2 bg-white/3 border border-white/6 text-sm" />
          <div className="ml-2 flex gap-2">
            <button onClick={()=>setTag(null)} className={`btn ${tag===null?'':'btn-outline'}`}>All</button>
            {tags.map(t=> (
              <button key={t} onClick={()=>setTag((prev): string | null => (prev === t ? null : t))} className={`btn ${tag===t?'':'btn-outline'}`}>{t}</button>
            ))}
          </div>
        </div>
      )}

      <ul ref={listRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center" role="list">
        {filtered.map((l) => (
          <li key={l.src}>
            <button className="partner-item flex items-center justify-center p-4 bg-white/2 rounded-lg border border-white/6 focus:outline-none focus:ring-2" aria-label={l.alt}>
              <img src={l.src} alt={l.alt} className="max-h-16 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
