'use client'

import Image from 'next/image'

export default function Legacy() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 position-relative">
            <div className="position-relative" style={{ height: '600px', overflow: 'hidden' }}>
              <Image
                src="/deer.jpeg"
                alt="Legacy Painting of Deer Family"
                fill
                priority
                quality={100}
                className="rounded-3"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  transform: 'scale(0.8)',
                  transformOrigin: 'center center'
                }}
              />
            </div>
            <div className="position-absolute bottom-0 end-0 bg-primary text-white p-4 rounded-3 translate-middle-y">
              <p className="h3 mb-1">2024</p>
              <p className="mb-0">Est.</p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <h2 className="display-5 mb-4" style={{ 
              fontFamily: "'Playfair Display', serif",
              color: '#14432A'
            }}>A Legacy of Trust</h2>
            <p className="text-muted mb-4">
              At Centuries Mutual, we've built our reputation on a foundation of trust, 
              expertise, and unwavering commitment to our clients' financial success through 
              secure, reliable systems and proven credibility.
            </p>
            <p className="text-muted mb-5">
              Our advanced security infrastructure ensures that every family 
              receives the highest level of protection and personalized attention. Through 
              state-of-the-art encryption, secure data handling, and transparent practices, 
              we guide families toward financial security with complete confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 