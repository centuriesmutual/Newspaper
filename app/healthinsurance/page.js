'use client'

import Image from 'next/image'

export default function HealthInsurance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#14432A' }}>
                Health Insurance Solutions
              </h1>
              <p className="lead mb-4">
                As an independent insurance broker, we provide expert guidance in selecting the perfect Medicare or ACA plan that fits your needs and budget.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: '300px' }}>
                <Image
                  src="/mountians.jpeg"
                  alt="Health Insurance"
                  fill
                  className="rounded-4"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medicare Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Medicare Insurance Solutions</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Medicare Advantage</h3>
                  <p className="text-muted">
                    We broker plans from multiple carriers, helping you find Medicare Advantage coverage that combines hospital, medical, and often prescription drug benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Medicare Supplement</h3>
                  <p className="text-muted">
                    Compare Medicare Supplement plans from various carriers to find the best coverage for your out-of-pocket costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Prescription Drug Plans</h3>
                  <p className="text-muted">
                    Access a wide range of Medicare Part D prescription drug plans to ensure your medications are covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACA Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Affordable Care Act (ACA) Plans</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Individual & Family Coverage</h3>
                  <p className="text-muted">
                    We broker ACA marketplace plans from multiple carriers, helping you find coverage that qualifies for subsidies and meets your healthcare needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Small Business Coverage</h3>
                  <p className="text-muted">
                    Access group health insurance options for small businesses through the SHOP marketplace, with plans from various carriers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Benefits Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Why Choose Our Brokerage Services?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-shield-check fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5 mb-3">Independent Brokerage</h4>
                <p className="text-muted">We represent multiple carriers, ensuring you get unbiased recommendations.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-cash-stack fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5 mb-3">Cost Optimization</h4>
                <p className="text-muted">Compare plans from multiple carriers to find the best value for your needs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-headset fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5 mb-3">Expert Support</h4>
                <p className="text-muted">Licensed agents providing guidance throughout your insurance journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4" style={{ color: '#14432A' }}>Ready to Find Your Perfect Health Plan?</h2>
              <p className="lead mb-4">
                Let our experienced brokers help you navigate Medicare and ACA options to find the coverage that's right for you.
              </p>
              <button className="btn btn-primary btn-lg px-4">Schedule a Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 