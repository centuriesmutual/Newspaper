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
                Specializing in Medicare plans and Affordable Care Act coverage to ensure you have the right health insurance protection.
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
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Medicare Plans</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Medicare Advantage</h3>
                  <p className="text-muted">
                    Comprehensive coverage combining hospital, medical, and often prescription drug benefits in one plan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Medicare Supplement</h3>
                  <p className="text-muted">
                    Additional coverage to help pay for out-of-pocket costs not covered by Original Medicare.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Prescription Drug Plans</h3>
                  <p className="text-muted">
                    Standalone prescription drug coverage for those with Original Medicare.
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
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Affordable Care Act Plans</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Individual & Family Plans</h3>
                  <p className="text-muted">
                    Comprehensive coverage options for individuals and families, with potential subsidies based on income.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Small Business Plans</h3>
                  <p className="text-muted">
                    Affordable group coverage options for small businesses and their employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-shield-check fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5 mb-3">Expert Guidance</h4>
                <p className="text-muted">Licensed agents specializing in Medicare and ACA plans.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-cash-stack fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5 mb-3">Cost Optimization</h4>
                <p className="text-muted">Find the most affordable plans that meet your needs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-headset fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5 mb-3">Ongoing Support</h4>
                <p className="text-muted">Dedicated support for all your health insurance needs.</p>
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
              <h2 className="mb-4" style={{ color: '#14432A' }}>Need Health Insurance?</h2>
              <p className="lead mb-4">
                Let us help you find the perfect Medicare or ACA plan for your needs.
              </p>
              <button className="btn btn-primary btn-lg px-4">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 