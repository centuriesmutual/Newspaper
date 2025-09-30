'use client'

import Image from 'next/image'

export default function LearnMore() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#14432A' }}>
                Discover Our Services
              </h1>
              <p className="lead mb-4">
                Comprehensive financial solutions tailored to your unique needs and goals.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: '400px' }}>
                <Image
                  src="/mountians.jpeg"
                  alt="Financial Services"
                  fill
                  className="rounded-4"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <i className="bi bi-shield-check display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Mortgage Loans</h3>
                  <p className="text-muted text-center">
                    Competitive mortgage loan solutions to help you secure your dream home with expert guidance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <i className="bi bi-heart-pulse display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Health Insurance</h3>
                  <p className="text-muted text-center">
                    Expert guidance for Medicare and ACA plans to ensure your health coverage needs are met.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <i className="bi bi-calculator display-4" style={{ color: '#14432A' }}></i>
                  </div>
                  <h3 className="h4 text-center mb-3">Tax Preparation</h3>
                  <p className="text-muted text-center">
                    Professional tax services to maximize your returns and ensure compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Why Choose Centuries Mutual?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-award-fill fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">2024 Est.</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Modern financial services with innovative solutions, helping clients achieve their goals with cutting-edge strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-people-fill fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Personalized Service</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Tailored solutions that align with your unique financial situation and long-term objectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-shield-lock-fill fs-4" style={{ color: '#14432A' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Trusted Partner</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Building lasting relationships based on trust, transparency, and exceptional service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Our Process</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="text-center">
                <div className="rounded-circle bg-light p-4 mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-1-circle-fill fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5">Initial Consultation</h4>
                <p className="text-muted small">Understanding your needs and goals</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="rounded-circle bg-light p-4 mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-2-circle-fill fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5">Analysis</h4>
                <p className="text-muted small">Evaluating your current situation</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="rounded-circle bg-light p-4 mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-3-circle-fill fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5">Strategy</h4>
                <p className="text-muted small">Developing your custom plan</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="rounded-circle bg-light p-4 mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-4-circle-fill fs-4" style={{ color: '#14432A' }}></i>
                </div>
                <h4 className="h5">Implementation</h4>
                <p className="text-muted small">Putting your plan into action</p>
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
                Schedule a consultation with our experts and take the first step towards your financial goals.
              </p>
              <a href="/schedule" className="btn btn-light btn-lg px-4">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 