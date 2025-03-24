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
                Comprehensive health coverage tailored to your needs and budget.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ 
                height: '500px',
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <Image
                  src="/mountians.jpeg"
                  alt="Health Insurance"
                  fill
                  className="rounded-4"
                  style={{ 
                    objectFit: 'contain',
                    objectPosition: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <i className="bi bi-heart-pulse display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Individual Plans</h3>
                  <p className="text-muted text-center">
                    Personalized health coverage for individuals and families.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <i className="bi bi-building display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Group Plans</h3>
                  <p className="text-muted text-center">
                    Comprehensive coverage for businesses and organizations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <i className="bi bi-plus-circle display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Supplemental Plans</h3>
                  <p className="text-muted text-center">
                    Additional coverage to enhance your existing health plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-shield-check fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Comprehensive Coverage</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Access to a wide network of healthcare providers and specialists.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-cash-stack fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Affordable Options</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Competitive rates and flexible payment options to suit your budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-headset fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">24/7 Support</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Dedicated customer service team available around the clock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: '#14432A' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mb-4">Ready to Get Covered?</h2>
              <p className="lead text-white mb-4">
                Schedule a consultation with our health insurance experts today.
              </p>
              <a href="/schedule" className="btn btn-light btn-lg px-4">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 