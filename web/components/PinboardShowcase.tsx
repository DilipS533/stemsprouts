export default function PinboardShowcase(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-[rgba(255,255,255,0.02)] rounded-2xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold" style={{color:'var(--primary)'}}>Pinboard — flagship learning product</h3>
          <p className="mt-4 text-gray-300">An open-source, browser-based platform where students build virtual circuits and connect code to hardware concepts. Used in our flagship workshops and shared with the world.</p>
          <div className="mt-6 flex gap-3">
            <a href="https://pinboard.stem-sprouts.org" className="btn">Launch App</a>
            <a href="https://github.com/STEM-Sprouts/pinboard" className="btn-outline">View Code</a>
          </div>
        </div>
        <div className="w-full h-56 rounded-xl overflow-hidden" style={{background:'linear-gradient(135deg, rgba(74,222,128,0.06), rgba(0,0,0,0.4))'}}>
          <img src="/virtualcircuitbuilding.png" alt="Pinboard screenshot" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
