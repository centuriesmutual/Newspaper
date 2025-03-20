'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-section position-relative bg-dark" style={{ minHeight: '90vh' }}>
      <div className="container position-relative">
        <div className="row align-items-end" style={{ minHeight: '90vh', paddingBottom: '2rem' }}>
          <div className="col-lg-6 order-lg-2">
            <div style={{ marginTop: '120px' }}>
              <h1 className="display-3 text-white fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Wealth Management:<br />Secure Your Legacy
              </h1>
              <p className="lead text-white mb-5" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                fontSize: '1.3rem',
                maxWidth: '90%'
              }}>
                Providing institutional-grade investment solutions and comprehensive wealth 
                management services to help you achieve your long-term financial objectives.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-light btn-lg px-4">Schedule Consultation</button>
                <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 order-lg-1">
            <div className="position-relative">
              <div className="mb-5 overflow-hidden" style={{ 
                height: '650px',
                position: 'relative',
                marginTop: '50px'
              }}>
                <Image
                  src="/Bison.jpeg"
                  alt="Majestic Bison in Snow"
                  fill
                  priority
                  quality={100}
                  className="rounded-3"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 90%',
                    transform: 'scale(1.1)'
                  }}
                />
              </div>
              
              <div className="bg-white p-4 rounded-3 shadow-lg">
                <div className="d-flex gap-4">
                  <div>
                    <h3 className="h2" style={{ color: '#14432A' }}>$14.2M</h3>
                    <p className="mb-0 text-muted">Assets Under Management</p>
                  </div>
                  <div className="border-start ps-4">
                    <h3 className="h2" style={{ color: '#14432A' }}>25+</h3>
                    <p className="mb-0 text-muted">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 