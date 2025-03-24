'use client'

import Image from 'next/image'

export default function Legacy() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 position-relative">
            <div className="position-relative" style={{ height: '600px' }}>
              <Image
                src="/deer.jpeg"
                alt="Legacy Painting of Deer Family"
                fill
                priority
                quality={100}
                className="rounded-3"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            <div className="position-absolute bottom-0 end-0 bg-primary text-white p-4 rounded-3 translate-middle-y">
              <p className="h3 mb-1">25+</p>
              <p className="mb-0">Years of Excellence</p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <h2 className="display-5 mb-4" style={{ 
              fontFamily: "'Playfair Display', serif",
              color: '#14432A'
            }}>A Legacy of Trust</h2>
            <p className="lead text-muted mb-5">
              At Centuries Mutual, we've built our reputation on a foundation of trust, 
              expertise, and unwavering commitment to our clients' financial success.
            </p>
            
            <div className="row g-4">
              <div className="col-md-4">
                <div className="stats-card">
                  <p className="h2 mb-1" style={{ color: '#14432A' }}>98%</p>
                  <p className="text-muted mb-0">Client Retention</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stats-card">
                  <p className="h2 mb-1" style={{ color: '#14432A' }}>48</p>
                  <p className="text-muted mb-0">States Served</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stats-card">
                  <p className="h2 mb-1" style={{ color: '#14432A' }}>50K+</p>
                  <p className="text-muted mb-0">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 