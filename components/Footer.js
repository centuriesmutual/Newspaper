'use client'

<<<<<<< HEAD
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  
  useEffect(() => {
    setMounted(true)
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate responsive sizes - use default values until mounted
  const getLogoSize = () => {
    if (!mounted) return { width: 60, height: 60, fontSize: '1.5rem' }
    if (windowWidth < 400) return { width: 40, height: 40, fontSize: '1.25rem' }
    if (windowWidth < 640) return { width: 45, height: 45, fontSize: '1.3rem' }
    if (windowWidth < 768) return { width: 50, height: 50, fontSize: '1.2rem' }
    return { width: 60, height: 60, fontSize: '1.5rem' }
  }

  const { width, height, fontSize } = getLogoSize()

=======
export default function Footer() {
>>>>>>> cb752f65a79af2a8fb8947423ead53308279bbba
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
<<<<<<< HEAD
          <div className="col-lg-4 mb-4 mb-lg-0 footer-content">
            <div className="d-flex align-items-center mb-3 footer-logo">
              <div className="footer-logo-container me-2">
                <Image
                  src="/cmlogotreesmall-removebg-preview.png"
                  alt="Centuries Mutual Logo"
                  width={width}
                  height={height}
                  className="me-2"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span style={{ 
                color: '#ffffff',
                fontFamily: "'Playfair Display', serif",
                fontSize: fontSize,
                fontWeight: '500',
                letterSpacing: mounted && windowWidth < 640 ? '0' : '0.5px',
                whiteSpace: 'nowrap',
                display: 'inline-block'
              }}>
                Centuries Mutual
              </span>
            </div>
            <p className="mb-3">
              Providing a comprehensive brokerage network to further a secure a better future.
=======
          <div className="col-12 text-center">
            <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
              © 2025 Centuries Mutual. All rights reserved.
>>>>>>> cb752f65a79af2a8fb8947423ead53308279bbba
            </p>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              {/* Dallas, Texas Location */}
              <div className="d-flex align-items-center text-white" style={{ opacity: 0.8 }}>
                <MapPinIcon style={{ width: '20px', height: '20px', marginRight: '6px' }} />
                <span style={{ fontSize: '0.9rem' }}>Dallas, Texas</span>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="col-lg-2 mb-4 mb-lg-0 footer-content">
            <h5 className="mb-3">Community</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/landlords" className="text-white text-decoration-none">LandLords</Link>
              </li>
              <li className="mb-2">
                <Link href="/tenants" className="text-white text-decoration-none">Tenants</Link>
              </li>
              <li className="mb-2">
                <Link href="/hosts" className="text-white text-decoration-none">Hosts</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mb-4 mb-lg-0 footer-content">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="https://newspaper.centuriesmutual.com" className="text-white text-decoration-none">Newspaper</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white text-decoration-none">Help Desk</Link>
              </li>
              <li className="mb-2">
                <Link href="/careers" className="text-white text-decoration-none">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mb-4 mb-lg-0 footer-content">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/network" className="text-white text-decoration-none">Network</Link>
              </li>
              <li className="mb-2">
                <Link href="/shop" className="text-white text-decoration-none">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 footer-content">
            <h5 className="mb-3">Documents</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/terms-and-conditions" className="text-white text-decoration-none">Terms and Conditions</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link href="/legal" className="text-white text-decoration-none">Legal</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top border-secondary pt-4 mt-4">
          <p className="text-center text-md-center text-start mb-0">
            © {mounted ? new Date().getFullYear() : '2026'} Centuries Mutual. All rights reserved.
          </p>
=======
>>>>>>> cb752f65a79af2a8fb8947423ead53308279bbba
        </div>
      </div>
    </footer>
  )
} 