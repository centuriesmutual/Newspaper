import Hero from '../components/Hero'
import RealEstate from '../components/RealEstate'
import PaymentTech from '../components/PaymentTech'
import Community from '../components/Community'
import Legacy from '../components/Legacy'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OfferingsOverview />
        <RealEstate />
        <Community />
        <PaymentTech />
        <Legacy />
        <CTA />
        <Footer />
      </main>
    </>
  )
} 