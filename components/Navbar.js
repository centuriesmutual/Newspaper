'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate responsive sizes
  const getLogoSize = () => {
    if (windowWidth < 400) return { width: 20, height: 10, fontSize: '0.75rem' }
    if (windowWidth < 640) return { width: 25, height: 12, fontSize: '0.85rem' }
    if (windowWidth < 768) return { width: 40, height: 20, fontSize: '1.2rem' }
    return { width: 200, height: 100, fontSize: '3.2rem' }
  }

  const { width, height, fontSize } = getLogoSize()

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
        
        @media (max-width: 640px) {
          .navbar {
            min-height: 50px;
          }
          .navbar .container {
            padding-left: 6px;
            padding-right: 6px;
            gap: 4px;
          }
          .navbar-brand {
            max-width: calc(100vw - 100px);
            overflow: visible;
          }
          .btn-primary.mobile-login {
            padding: 3px 6px !important;
            font-size: 0.75rem !important;
            min-width: auto !important;
            margin-left: auto;
          }
        }
      `}</style>
      
      <nav className="navbar navbar-light bg-white py-1">
        <div className="container d-flex justify-content-between align-items-center">
          {isLoginPage ? (
            <Link href="/" className="btn btn-outline-primary">
              <i className="bi bi-arrow-left me-2"></i>
              Back to Home
            </Link>
          ) : (
            <Link href="/" className="navbar-brand d-flex align-items-center m-0">
              <div className="d-flex align-items-center">
                <Image 
                  src="/cmlogotreesmall-removebg-preview.png" 
                  alt="Centuries Mutual" 
                  width={width}
                  height={height}
                  priority
                  quality={100}
                  style={{ 
                    objectFit: 'contain',
                    marginRight: '2px'
                  }}
                />
                <span style={{ 
                  color: '#14432A',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: fontSize,
                  fontWeight: '500',
                  letterSpacing: windowWidth < 640 ? '-0.2px' : '0.5px',
                  whiteSpace: 'nowrap',
                  display: 'inline-block'
                }}>
                  Centuries Mutual
                </span>
              </div>
            </Link>
          )}
          {!isLoginPage && (
            <Link 
              href="/login" 
              className="btn btn-primary px-2 px-lg-4 py-1 py-lg-2 mobile-login"
              style={{ 
                backgroundColor: '#14432A', 
                borderColor: '#14432A',
                fontSize: windowWidth < 640 ? '0.75rem' : '1rem',
                whiteSpace: 'nowrap',
                minWidth: windowWidth < 640 ? '50px' : '120px'
              }}
            >
              Client Login
            </Link>
          )}
        </div>
      </nav>
    </>
  )
} 