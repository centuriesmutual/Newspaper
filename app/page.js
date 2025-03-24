import Hero from '../components/Hero'
import Services from '../components/Services'
import Legacy from '../components/Legacy'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Legacy />
      <CTA />
      <Footer />
    </main>
  )
} 