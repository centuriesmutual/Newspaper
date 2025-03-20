'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate responsive sizes
  const getLogoSize = () => {
    if (windowWidth < 400) return { width: 40, height: 20, fontSize: '1rem' }
    if (windowWidth < 640) return { width: 60, height: 30, fontSize: '1.2rem' }
    if (windowWidth < 768) return { width: 100, height: 50, fontSize: '2rem' }
    return { width: 200, height: 100, fontSize: '3.2rem' }
  }

  const { width, height, fontSize } = getLogoSize()

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
        
        @media (max-width: 640px) {
          .navbar .container {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      `}</style>
      
      <nav className="navbar navbar-light bg-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/" className="navbar-brand d-flex align-items-center m-0">
            <Image 
              src="/cmlogotreesmall-removebg-preview.png" 
              alt="Centuries Mutual" 
              width={width}
              height={height}
              priority
              quality={100}
              style={{ 
                objectFit: 'contain',
                marginRight: '0'
              }}
            />
            <span style={{ 
              color: '#14432A',
              marginLeft: windowWidth < 640 ? '-2px' : '-10px',
              fontFamily: "'Playfair Display', serif",
              fontSize: fontSize,
              fontWeight: '500',
              letterSpacing: windowWidth < 640 ? '0' : '0.5px',
              whiteSpace: 'nowrap'
            }}>
              Centuries Mutual
            </span>
          </Link>
          
          <Link 
            href="/login" 
            className="btn btn-primary px-2 px-lg-4 py-1 py-lg-2"
            style={{ 
              backgroundColor: '#14432A', 
              borderColor: '#14432A',
              fontSize: windowWidth < 640 ? '0.8rem' : '1rem',
              whiteSpace: 'nowrap',
              minWidth: windowWidth < 640 ? '80px' : '120px'
            }}
          >
            Client Login
          </Link>
        </div>
      </nav>
    </>
  )
} 