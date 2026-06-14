export default function WorkshopSection(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold" style={{color:'var(--primary)'}}>Workshop storytelling</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <article className="card-soft p-6">
          <h4 className="font-semibold">Mission to Mars</h4>
          <p className="mt-2 text-gray-300">A hands-on rocket and coding unit that taught planetary science through play.</p>
        </article>
        <article className="card-soft p-6">
          <h4 className="font-semibold">Fun with Numbers</h4>
          <p className="mt-2 text-gray-300">Interactive math games that build numeracy and curiosity.</p>
        </article>
      </div>
    </section>
  )
}
