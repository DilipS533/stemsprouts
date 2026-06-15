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
  const [highlight, setHighlight] = useState<number | null>(null)

  const tags: string[] = useMemo(()=> Array.from(new Set(LOGOS.map(l=>l.tag))).filter(Boolean) as string[], [])

  const filtered = useMemo(()=> LOGOS.filter(l=>{
    if(tag && l.tag !== tag) return false
    if(!q) return true
    return l.alt.toLowerCase().includes(q.toLowerCase())
  }), [q, tag])

  // positions for orbiting nodes
  const angles = filtered.map((_,i)=> (i / Math.max(1, filtered.length)) * Math.PI * 2)

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-xl font-semibold mb-2" style={{color:'var(--primary)'}}>Partner ecosystem</h3>
      <p className="text-sm text-gray-300 mb-4">We grow with a network of community partners — venues, sponsors, and curriculum collaborators.</p>

      {showFilters && (
        <div className="mb-6 flex gap-3 items-center">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h4 className="text-sm text-gray-400">Ecosystem view</h4>
          <p className="mt-2 text-sm text-gray-300">Hover any partner to see its relationship to STEM Sprouts. Use the filters to focus the view.</p>
        </div>

        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="relative w-[420px] h-[420px] rounded-full flex items-center justify-center">
            <div className="absolute w-40 h-40 rounded-full bg-[rgba(255,255,255,0.03)] border border-white/6 flex items-center justify-center text-center p-4"> 
              <div className="font-semibold">STEM Sprouts</div>
              <div className="text-xs text-gray-400">Central hub</div>
            </div>

            {filtered.map((l, i)=>{
              const angle = angles[i]
              const r = 140
              const x = Math.cos(angle) * r
              const y = Math.sin(angle) * r
              const size = highlight === i ? 68 : 56
              return (
                <button key={l.src} onMouseEnter={()=> setHighlight(i)} onMouseLeave={()=> setHighlight(null)} onFocus={()=> setHighlight(i)} onBlur={()=> setHighlight(null)} aria-label={`${l.alt} partner`} style={{ transform: `translate(${x}px, ${y}px)` }} className="absolute rounded-full p-2 bg-white/2 border border-white/6 flex items-center justify-center transition-all" >
                  <img src={l.src} alt={l.alt} className="object-contain" width={size} height={size} loading="lazy" decoding="async" />
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Accessible fallback list */}
      <div className="mt-8">
        <h4 className="text-sm text-gray-400">Partners (list)</h4>
        <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map(l=> (
              <li key={l.src} className="p-3 bg-white/2 rounded-md border border-white/6 flex items-center gap-3">
              <img src={l.src} alt="" className="w-10 h-10 object-contain" width={40} height={40} loading="lazy" decoding="async" />
              <div>
                <div className="text-sm font-medium">{l.alt}</div>
                <div className="text-xs text-gray-400">{l.tag}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
