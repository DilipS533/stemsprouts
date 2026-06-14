const sampleCards = [
  { title: 'Fun with Numbers', grade: 'K–2', desc: 'Number tricks, games, and patterns that make math feel like magic.' },
  { title: 'Mission to Mars', grade: '3–5', desc: 'Build a model rocket and explore the solar system.' },
  { title: 'Science Around You', grade: 'K–5', desc: 'Live experiments using everyday objects.' },
  { title: 'Intro to Robotics', grade: '3–5', desc: 'Program a robot to move and sense the world.' },
  { title: 'Circuit Basics', grade: '4–5', desc: 'Build simple circuits with the Pinboard platform.' },
  { title: 'Creative Coding', grade: 'K–5', desc: 'Draw and animate with code in the browser.' },
]

export default function PinboardShowcase(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-[rgba(255,255,255,0.02)] rounded-2xl">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold" style={{color:'var(--primary)'}}>Pinboard — flagship learning product</h3>
          <p className="mt-4 text-gray-300">An open-source, browser-based platform where students build virtual circuits and connect code to hardware concepts. Used in our flagship workshops and shared with the world.</p>
          <div className="mt-6 flex gap-3">
            <a href="https://pinboard.stem-sprouts.org" className="btn">Launch App</a>
            <a href="https://github.com/STEM-Sprouts/pinboard" className="btn-outline">View Code</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sampleCards.map((c, i) => (
            <article key={c.title} className="card" style={{ transitionDelay: `${i * 40}ms` }}>
              <h4 className="font-semibold" style={{color:'var(--color-accent)'}}>{c.title} <span className="text-sm text-gray-400">· {c.grade}</span></h4>
              <p className="mt-2 text-sm text-gray-300">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
