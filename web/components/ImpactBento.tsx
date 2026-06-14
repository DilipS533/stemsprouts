export default function ImpactBento(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold" style={{color:'var(--accent)'}}>Impact & Growth</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="card p-6 text-center">
          <div className="text-3xl font-extrabold" style={{color:'var(--primary)'}}>12k+</div>
          <div className="mt-2 text-sm text-gray-300">Students reached</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-extrabold" style={{color:'var(--primary)'}}>150+</div>
          <div className="mt-2 text-sm text-gray-300">Workshops delivered</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-extrabold" style={{color:'var(--primary)'}}>30</div>
          <div className="mt-2 text-sm text-gray-300">Active chapters</div>
        </div>
      </div>
    </section>
  )
}
