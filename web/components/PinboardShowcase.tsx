"use client"
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
const M: any = motion

function usePrefersReducedMotion(){
  const [reduced, setReduced] = useState(false)
  useEffect(()=>{
    try{
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      setReduced(mq.matches)
      const fn = () => setReduced(mq.matches)
      mq.addEventListener?.('change', fn)
      return ()=> mq.removeEventListener?.('change', fn)
    }catch(e){ return }
  },[])
  return reduced
}

export default function PinboardShowcase(){
  const reduced = usePrefersReducedMotion()
  const [powered, setPowered] = useState(false)
  const [completed, setCompleted] = useState(false)
  const animRef = useRef<number|null>(null)

  useEffect(()=>{
    return ()=> { if (animRef.current) cancelAnimationFrame(animRef.current) }
  },[])

  function startCircuit(){
    if (reduced) {
      setPowered(true)
      setTimeout(()=> setCompleted(true), 400)
      return
    }

    // lightweight animation: step through states
    setPowered(true)
    // small timed sequence to simulate energy travel
    setTimeout(()=>{
      setCompleted(true)
    }, 650)
  }

  return (
    <section aria-labelledby="pinboard-heading" className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-6 md:p-10">
        {/* Product Hero */}
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:flex-1">
            <h2 id="pinboard-heading" className="text-3xl md:text-4xl font-extrabold" style={{color:'var(--primary)'}}>Pinboard — prototype, play, and teach</h2>
            <p className="mt-3 text-gray-300 max-w-2xl text-lg">A hands-on learning platform that brings circuits, sensors, and code into a single playful canvas. Built for teachers and students to iterate quickly, share lessons, and explore creative projects.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://pinboard.stem-sprouts.org" className="btn btn-xl">Try Pinboard</a>
              <a href="https://github.com/STEM-Sprouts/pinboard" className="btn-outline">Open Source</a>
            </div>
            <div className="mt-6 text-sm text-gray-400">Pinboard is used in workshops and classroom pilots — open-source and lightweight enough to run in any browser.</div>
          </div>

          {/* Interactive demo */}
          <div className="mt-8 md:mt-0 md:w-96">
            <div className="rounded-xl bg-gradient-to-b from-black/30 to-black/20 p-4 border border-white/6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-medium">Interactive Demo</div>
                <div className="text-xs text-gray-400">Click to complete</div>
              </div>

              <div className="flex items-center justify-center">
                <div role="img" aria-label="Pinboard circuit demo" className="w-72 h-48">
                  <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="energy" x1="0" x2="1">
                        <stop offset="0%" stopColor="#6ee7b7" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="b" />
                        <feMerge>
                          <feMergeNode in="b" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* wires */}
                    <g strokeWidth="4" strokeLinecap="round" fill="none">
                      <motion.path
                        d="M40 110 C 90 20, 230 20, 280 110"
                        stroke={powered ? 'url(#energy)' : '#374151'}
                        initial={false}
                        animate={powered ? { strokeDashoffset: [320,0], stroke: 'url(#energy)' } : {}}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        strokeDasharray={powered ? 320 : 0}
                      />

                      <motion.path
                        d="M40 110 C 90 200, 230 200, 280 110"
                        stroke={powered ? 'url(#energy)' : '#4b5563'}
                        initial={false}
                        animate={powered ? { strokeDashoffset: [320,0], stroke: 'url(#energy)' } : {}}
                        transition={{ delay: 0.12, duration: 0.7, ease: 'easeInOut' }}
                        strokeDasharray={powered ? 320 : 0}
                      />
                    </g>

                    {/* nodes */}
                    <g>
                      <motion.circle cx="40" cy="110" r="12" fill={completed ? '#10b981' : '#6b7280'} stroke="#00000010" filter={completed ? 'url(#glow)' : undefined} />
                      <motion.circle cx="160" cy="40" r="12" fill={completed ? '#10b981' : '#6b7280'} stroke="#00000010" filter={completed ? 'url(#glow)' : undefined} />
                      <motion.circle cx="160" cy="180" r="12" fill={completed ? '#10b981' : '#6b7280'} stroke="#00000010" filter={completed ? 'url(#glow)' : undefined} />
                      <motion.circle cx="280" cy="110" r="14" fill={completed ? '#10b981' : '#374151'} stroke="#00000010" filter={completed ? 'url(#glow)' : undefined} />
                    </g>

                    {/* broken gap indicator */}
                    {!powered && (
                      <g>
                        <rect x="150" y="100" width="20" height="20" rx="4" fill="#111827" stroke="#374151" />
                        <text x="160" y="115" fontSize="10" fill="#9ca3af" textAnchor="middle">OFF</text>
                      </g>
                    )}

                    {/* success pulse and message */}
                    {completed && (
                      <g>
                        <motion.circle cx="160" cy="110" r="48" fill="none" stroke="url(#energy)" strokeWidth="2" initial={{ opacity: 0, r: 36 }} animate={{ opacity: [0.9,0], r: [36,68], strokeOpacity: [0.9,0] }} transition={{ duration: 0.9 }} />
                      </g>
                    )}
                  </svg>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm">{completed ? <span className="font-semibold text-green-400">Circuit Complete</span> : <span className="text-gray-400">Status: {powered ? 'Powering...' : 'Offline'}</span>}</div>
                <div>
                  <button onClick={startCircuit} className="btn">{completed ? 'Completed' : 'Complete Circuit'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inline sandbox + Storytelling sections */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left: Product + inline sandbox */}
          <div className="lg:col-span-2 rounded-lg bg-[rgba(255,255,255,0.01)] p-6 border border-white/6">
            <h3 className="text-xl font-bold">What Pinboard Is</h3>
            <p className="mt-2 text-gray-300">A browser-first workspace where students prototype circuits and code together. It’s designed so teachers can ship lessons quickly and students can make something real in minutes.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Try it — 30s sandbox</h4>
                <p className="mt-1 text-sm text-gray-400">No signup. Toggle components and see immediate results.</p>

                {/* Inline micro-sandbox: small interactive controls that map to the demo above */}
                <div className="mt-3 p-3 bg-black/20 rounded-md border border-white/6">
                  <InlineSandbox />
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Why it exists</h4>
                <p className="mt-1 text-sm text-gray-400">Pinboard lowers friction between idea and prototype — students iterate rapidly, test hypotheses, and celebrate small wins that build confidence.</p>

                <div className="mt-4 space-y-3">
                  <Outcome title="Student outcomes" desc="Students go from idea → prototype in a single session." />
                  <Outcome title="Teacher outcomes" desc="Teachers reuse lessons, track engagement, and scale workshops." />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Product quick tour</h4>
              <ol className="list-decimal list-inside mt-2 text-gray-300 space-y-2">
                <li>Open the sandbox and add a component.</li>
                <li>Connect wires visually and press play — see live updates.</li>
                <li>Save the lesson and share the link with students.</li>
              </ol>
            </div>
          </div>

          {/* Right: Social proof / Testimonials */}
          <aside className="rounded-lg p-6 border border-white/6 bg-[rgba(255,255,255,0.01)]">
            <h4 className="font-semibold">What teachers & students say</h4>
            <div className="mt-4 space-y-4">
              <Testimonial name="Maria, 3rd grade teacher" quote="Pinboard helped my class build real circuits on day one — engagement skyrocketed." />
              <Testimonial name="Jayden, student" quote="I made a robot blink — and then I made it dance." small />
            </div>
            <div className="mt-4 text-sm text-gray-400">Open-source • Classroom-tested • Free lessons</div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function InlineSandbox(){
  const [led, setLed] = React.useState(false)
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <button className="btn btn-primary btn-sm" onClick={()=> setLed(v=>!v)}>{led ? 'Turn off' : 'Turn on'}</button>
        <div className="ml-auto text-sm text-gray-400">Preview</div>
      </div>
      <div className="w-full h-24 rounded-md bg-black/30 border border-white/6 flex items-center justify-center">
        <div className={`w-8 h-8 rounded-full ${led ? 'bg-[var(--accent)] shadow-[0_8px_24px_rgba(16,185,129,0.12)]' : 'bg-gray-600'}`}></div>
      </div>
      <div className="text-xs text-gray-400">Toggle the LED to see how components respond in real-time.</div>
    </div>
  )
}

function Outcome({ title, desc }: { title: string; desc: string }){
  return (
    <div className="p-3 rounded-md bg-[rgba(255,255,255,0.01)] border border-white/6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-gray-400 mt-1">{desc}</div>
    </div>
  )
}

function Testimonial({ name, quote, small }: { name: string; quote: string; small?: boolean }){
  return (
    <div className={`p-3 rounded-md bg-[rgba(0,0,0,0.18)] border border-white/6 ${small ? 'text-sm' : ''}`}>
      <div className="font-medium">{name}</div>
      <div className="text-gray-300 mt-1">“{quote}”</div>
    </div>
  )
}
