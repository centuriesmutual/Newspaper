'use client'

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
            <p className="mb-3">
              Providing a comprehensive brokerage network to further a secure a better future.
            </p>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              {/* GitHub Logo */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                style={{ opacity: 0.8, transition: 'opacity 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'brightness(0) invert(1)' }}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* GitLab Logo */}
              <a 
                href="https://gitlab.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                style={{ opacity: 0.8, transition: 'opacity 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'brightness(0) invert(1)' }}>
                  <path d="M12.017 0L1.396 8.388l1.752 14.787L12.017 24l8.869-.825 1.751-14.787L12.017 0zm0 2.106l9.02 7.106-.843 7.12L12 17.882l-8.178-1.55-.842-7.12 9.02-7.106zM8.449 8.832l-1.833-.14-.498 4.215 2.331-.28v-3.795zm5.1 0v3.795l2.331.28-.498-4.215-1.833.14zm-5.996-1.19l1.372.11 1.465 3.43-2.837-.34v-3.2zm7.543 0v3.2l-2.837.34 1.465-3.43 1.372-.11zm-4.119 1.19L12 13.714l2.123-3.082-4.246.39zm-2.453.96l2.332.28 1.465 3.43-1.833 1.76-1.964-5.47zm9.902 0l-1.964 5.47-1.833-1.76 1.465-3.43 2.332-.28zm-5.35 1.19L12 15.23l-1.194-1.288 2.388-.22zm-1.7.96l1.833 1.76.498 4.215-2.331-.28v-5.695zm4.1 0v5.695l-2.331.28.498-4.215 1.833-1.76z"/>
                </svg>
              </a>
              {/* Dallas, Texas Location */}
              <div className="d-flex align-items-center text-white" style={{ opacity: 0.8 }}>
                <MapPinIcon style={{ width: '20px', height: '20px', marginRight: '6px' }} />
                <span style={{ fontSize: '0.9rem' }}>Dallas, Texas</span>
              </div>
            </div>
          </div>
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
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/shop" className="text-white text-decoration-none">Shop</Link>
              </li>
              <li className="mb-2">
                <Link href="/network" className="text-white text-decoration-none">Network</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mb-4 mb-lg-0 footer-content">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/newspaper" className="text-white text-decoration-none">Newspaper</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white text-decoration-none">Help Desk</Link>
              </li>
              <li className="mb-2">
                <Link href="/careers" className="text-white text-decoration-none">Careers</Link>
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
        </div>
      </div>
    </footer>
  )
} 