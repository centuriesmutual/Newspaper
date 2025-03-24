'use client'

import Image from 'next/image'

export default function Tax() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#14432A' }}>
                Tax Preparation Services
              </h1>
              <p className="lead mb-4">
                Professional tax preparation services to maximize your returns and ensure compliance.
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
                  alt="Tax Preparation"
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

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <i className="bi bi-calculator display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Personal Tax Returns</h3>
                  <p className="text-muted text-center">
                    Comprehensive personal tax preparation services tailored to your unique financial situation.
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
                  <h3 className="h4 text-center mb-3">Business Tax Returns</h3>
                  <p className="text-muted text-center">
                    Expert business tax preparation to help you navigate complex tax regulations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <i className="bi bi-graph-up display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Tax Planning</h3>
                  <p className="text-muted text-center">
                    Strategic tax planning to minimize your tax burden and maximize your savings.
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
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Why Choose Our Tax Services?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-star-fill fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Expert Guidance</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Professional tax preparation by experienced experts who stay current with tax laws.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-graph-up-arrow fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Maximize Returns</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Identify all eligible deductions and credits to maximize your tax savings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-clock-fill fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Time Savings</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Save valuable time by letting our experts handle your tax preparation needs.
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
              <h2 className="text-white mb-4">Ready to Get Started?</h2>
              <p className="lead text-white mb-4">
                Schedule a consultation with our tax experts today.
              </p>
              <a href="/schedule" className="btn btn-light btn-lg px-4">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 