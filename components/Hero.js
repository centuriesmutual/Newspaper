'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero-section position-relative" style={{ 
      minHeight: '60vh',
      backgroundColor: '#14432A',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <div className="container position-relative">
        <div className="row align-items-center" style={{ minHeight: '60vh' }}>
          <div className="col-lg-6 order-lg-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginTop: '0' }}
            >
              <motion.h1 
                className="display-3 text-white fw-bold mb-4 text-center text-lg-start" 
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Wealth Management:<br />Secure Your Legacy
              </motion.h1>
              <motion.p 
                className="lead text-white mb-5 text-center text-lg-start" 
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  fontSize: '1.3rem',
                  maxWidth: '100%',
                  margin: '0 auto',
                  marginLeft: '0'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Providing institutional-grade investment solutions and comprehensive wealth 
                management services to help you achieve your long-term financial objectives.
              </motion.p>
              <motion.div 
                className="d-flex gap-3 justify-content-center justify-content-lg-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/schedule" className="btn btn-light btn-lg px-4">Schedule Consultation</Link>
                <Link href="/learnmore" className="btn btn-outline-light btn-lg px-4">Learn More</Link>
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
              <div className="mb-5 overflow-hidden d-none d-lg-block" style={{ 
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
              <div className="mb-5 overflow-hidden d-lg-none" style={{ 
                height: '400px',
                position: 'relative',
                marginTop: '30px'
              }}>
                <Image
                  src="/mountians.jpeg"
                  alt="Majestic Mountains"
                  fill
                  priority
                  quality={100}
                  className="rounded-3"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transform: 'scale(1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15), 0 1px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              
              <motion.div 
                className="bg-white p-4 rounded-3 shadow-lg"
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
                    <p className="mb-0 text-muted">Happy Clients</p>
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