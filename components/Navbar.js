'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  const isSignupPage = pathname === '/signup'
  const isHomePage = pathname === '/'
  const isRentalEquityPage = pathname === '/rentalequity'

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
    if (!mounted) return { width: 200, height: 100, fontSize: '3.2rem' }
    if (windowWidth < 640) return { width: 50, height: 25, fontSize: '1.1rem' }
    if (windowWidth < 768) return { width: 40, height: 20, fontSize: '1.2rem' }
    return { width: 200, height: 100, fontSize: '3.2rem' }
  }

  const { width, height, fontSize } = getLogoSize()

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
        
        .top-bar {
          background: white;
          color: #333;
          padding: 8px 0;
          font-size: 0.9rem;
          border-bottom: 1px solid #e9ecef;
        }
        
        .top-bar a {
          color: #14432A;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .top-bar a:hover {
          color: #1a5436;
          text-decoration: underline;
        }
        
        .top-bar i {
          color: #14432A;
        }
        
        @media (max-width: 640px) {
          .navbar {
            min-height: 60px;
            padding-top: 8px;
            padding-bottom: 8px;
          }
          .navbar .container {
            padding-left: 15px;
            padding-right: 15px;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            flex-wrap: nowrap !important;
          }
          .navbar-brand {
            max-width: calc(100vw - 120px);
            overflow: visible;
            flex-shrink: 0;
          }
          .btn-primary.mobile-login {
            padding: 6px 10px !important;
            font-size: 0.7rem !important;
            min-width: auto !important;
            margin-left: 0 !important;
            height: 32px !important;
            display: flex !important;
            align-items: center !important;
            line-height: 1 !important;
            flex-shrink: 0;
            white-space: nowrap !important;
          }
          .top-bar {
            font-size: 0.8rem;
            padding: 6px 0;
          }
        }
      `}</style>
      
      {/* Top Bar - Only show on homepage */}
      {isHomePage && (
        <div className="top-bar">
          <div className="container">
            <div className="d-flex align-items-center">
              <i className="bi bi-newspaper me-2"></i>
              <Link href="/newspaper">Newspaper</Link>
            </div>
          </div>
        </div>
      )}
      
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
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap',
                  display: 'inline-block'
                }}>
                  Centuries Mutual
                </span>
              </div>
            </Link>
          )}
          {!isLoginPage && !isSignupPage && !isRentalEquityPage && (
            <Link 
              href="/login" 
              className="btn btn-primary px-2 px-lg-4 py-1 py-lg-2 mobile-login"
              style={{ 
                backgroundColor: '#14432A', 
                borderColor: '#14432A',
                fontSize: '1rem',
                whiteSpace: 'nowrap',
                minWidth: '120px',
                padding: '0.5rem 1rem',
                flexShrink: 0
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