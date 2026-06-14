export default function LiquidNav(){
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-6xl backdrop-blur-md bg-white/5 rounded-2xl border border-white/6 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md" style={{background:'var(--primary)'}} aria-hidden></div>
          <div className="font-semibold text-white">LLE STEM</div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-gray-200">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/pinboard" className="hover:text-white font-semibold text-green-300">Pinboard</a>
          <a href="/partner" className="hover:text-white">Partners</a>
        </nav>

        <div className="hidden md:flex gap-3">
          <a href="https://hcb.hackclub.com/donations/start/stem-sprouts" className="rounded-full px-3 py-1 font-semibold" style={{background:'var(--primary)', color:'#000'}}>Donate</a>
        </div>

      </div>
    </header>
  )
}
