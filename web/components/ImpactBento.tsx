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
  const cardIn = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.46, ease: 'easeOut' } } }

  return (
  <section id="impact" ref={rootRef} aria-labelledby="impact-heading" className="max-w-6xl mx-auto px-6 py-20">
      <h2 id="impact-heading" className="text-2xl font-bold" style={{color:'var(--primary)'}}>Impact & Growth</h2>

      <M.div initial="hidden" animate={visible? 'show' : 'hidden'} variants={container} className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

        {/* Dominant hero metric (left) */}
        <M.div variants={cardIn} className="md:col-span-4 relative rounded-2xl p-6 bg-[rgba(255,255,255,0.03)] border border-white/6">
          <div className="flex items-center gap-4">
            <img src="/student-portrait.jpg" alt="Student portrait" className="w-20 h-20 rounded-full object-cover border border-white/6" />
            <div>
              <div className="text-sm text-gray-300">Students engaged</div>
              <div className="mt-2">
                <Counter end={12000} duration={1400} startWhen={visible} />
              </div>
              <div className="mt-2 text-xs text-gray-400">In hands-on workshops and classroom pilots — building projects that matter.</div>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-400">"We started with a question and ended with a project." — Classroom outcome snapshot</div>
        </M.div>

        {/* Student story (center, prominent) */}
        <M.div variants={cardIn} className="md:col-span-5 bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-white/6 rounded-2xl p-6 flex flex-col">
          <div className="flex-1">
            <div className="text-sm uppercase text-gray-300">Student story</div>
            <h3 className="mt-2 text-2xl font-semibold">Jayla built a sensor that keeps her classroom garden alive</h3>
            <p className="mt-3 text-sm text-gray-200 max-w-xl">Jayla used Pinboard to prototype a moisture sensor for the school garden. Her project sparked a cross-class collaboration where students tracked data and created a shared dashboard.</p>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <img src="/student-portrait-2.jpg" alt="Jayla" className="w-16 h-16 rounded-lg object-cover border border-white/6" />
            <div>
              <div className="font-semibold">Jayla, 5th grade</div>
              <div className="text-xs text-gray-400">Student mentor • Project lead</div>
            </div>
            <div className="ml-auto">
              <a href="#story-jayla" className="inline-block btn btn-ghost">Read story</a>
            </div>
          </div>
        </M.div>

        {/* Supporting metrics + growth viz (right) */}
        <div className="md:col-span-3 space-y-4">
          <M.div variants={cardIn} className="rounded-xl p-4 bg-[rgba(255,255,255,0.02)] border border-white/6">
            <div className="text-sm text-gray-300">Growth</div>
            <div className="mt-3">
              <GrowthChart data={[10, 18, 34, 52, 78, 120, 260]} startWhen={visible} />
            </div>
            <div className="mt-2 text-xs text-gray-400">Year-over-year growth in students & workshops.</div>
          </M.div>

          <M.div variants={cardIn} className="rounded-xl p-4 bg-[rgba(255,255,255,0.02)] border border-white/6">
            <SupportingMetric label="Workshops" value={150} explanation="Student-led sessions across community centers." startWhen={visible} />
          </M.div>

          <M.div variants={cardIn} className="rounded-xl p-4 bg-[rgba(255,255,255,0.02)] border border-white/6">
            <SupportingMetric label="Active chapters" value={30} explanation="Local chapters run by student leaders." startWhen={visible} />
          </M.div>
        </div>

      </M.div>
    </section>
  )
}

function SupportingMetric({ label, value, explanation, startWhen }: { label: string; value: number; explanation: string; startWhen: boolean }){
  return (
    <div>
      <div className="text-sm text-gray-300">{label}</div>
      <div className="mt-2">
        <Counter end={value} duration={900} startWhen={startWhen} />
      </div>
      <div className="mt-2 text-xs text-gray-400">{explanation}</div>
    </div>
  )
}

function GrowthChart({ data, startWhen }: { data: number[]; startWhen: boolean }){
  // normalize data to path
  const width = 200, height = 48
  const max = Math.max(...data)
  const points = data.map((v,i)=> {
    const x = (i/(data.length-1)) * width
    const y = height - (v/max) * height
    return [x,y]
  })
  const d = points.map((p,i)=> `${i===0? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMid meet" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      </path>
    </svg>
  )
}
