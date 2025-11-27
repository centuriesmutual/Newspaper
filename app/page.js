import Hero from '../components/Hero'
import BlockchainSection from '../components/BlockchainSection'
import RealEstate from '../components/RealEstate'
import PaymentTech from '../components/PaymentTech'
import SecurityCameras from '../components/SecurityCameras'
import NetworkDevices from '../components/NetworkDevices'
import SmartHomeSecurity from '../components/SmartHomeSecurity'
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
        <BlockchainSection />
        <RealEstate />
        <Community />
        <PaymentTech />
        <SecurityCameras />
        <NetworkDevices />
        <SmartHomeSecurity />
        <Legacy />
        <CTA />
        <Footer />
      </main>
    </>
  )
} 