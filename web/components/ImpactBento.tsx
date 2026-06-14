"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
const M: any = motion

function useVisibility(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    if (!ref.current) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if (e.isIntersecting) setVisible(true) })
    }, { threshold: 0.25 })
    obs.observe(ref.current)
    return ()=> obs.disconnect()
  },[ref])
  return visible
}

function Counter({end, duration=1200, format=true, startWhen}: {end:number,duration?:number,format?:boolean,startWhen:boolean}){
  const [value, setValue] = useState(0)
  useEffect(()=>{
    if (!startWhen) return
    let start = null as number | null
    const step = (ts:number)=>{
      if (!start) start = ts
      const progress = Math.min((ts - start)/duration, 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  },[end,duration,startWhen])
  const display = format ? value.toLocaleString() : String(value)
  return <span className="text-4xl md:text-5xl font-extrabold" aria-hidden>{display}{value===end? (end>999?'+':'') : ''}</span>
}

export default function ImpactBento(){
  const rootRef = useRef<HTMLElement|null>(null)
  const visible = useVisibility(rootRef as any)

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 120/1000 } }
  }
  const cardIn = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }

  return (
    <section ref={rootRef} aria-labelledby="impact-heading" className="max-w-6xl mx-auto px-6 py-20">
      <h2 id="impact-heading" className="text-2xl font-bold" style={{color:'var(--accent)'}}>Impact & Growth</h2>

      <M.div initial="hidden" animate={visible? 'show' : 'hidden'} variants={container} className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

        {/* Large story tile */}
        <M.div variants={cardIn} className="md:col-span-7 bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-white/6 rounded-2xl p-6 flex flex-col justify-end" style={{boxShadow:'0 8px 30px rgba(2,6,23,0.6)'}}>
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" aria-hidden>
            <img src="/virtualcircuitbuilding.png" className="w-full h-full object-cover opacity-30" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="relative z-10 text-white">
            <div className="text-sm uppercase opacity-80">Human Story</div>
            <div className="mt-2 text-2xl md:text-3xl font-semibold">A child discovers coding for the first time</div>
            <p className="mt-3 text-sm text-gray-200 max-w-xl">Our student mentors guide hands-on experiments that transform curiosity into confidence. Stories like this are the reason we run free workshops across communities.</p>
            <div className="mt-4">
              <a href="#stories" className="inline-block rounded-md bg-[var(--color-accent)] text-black px-3 py-1 font-medium">Read the story</a>
            </div>
          </div>
        </M.div>

        {/* Metric tiles - right column */}
        <div className="md:col-span-5 grid grid-cols-1 gap-6">
          <M.div variants={cardIn} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/6 rounded-xl p-5">
            <div className="text-sm text-gray-300">Students reached</div>
            <div className="mt-3">
              <Counter end={12000} duration={1300} startWhen={visible} />
            </div>
            <div className="mt-2 text-xs text-gray-400">Hands-on learning across schools and community centers.</div>
          </M.div>

          <M.div variants={cardIn} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/6 rounded-xl p-5">
            <div className="text-sm text-gray-300">Workshops delivered</div>
            <div className="mt-3">
              <Counter end={150} duration={900} startWhen={visible} />
            </div>
            <div className="mt-2 text-xs text-gray-400">Student-led sessions focused on coding, robotics, and maker projects.</div>
          </M.div>

          <M.div variants={cardIn} className="bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/6 rounded-xl p-5">
            <div className="text-sm text-gray-300">Active chapters</div>
            <div className="mt-3">
              <Counter end={30} duration={800} startWhen={visible} />
            </div>
            <div className="mt-2 text-xs text-gray-400">Local student chapters organizing workshops and outreach.</div>
          </M.div>
        </div>
      </M.div>
    </section>
  )
}
