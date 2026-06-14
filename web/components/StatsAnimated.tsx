"use client"
import { useEffect, useState } from 'react'

export default function StatsAnimated(){
  const [n,setN] = useState(0)
  useEffect(()=>{
    const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(prefersReduce){
      setN(12000)
      return
    }
    let raf:any
    let start:number|null = null
    const duration = 1200
    const target = 12000
    function step(ts:number){
      if(!start) start = ts
      const t = Math.min((ts - start)/duration,1)
      setN(Math.floor(t*target))
      if(t<1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return ()=> cancelAnimationFrame(raf)
  },[])

  return (
    <div className="mt-8">
      <div className="text-4xl font-extrabold" style={{color:'var(--primary)'}}>{n.toLocaleString()}</div>
      <div className="text-sm text-gray-300">Students impacted</div>
    </div>
  )
}
