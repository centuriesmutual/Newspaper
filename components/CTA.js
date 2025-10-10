'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7">
            <h2 className="display-6 text-white mb-3">
              Ready for a Consultation?
            </h2>
            <p className="lead text-white-50 mb-0" style={{ maxWidth: '100%' }}>
              Our team of experienced professionals is ready to help you find the perfect coverage for your needs.
            </p>
          </div>
          <div className="col-lg-4 text-center text-lg-center mt-4 mt-lg-0">
            <Link href="/connect" className="btn btn-light btn-lg px-4">
              Connect with Broker
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 