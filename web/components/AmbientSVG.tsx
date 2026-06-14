"use client"
import React, { useEffect, useRef } from 'react'

function clamp(v:number, a=0, b=1){ return Math.max(a, Math.min(b, v)) }

export default function AmbientSVG(){
  const rootRef = useRef<SVGSVGElement | null>(null)
  const layerRefs = useRef<{paths: SVGPathElement[]; group: SVGGElement | null}[]>([])
  const ticking = useRef(false)

  useEffect(()=>{
    const svg = rootRef.current
    if(!svg) return

    // layers: closer layers have larger movement and finer detail
    const layerEls = Array.from(svg.querySelectorAll<SVGGElement>('[data-layer]'))
    layerRefs.current = layerEls.map(l => ({ paths: Array.from(l.querySelectorAll<SVGPathElement>('[data-anim]')), group: l }))

    // setup stroke dash for all paths
    for(const layer of layerRefs.current){
      for(const p of layer.paths){
        try{
          const len = p.getTotalLength()
          p.style.strokeDasharray = `${len}`
          p.style.strokeDashoffset = `${len}`
          p.style.willChange = 'stroke-dashoffset, opacity, transform'
        }catch(e){ }
      }
    }

    const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lowPower = navigator && (navigator as any).connection && ((navigator as any).connection.saveData || (navigator as any).connection.effectiveType === '2g')

    function update(){
      ticking.current = false
      const scrollY = window.scrollY || window.pageYOffset
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      const winH = window.innerHeight || document.documentElement.clientHeight
      const raw = clamp(scrollY / Math.max(1, docH - winH))
      const progress = prefersReduce || lowPower ? 1 : Math.pow(raw, 0.9)

      // update each layer with different reveal speed and parallax
      layerRefs.current.forEach((layer, idx)=>{
        const depth = (idx + 1) / layerRefs.current.length // 0..1
        const mapped = Math.min(1, progress * (0.6 + depth * 0.8))

        // parallax translate for the group
        if(layer.group){
          const y = -mapped * (20 + depth * 80) // px
          layer.group.style.transform = `translateY(${y}px)`
        }

        for(const p of layer.paths){
          try{
            const len = p.getTotalLength()
            const offset = Math.max(0, len * (1 - mapped))
            p.style.strokeDashoffset = `${offset}`
            const isLeaf = p.getAttribute('data-leaf') === '1'
            if(isLeaf){
              const opacity = clamp((mapped - 0.55) / 0.45, 0, 1)
              p.style.opacity = `${opacity}`
            }
          }catch(e){ }
        }
      })
    }

    function onScroll(){
      if(ticking.current) return
      ticking.current = true
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg ref={rootRef} className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#071016" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#083020" stopOpacity="0.03" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feBlend in="SourceGraphic" in2="blur" mode="normal" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#g1)" />

        {/* Far layer - distant branches */}
        <g data-layer="far" transform="translate(10,80) scale(0.9)" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{transition:'transform 200ms linear'}}>
          <path data-anim d="M200 780 C220 650 240 560 300 480" stroke="#0b3b22" strokeWidth="6" opacity="0.9" />
          <path data-anim d="M300 480 C340 420 380 380 430 350" stroke="#0b4b2a" strokeWidth="5" opacity="0.85" />
          <path data-anim d="M430 350 C470 320 520 300 580 300" stroke="#0b5d35" strokeWidth="4" opacity="0.8" />
        </g>

        {/* Mid layer - main trunk/branches */}
        <g data-layer="mid" transform="translate(40,60) scale(1.0)" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{transition:'transform 200ms linear'}}>
          <path data-anim d="M320 800 C320 620 340 480 380 400 C410 350 460 300 520 270" stroke="#103a22" strokeWidth="12" />
          <path data-anim d="M380 400 C360 360 340 320 300 280" stroke="#14502b" strokeWidth="9" />
          <path data-anim d="M520 270 C560 240 620 220 700 240" stroke="#176033" strokeWidth="7" />
        </g>

        {/* Near layer - fine branches and leaves */}
        <g data-layer="near" transform="translate(0,20) scale(1.05)" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{transition:'transform 200ms linear'}}>
          <path data-anim d="M300 280 C310 260 330 240 350 220" stroke="#2b8bd6" strokeWidth="4" data-leaf="1" opacity="0" />
          <path data-anim d="M540 260 C560 250 580 245 600 250" stroke="#06b6d4" strokeWidth="4" data-leaf="1" opacity="0" />
          <path data-anim d="M420 320 C430 300 450 290 470 285" stroke="#60a5fa" strokeWidth="3" data-leaf="1" opacity="0" />
          <path data-anim d="M350 220 C340 200 330 190 320 180" stroke="#2dd4bf" strokeWidth="3" data-leaf="1" opacity="0" />
          <path data-anim d="M680 240 C700 230 720 235 740 245" stroke="#34d399" strokeWidth="3" data-leaf="1" opacity="0" />
        </g>

        {/* Subtle particle network */}
        <g fill="none" stroke="#4ade80" strokeOpacity="0.03" strokeWidth="1">
          <circle cx="10%" cy="20%" r="140" />
          <circle cx="80%" cy="10%" r="220" />
          <circle cx="70%" cy="70%" r="160" />
        </g>
      </svg>
    </div>
  )
}
