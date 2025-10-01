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
  
  if (pathname !== '/') {
    return null
  }

  // Calculate responsive sizes
  const getLogoSize = () => {
    if (!mounted) return { width: 40, height: 40, fontSize: '1.25rem' }
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
            text-align: center;
          }
          .footer-logo {
            justify-content: center;
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
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-white">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/documents" className="text-white text-decoration-none">Documents</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4 mb-lg-0 footer-content">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/mortgageloans" className="text-decoration-none text-white">Mortgage Loans</Link>
              </li>
              <li className="mb-2">
                <Link href="/healthinsurance" className="text-white text-decoration-none">Health Insurance</Link>
              </li>
              <li className="mb-2">
                <Link href="/tax" className="text-white text-decoration-none">Tax Preparation</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 footer-content">
            <h5 className="mb-3">Contact Us</h5>
            <div className="d-flex align-items-start">
              <i className="bi bi-geo-alt me-2 mt-1" style={{ color: '#14432A' }}></i>
              <div>
                8080 N Central Expressway<br />
                Dallas, TX
              </div>
            </div>
          </div>
        </div>
        <div className="border-top border-secondary pt-4 mt-4">
          <p className="text-center mb-0">
            © {new Date().getFullYear()} Centuries Mutual. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 