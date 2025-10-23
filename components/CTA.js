'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7">
            <h2 className="display-6 text-white mb-3">
              About Centuries Mutual
            </h2>
            <p className="lead text-white-50 mb-0" style={{ maxWidth: '100%' }}>
              We are a trusted financial services company dedicated to providing comprehensive solutions and building lasting relationships with our clients.
            </p>
          </div>
          <div className="col-lg-4 text-center text-lg-center mt-4 mt-lg-0">
            <Link href="/about" className="btn btn-light btn-lg px-4">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 
