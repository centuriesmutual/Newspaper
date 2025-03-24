'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section 
      className="hero-section position-relative" 
      style={{ 
        minHeight: '60vh',
        backgroundColor: '#14432A',
        paddingTop: '0',
        paddingBottom: '1rem'
      }}
    >
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-section {
            min-height: 100dvh !important;
          }
          .hero-row {
            min-height: 100dvh !important;
          }
        }
      `}</style>
      <div className="container position-relative">
        <div 
          className="row align-items-center hero-row" 
          style={{ 
            minHeight: '60vh',
            paddingTop: '4rem'
          }}
        >
          <div className="col-lg-6 order-lg-2">
            <motion.div 
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
                Wealth Management:<br />Secure Your Legacy
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
                Providing institutional-grade investment solutions and comprehensive wealth 
                management services to help you achieve your long-term financial objectives.
              </motion.p>
              <motion.div 
                className="d-flex gap-2 justify-content-center justify-content-lg-start flex-column flex-sm-row px-3 px-sm-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginBottom: '2rem' }}
              >
                <Link href="/schedule" className="btn btn-light btn-lg">Schedule Consultation</Link>
                <Link href="/learnmore" className="btn btn-outline-light btn-lg">Learn More</Link>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="col-lg-6 order-lg-1">
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
                marginTop: '20px'
              }}>
                <Image
                  src="/mountians.jpeg"
                  alt="Majestic Mountains"
                  fill
                  priority
                  quality={100}
                  className="rounded-5"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transform: 'scale(1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15), 0 1px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              <div className="mb-3 overflow-hidden d-lg-none" style={{ 
                height: '400px',
                position: 'relative',
                marginTop: '0',
                marginBottom: '1.5rem'
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
                    objectPosition: 'center',
                    transform: 'scale(1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15), 0 1px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              
              <motion.div 
                className="bg-white p-4 rounded-3 shadow-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="d-flex gap-4">
                  <div>
                    <h3 className="h2" style={{ color: '#14432A' }}>$14.2M</h3>
                    <p className="mb-0 text-muted">Assets Under Management</p>
                  </div>
                  <div className="border-start ps-4">
                    <h3 className="h2" style={{ color: '#14432A' }}>25+</h3>
                    <p className="mb-0 text-muted">Years of Excellence</p>
                  </div>
                  <div className="border-start ps-4">
                    <h3 className="h2" style={{ color: '#14432A' }}>500+</h3>
                    <p className="mb-0 text-muted">Satisfied Clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 