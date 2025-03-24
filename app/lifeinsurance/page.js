'use client'

import Image from 'next/image'

export default function LifeInsurance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#14432A' }}>
                Life Insurance Solutions
              </h1>
              <p className="lead mb-4">
                Protect your loved ones and secure your legacy with comprehensive life insurance coverage.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: '300px' }}>
                <Image
                  src="/mountians.jpeg"
                  alt="Life Insurance"
                  fill
                  className="rounded-4"
                  style={{ objectFit: 'cover' }}
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
                    <i className="bi bi-shield-check display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Term Life Insurance</h3>
                  <p className="text-muted text-center">
                    Affordable coverage for a specific period, perfect for protecting your family during key life stages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <i className="bi bi-gem display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Whole Life Insurance</h3>
                  <p className="text-muted text-center">
                    Permanent coverage with cash value accumulation and guaranteed death benefits.
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
                  <h3 className="h4 text-center mb-3">Universal Life Insurance</h3>
                  <p className="text-muted text-center">
                    Flexible coverage with adjustable premiums and death benefits to adapt to your changing needs.
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
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Why Choose Our Life Insurance Solutions?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-shield-lock-fill fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Financial Security</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Ensure your loved ones are protected with comprehensive coverage tailored to your needs.
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
                    <h3 className="h5 mb-0">Tax Benefits</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Take advantage of tax-deferred growth and potential tax-free death benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-people-fill fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Family Protection</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Provide for your family's future with guaranteed death benefits and optional riders.
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
              <h2 className="text-white mb-4">Ready to Protect Your Loved Ones?</h2>
              <p className="lead text-white mb-4">
                Schedule a consultation with our experts to find the perfect life insurance solution for your needs.
              </p>
              <a href="/schedule" className="btn btn-light btn-lg px-4">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 