import PartnerGrid from '../../components/PartnerGrid'

export default function PartnerPage(){
  return (
    <main className="min-h-screen pt-24">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold" style={{color:'var(--primary)'}}>Partners</h1>
        <p className="mt-2 text-gray-300">Organizations and supporters who help LLE STEM reach students and communities.</p>
      </section>
      <PartnerGrid />
    </main>
  )
}
