import Nav from '../components/Nav'
import AmbientSVG from '../components/AmbientSVG'
import Hero from '../components/Hero'
import ImpactBento from '../components/ImpactBento'
import PinboardShowcase from '../components/PinboardShowcase'
import WorkshopSection from '../components/WorkshopSection'
import PartnerGrid from '../components/PartnerGrid'
import StatsAnimated from '../components/StatsAnimated'
import TeamSection from '../components/TeamSection'
import ContactDecision from '../components/ContactDecision'

export default function Page(){
  return (
    <>
      <AmbientSVG />
      <Nav />
      <main>
        <Hero />
        <section className="px-6">
          <div className="max-w-6xl mx-auto">
            <PinboardShowcase />
            <ImpactBento />
            <StatsAnimated />
            <WorkshopSection />
            <PartnerGrid />
            <TeamSection />
            <ContactDecision />
          </div>
        </section>
      </main>
    </>
  )
}
