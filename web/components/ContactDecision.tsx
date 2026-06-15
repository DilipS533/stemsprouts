"use client"
import React, { useState } from 'react'

export default function ContactDecision(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('Volunteer')
  const [message, setMessage] = useState('')

  function submitMail(e: React.FormEvent){
    e.preventDefault()
    // For Donate, just open donate link. Otherwise open mailto with prefilled subject/body.
    if (interest === 'Donate'){
      window.open('#donate', '_self')
      return
    }

    const to = 'hello@stem-sprouts.org'
    const subject = encodeURIComponent(`${interest} interest from ${name || email}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    const href = `mailto:${to}?subject=${subject}&body=${body}`
    window.location.href = href
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="max-w-6xl mx-auto px-6 py-20">
      <h2 id="contact-heading" className="text-2xl font-bold" style={{color:'var(--primary)'}}>Get involved — choose a path</h2>
      <p className="mt-2 text-gray-300 max-w-2xl">We grow through people: pick the path that fits you and we'll follow up with next steps.</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card active={interest==='Volunteer'} title="Volunteer" desc="Lead workshops, mentor students, or help run local events." cta="Sign up" onClick={()=> setInterest('Volunteer')} />
        <Card active={interest==='Partner'} title="Partner" desc="Host a workshop or collaborate with your school or org." cta="Partner" onClick={()=> setInterest('Partner')} />
        <Card active={interest==='Donate'} title="Donate" desc="Support materials and local chapters so more students can join." cta="Donate" onClick={()=> setInterest('Donate')} />
        <Card active={interest==='Start a Chapter'} title="Start a chapter" desc="Help start a local STEM Sprouts chapter at your school or community center." cta="Start a chapter" onClick={()=> setInterest('Start a Chapter')} />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <form onSubmit={submitMail} className="space-y-3 p-6 rounded-lg bg-[rgba(255,255,255,0.01)] border border-white/6">
          <div className="text-sm text-gray-300">Tell us a little about yourself — we’ll reply with next steps tailored to your choice.</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input aria-label="Your name" placeholder="Your name" className="input" value={name} onChange={e=> setName(e.target.value)} />
            <input aria-label="Your email" placeholder="Your email" className="input" value={email} onChange={e=> setEmail(e.target.value)} />
          </div>
          <div>
            <label className="sr-only">Interest</label>
            <select className="input" value={interest} onChange={e=> setInterest(e.target.value)}>
              <option>Volunteer</option>
              <option>Partner</option>
              <option>Donate</option>
              <option>Start a Chapter</option>
            </select>
          </div>
          <div>
            <textarea aria-label="Message" placeholder="Short message (optional)" className="input h-24" value={message} onChange={e=> setMessage(e.target.value)} />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button type="submit" className="btn btn-primary">Contact us</button>
            <a href="mailto:hello@stem-sprouts.org" className="text-sm text-gray-400">Prefer email? hello@stem-sprouts.org</a>
            <div className="ml-auto text-xs text-gray-400">We'll typically reply within 3 business days.</div>
          </div>
        </form>

        <aside className="p-6 rounded-lg bg-[rgba(255,255,255,0.01)] border border-white/6">
          <h3 className="font-semibold">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><a href="#" className="text-[var(--accent)]">Volunteer guide</a></li>
            <li><a href="#" className="text-[var(--accent)]">Partner toolkit</a></li>
            <li><a href="#donate" className="text-[var(--accent)]">Donate</a></li>
            <li><a href="#" className="text-[var(--accent)]">Start a chapter</a></li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function Card({ title, desc, cta, onClick, active = false }: { title: string; desc: string; cta: string; onClick: ()=>void; active?: boolean }){
  return (
    <button onClick={onClick} className={`text-left p-4 rounded-lg border bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(255,255,255,0.02)] focus:outline-none ${active ? 'border-[var(--accent)] ring-2 ring-[rgba(22,163,74,0.08)] shadow-[0_8px_24px_rgba(16,185,129,0.06)]' : 'border-white/6'}`}>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-400 mt-1">{desc}</div>
      <div className="mt-4 text-sm text-[var(--primary)] font-medium">{cta} →</div>
    </button>
  )
}
