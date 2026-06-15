"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const M: any = motion

export default function Hero(){
  const [reduce, setReduce] = useState(false)

  useEffect(()=>{
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(m.matches)
    function onChange(){ setReduce(m.matches) }
    m.addEventListener?.('change', onChange)
    return ()=> m.removeEventListener?.('change', onChange)
  },[])

  // small motion presets
  const entrance = { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' } }

  return (
    <section aria-labelledby="home-heading" className="relative min-h-[72vh] flex items-center section-hero">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            {reduce ? (
              <h1 id="home-heading" className="hero-title">Big STEM ideas, by little learners.</h1>
            ) : (
              <M.div {...entrance}>
                <h1 id="home-heading" className="hero-title">Big STEM ideas, by little learners.</h1>
              </M.div>
            )}

            <M.div {...(!reduce ? entrance : {})}>
              <p className="mt-6 text-lg text-gray-300 max-w-2xl hero-sub">Free, hands-on workshops for K–5 students — student-led, community-powered. Join us for coding, robotics, and live science demos that make learning feel like play.</p>

              <div className="mt-4 text-sm">
                <a href="#pinboard" className="text-[var(--accent)] font-medium">Try Pinboard — prototype in minutes</a>
              </div>
            </M.div>

            <M.div {...(!reduce ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 } } : {})} className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="btn btn-primary btn-xl" aria-label="Join STEM Sprouts">Join</a>
              <a href="#donate" className="btn btn-ghost" aria-label="Donate to STEM Sprouts">Donate</a>
            </M.div>

            <M.div {...(!reduce ? { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.45 } } : {})} className="mt-6 text-sm text-gray-400 max-w-xl">
              <strong>Upcoming:</strong> Mission to Mars — Build a model rocket. Limited seats; community-hosted workshops every month.
            </M.div>
          </div>

          <div className="md:col-span-6 hidden md:block">
            <M.div {...(!reduce ? { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.25, duration: 0.8 } } : {})} className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/virtualcircuitbuilding.png" alt="Students building a circuit" className="w-full h-full object-cover" />

              <div className="absolute right-6 top-6 w-56 p-4 bg-[rgba(0,0,0,0.45)] border border-white/6 rounded-xl backdrop-blur-sm text-white">
                <div className="text-xs uppercase opacity-90">Workshop Spotlight</div>
                <div className="mt-1 font-semibold">Mission to Mars</div>
                <div className="mt-1 text-xs text-gray-200">Hands-on rocketry and flight basics led by our student mentors.</div>
                <div className="mt-3">
                  <a href="#signup" className="inline-block rounded-md bg-white text-black px-3 py-1 text-sm font-medium">Sign up</a>
                </div>
              </div>

              {/* subtle overlay accents */}
              <svg className="absolute left-4 bottom-4 w-28 opacity-30" viewBox="0 0 100 100" aria-hidden>
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.06" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" fill="url(#g1)" rx="8" />
              </svg>
              </M.div>
          </div>
        </div>
      </div>
    </section>
  )
}
