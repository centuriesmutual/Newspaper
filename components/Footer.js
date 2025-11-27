'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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

  return (
    <footer className="bg-dark text-white py-5">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
        
        @media (max-width: 768px) {
          .footer-content {
            text-align: left;
          }
          .footer-logo {
            justify-content: flex-start;
          }
          .footer-links {
            margin-top: 1.5rem;
          }
        }
        .footer-logo-container {
          position: relative;
          width: ${width}px;
          height: ${height}px;
        }
        .footer-logo-container img {
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }
      `}</style>
      <div className="container">
        <div className="row">
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
            <p className="mb-0">
              Providing a comprehensive brokerage network to further a secure a better future.
            </p>
          </div>
          <div className="col-lg-2 mb-4 mb-lg-0 footer-content">
            <h5 className="mb-3">Community</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/newspaper" className="text-white text-decoration-none">Newspaper</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white text-decoration-none">Help Desk</Link>
              </li>
              <li className="mb-2">
                <Link href="/shop" className="text-white text-decoration-none">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4 mb-lg-0 footer-content">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/partners" className="text-white text-decoration-none">Subsidiaries</Link>
              </li>
              <li className="mb-2">
                <Link href="/investor-relations" className="text-white text-decoration-none">Investor Relations</Link>
              </li>
              <li className="mb-2">
                <Link href="/careers" className="text-white text-decoration-none">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 footer-content">
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
            © {mounted ? new Date().getFullYear() : '2025'} Centuries Mutual. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 