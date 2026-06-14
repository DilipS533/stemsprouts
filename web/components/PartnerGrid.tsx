export default function PartnerGrid(){
  const logos = [
    { src: '/partnerlogos/futurelead.avif', alt: 'Future Lead' },
    { src: '/partnerlogos/VolunteerHub.jpg', alt: 'Volunteer Hub' },
    { src: '/partnerlogos/TEDxJohnsCreekLogo.jpeg', alt: 'TEDx Johns Creek' },
    { src: '/partnerlogos/minoritiesinstem.png', alt: 'Minorities in STEM' },
    { src: '/partnerlogos/nata.jpg', alt: 'NATA' },
    { src: '/partnerlogos/nsri.png', alt: 'NSRI' },
    { src: '/partnerlogos/keyurahlife.jpg', alt: 'Keyurah Life' },
    { src: '/partnerlogos/hcbhackclub.png', alt: 'HCB Hack Club' }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-xl font-semibold mb-6" style={{color:'var(--primary)'}}>Our partners</h3>
      <p className="text-sm text-gray-300 mb-6">We partner with local and national organizations to deliver workshops and scale impact.</p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
        {logos.map((l) => (
          <li key={l.src} className="flex items-center justify-center p-4 bg-white/2 rounded-lg border border-white/6">
            <img src={l.src} alt={l.alt} className="max-h-16 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  )
}
