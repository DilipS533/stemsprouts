"use client"
import React, { useMemo, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
const M: any = motion

const sampleCards = [
  { id: 'fun-numbers', title: 'Fun with Numbers', grade: 'K–2', desc: 'Number tricks, games, and patterns that make math feel like magic.' },
  { id: 'mars', title: 'Mission to Mars', grade: '3–5', desc: 'Build a model rocket and explore the solar system.' },
  { id: 'science-everyday', title: 'Science Around You', grade: 'K–5', desc: 'Live experiments using everyday objects.' },
  { id: 'robotics', title: 'Intro to Robotics', grade: '3–5', desc: 'Program a robot to move and sense the world.' },
  { id: 'circuits', title: 'Circuit Basics', grade: '4–5', desc: 'Build simple circuits with the Pinboard platform.' },
  { id: 'creative-coding', title: 'Creative Coding', grade: 'K–5', desc: 'Draw and animate with code in the browser.' },
]

export default function PinboardShowcase(){
  const [tab, setTab] = useState<'featured'|'curriculum'|'explore'>('featured')
  const [open, setOpen] = useState<string | null>(null)
  const tabs = useMemo(()=>[
    { id: 'featured', label: 'Featured' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'explore', label: 'Explore' }
  ],[])

  const filtered = useMemo(()=>{
    if (tab === 'featured') return sampleCards.slice(0,3)
    if (tab === 'curriculum') return sampleCards.filter(s=> s.grade.includes('3'))
    return sampleCards
  },[tab])

  // keyboard navigation for tabs
  const tablistRef = useRef<HTMLDivElement|null>(null)
  useEffect(()=>{
    const root = tablistRef.current
    if (!root) return
    function onKey(e: KeyboardEvent){
      const current = tablistRef.current
      if (!current) return
      const buttons = Array.from(current.querySelectorAll('button')) as HTMLButtonElement[]
      const idx = buttons.findIndex(b=> b === document.activeElement)
      if (e.key === 'ArrowRight') buttons[(idx+1)%buttons.length]?.focus()
      if (e.key === 'ArrowLeft') buttons[(idx-1+buttons.length)%buttons.length]?.focus()
    }
    root.addEventListener('keydown', onKey)
    return ()=> { if (root) root.removeEventListener('keydown', onKey) }
  },[])

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 80/1000 } } }
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

  return (
    <section aria-labelledby="pinboard-heading" className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-6 md:p-10">
        <div className="md:flex md:items-start md:gap-8">
          <div className="md:flex-1">
            <h3 id="pinboard-heading" className="text-2xl md:text-3xl font-bold" style={{color:'var(--primary)'}}>Pinboard — a playground for learning</h3>
            <p className="mt-3 text-gray-300 max-w-xl">Pinboard is the hands-on learning environment we use in workshops — students prototype circuits, connect code, and learn by doing. Below is an overview of featured activities and curriculum-aligned modules.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://pinboard.stem-sprouts.org" className="btn">Launch Pinboard</a>
              <a href="https://github.com/STEM-Sprouts/pinboard" className="btn-outline">View Code</a>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:w-80">
            <div ref={tablistRef} role="tablist" aria-label="Pinboard sections" className="flex gap-2">
              {tabs.map(t=> (
                <button key={t.id} role="tab" aria-selected={tab===t.id} aria-controls={`panel-${t.id}`} onClick={()=> setTab(t.id as any)} className={`px-3 py-1 rounded-md ${tab===t.id? 'bg-[var(--color-accent)] text-black font-semibold' : 'bg-white/3 text-white'}`}>
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-4 text-xs text-gray-400">Try a featured activity or explore categories. Previews are lightweight and expand into full activity sheets.</div>
          </div>
        </div>

        <M.div initial="hidden" animate="show" variants={container} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((card,i)=>(
            <M.article key={card.id} variants={item} className="relative rounded-xl p-5 bg-[rgba(255,255,255,0.03)] border border-white/6 hover:shadow-lg transition-shadow" tabIndex={0} aria-labelledby={`card-${card.id}`} onClick={()=> setOpen(card.id)} onKeyDown={(e: React.KeyboardEvent)=> { if (e.key === 'Enter') setOpen(card.id) }}>
              <div className="text-sm text-gray-300">{card.grade}</div>
              <h4 id={`card-${card.id}`} className="mt-2 font-semibold" style={{color:'var(--color-accent)'}}>{card.title}</h4>
              <p className="mt-2 text-sm text-gray-300">{card.desc}</p>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-400">{card.id === 'circuits' ? 'Interactive demo' : 'Activity preview'}</div>
                <button aria-label={`Preview ${card.title}`} className="text-sm underline" onClick={(e)=>{ e.stopPropagation(); setOpen(card.id) }}>Preview</button>
              </div>
            </M.article>
          ))}
        </M.div>

        {/* Modal / detail */}
        {open && (
          <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60" onClick={()=> setOpen(null)}></div>
            <M.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.28 }} className="relative bg-[#071025] max-w-3xl w-full rounded-2xl p-6 border border-white/6">
              <button className="absolute right-4 top-4 text-gray-300" onClick={()=> setOpen(null)} aria-label="Close preview">✕</button>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h4 className="text-xl font-semibold">{sampleCards.find(s=> s.id === open)?.title}</h4>
                  <p className="mt-2 text-sm text-gray-300">{sampleCards.find(s=> s.id === open)?.desc}</p>
                  <div className="mt-4 text-sm text-gray-400">Learning outcomes: collaboration, basic circuitry, computational thinking.</div>
                  <div className="mt-6">
                    <a className="inline-block btn" href="#">Download activity</a>
                    <a className="inline-block btn-outline ml-3" href="#">Teacher notes</a>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="w-full h-44 rounded-md overflow-hidden bg-black/20 flex items-center justify-center">
                    <img src="/virtualcircuitbuilding.png" alt="Activity preview" className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </M.div>
          </div>
        )}
      </div>
    </section>
  )
}
