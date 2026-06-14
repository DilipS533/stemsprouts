"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  const [reduce, setReduce] = useState(false)

  useEffect(()=>{
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(m.matches)
    function onChange(){ setReduce(m.matches) }
    m.addEventListener?.('change', onChange)
    return ()=> m.removeEventListener?.('change', onChange)
  },[])

  const heading = <h1 className="hero-title font-extrabold leading-tight">Big STEM ideas, by little learners.</h1>

  return (
    <section className="min-h-screen flex items-center" style={{ paddingTop: 84 }}>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {reduce ? heading : (
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                {heading}
              </motion.div>
            )}

            <p className="mt-6 text-lg text-gray-300 hero-sub">Free, hands-on workshops for K–5 students — student-led, community-powered. Join us for coding, robotics, and live science demos that make learning feel like play.</p>

            <div className="mt-8 flex gap-4">
              <a className="btn" href="#join">Join</a>
              <a className="btn-outline" href="#donate">Donate</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[url('/virtualcircuitbuilding.png')] bg-cover bg-center filter brightness-90"></div>
              <div className="absolute right-6 top-6 w-48 p-4 bg-[rgba(0,0,0,0.35)] border border-white/6 rounded-xl backdrop-blur-sm">
                <h4 className="font-semibold" style={{color:'var(--color-accent)'}}>Upcoming workshop</h4>
                <p className="text-sm text-gray-300 mt-2">Mission to Mars — Build a model rocket</p>
                <div className="mt-3 flex gap-2">
                  <a className="btn" href="#signup">Sign up</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
