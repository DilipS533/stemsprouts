"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [reduce, setReduce] = useState(false)
  useEffect(()=>{
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(m.matches)
    function onChange(){ setReduce(m.matches) }
    m.addEventListener?.('change', onChange)
    return ()=> m.removeEventListener?.('change', onChange)
  },[])

  const heading = (
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: 'var(--primary)' }}>LLE STEM</h1>
  )

  return (
    <section className="min-h-screen flex items-center" style={{ paddingTop: 84 }}>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {reduce ? (
            <div>
              {heading}
              <p className="mt-6 text-lg text-gray-300">A movement to empower the next generation of engineers and makers. We run hands-on workshops, mentor young leaders, and build a community that scales.</p>
              <div className="mt-8 flex gap-4">
                <a className="btn" href="#join">Join</a>
                <a className="btn-outline" href="#donate">Donate</a>
              </div>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              {heading}
              <p className="mt-6 text-lg text-gray-300">A movement to empower the next generation of engineers and makers. We run hands-on workshops, mentor young leaders, and build a community that scales.</p>

              <div className="mt-8 flex gap-4">
                <a className="btn" href="#join">Join</a>
                <a className="btn-outline" href="#donate">Donate</a>
              </div>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl relative" style={{ background: 'linear-gradient(135deg, rgba(74,222,128,0.08), rgba(0,0,0,0.5))' }}>
              <img src="/background.jpg" alt="Students building circuits" className="w-full h-full object-cover" width={1600} height={900} loading="eager" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
