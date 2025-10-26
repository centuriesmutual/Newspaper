'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section 
      className="hero-section position-relative overflow-hidden" 
      style={{ 
        minHeight: '85vh',
        backgroundColor: '#14432A',
        paddingTop: '0',
        paddingBottom: '0.5rem'
      }}
    >
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-section {
            min-height: 80vh !important;
            overflow-x: hidden !important;
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
          .hero-row {
            min-height: 80vh !important;
            overflow-x: hidden !important;
            padding-top: 0.25rem !important;
          }
          .hero-content {
            overflow-x: hidden !important;
            margin-top: 0.5rem !important;
          }
        }
      `}</style>
      <div className="container position-relative">
        <div 
          className="row align-items-center hero-row" 
          style={{ 
            minHeight: '85vh',
            paddingTop: '0.25rem'
          }}
        >
          <div className="col-lg-6 order-lg-2 order-2 order-md-2 order-sm-1">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginTop: '0' }}
            >
              <motion.h1 
                className="display-3 text-white fw-bold mb-3 text-center text-lg-start" 
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: 'calc(1.8rem + 1.5vw)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="d-none d-md-inline">Your Community Brokerage:</span>
                <span className="d-md-none" style={{ fontSize: 'calc(1.4rem + 1.2vw)' }}>Your Community Brokerage:</span>
              </motion.h1>
              <motion.p 
                className="lead text-white mb-4 text-center text-lg-start" 
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  fontSize: 'calc(0.95rem + 0.5vw)',
                  maxWidth: '100%',
                  margin: '0 auto',
                  marginLeft: '0',
                  padding: '0 0.5rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Connecting individuals with secure real estate solutions, digital document management, and community-driven roommate matching to simplify property transactions and enhance living experiences.
              </motion.p>
              <motion.div 
                className="d-flex gap-2 justify-content-center justify-content-lg-start flex-column flex-sm-row px-3 px-sm-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginBottom: '2rem', position: 'relative', zIndex: 5 }}
              >
                <Link href="/rentalequity" className="btn btn-outline-light btn-lg" style={{ position: 'relative', zIndex: 10 }}>Learn More</Link>
                <Link href="/rewards" className="btn btn-light btn-lg">Download App</Link>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="col-lg-6 order-lg-1 order-1 order-md-1 order-sm-2">
            <motion.div 
              className="position-relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 overflow-hidden d-none d-lg-block" style={{ 
                height: '650px',
                width: '180%',
                marginLeft: '-40%',
                position: 'relative',
                marginTop: '20px',
                borderRadius: '24px'
              }}>
                <Image
                  src="/mountians.jpeg"
                  alt="Majestic Mountains"
                  fill
                  priority
                  quality={100}
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transform: 'scale(1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15), 0 1px 8px rgba(0,0,0,0.1)',
                    borderRadius: '24px'
                  }}
                />
              </div>
              <div className="mb-3 overflow-hidden d-lg-none" style={{ 
                height: '400px',
                position: 'relative',
                marginTop: '0',
                marginBottom: '1.5rem',
                borderRadius: '20px'
              }}>
                <Image
                  src="/mountians.jpeg"
                  alt="Majestic Mountains"
                  fill
                  priority
                  quality={100}
                  className="rounded-3"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center bottom',
                    transform: 'scale(1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15), 0 1px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 