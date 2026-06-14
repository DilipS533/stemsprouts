"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
const M:any = motion

export default function TeamCard({name,role,bio,photo,fav,fun}:{name:string;role:string;bio:string;photo?:string;fav?:string;fun?:string}){
  const [open, setOpen] = useState(false)
  const initials = name.split(' ').map(n=>n[0]).slice(0,2).join('')

  return (
    <div className="team-member card-soft p-6 text-center">
      <M.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} className="mx-auto w-32 h-32 mb-3 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
        {photo ? <img src={photo} alt={name} className="w-full h-full object-cover"/> : <div className="text-xl font-semibold">{initials}</div>}
      </M.div>

      <h5 className="mt-1" style={{color:'var(--primary)'}}>{name}</h5>
      <div className="role text-sm text-gray-300">{role}</div>

      <div className="mt-3 text-sm text-gray-300">{bio}</div>

      <div className="mt-4 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity">
        <div className="text-xs text-gray-400">Favorite field</div>
        <div className="font-medium">{fav || 'General STEM'}</div>
        <div className="mt-2 text-xs text-gray-400">Fun fact</div>
        <div className="text-sm">{fun || 'Loves building robots'}</div>
      </div>

      <div className="mt-4">
        <button className="btn" onClick={()=> setOpen(true)} aria-expanded={open} aria-controls={`member-${initials}`}>More</button>
      </div>

      {open && (
        <div id={`member-${initials}`} role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={()=> setOpen(false)}></div>
          <M.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-[#071025] max-w-xl w-full rounded-2xl p-6 border border-white/6">
            <button className="absolute right-4 top-4 text-gray-300" onClick={()=> setOpen(false)} aria-label="Close">✕</button>
            <div className="flex gap-4 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-700">
                {photo ? <img src={photo} alt={name} className="w-full h-full object-cover"/> : <div className="flex items-center justify-center h-full">{initials}</div>}
              </div>
              <div>
                <h4 className="text-xl font-semibold">{name}</h4>
                <div className="text-sm text-gray-300">{role}</div>
                <p className="mt-3 text-sm text-gray-300">{bio}</p>
                <div className="mt-3 text-xs text-gray-400">Favorite STEM field: <span className="font-medium">{fav || 'General STEM'}</span></div>
                <div className="mt-2 text-xs text-gray-400">Fun fact: <span className="font-medium">{fun || 'Loves building robots'}</span></div>
              </div>
            </div>
          </M.div>
        </div>
      )}
    </div>
  )
}
