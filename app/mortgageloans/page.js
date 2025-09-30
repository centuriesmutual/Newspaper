import Image from 'next/image'
import Link from 'next/link'

export default function MortgageLoans() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <div className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#14432A' }}>
                Mortgage Loan Solutions
              </h1>
              <p className="lead text-muted mb-4">
                Secure your dream home with our competitive mortgage loan solutions and expert guidance.
              </p>
              <div className="d-flex gap-3">
                <Link href="/schedule" className="btn btn-primary btn-lg" style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}>
                  Get Started
                </Link>
                <Link href="/learnmore" className="btn btn-outline-primary btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/mountians.jpeg"
                alt="Mortgage Loans"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Loan Types Section */}
      <div className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-house text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                  </div>
                  <h3 className="h4 text-center mb-3">Conventional Loans</h3>
                  <p className="text-muted text-center mb-4">
                    Traditional mortgage loans with competitive rates and flexible terms for qualified borrowers.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Low down payment options</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Competitive interest rates</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Flexible terms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-shield-check text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                  </div>
                  <h3 className="h4 text-center mb-3">FHA Loans</h3>
                  <p className="text-muted text-center mb-4">
                    Government-backed loans with lower down payment requirements and more flexible qualification criteria.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>3.5% down payment</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Lower credit requirements</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Gift funds allowed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-star text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                  </div>
                  <h3 className="h4 text-center mb-3">VA Loans</h3>
                  <p className="text-muted text-center mb-4">
                    Specialized loans for veterans and active military with no down payment and no PMI requirements.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>No down payment</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>No PMI required</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Competitive rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-center mb-5" style={{ color: '#14432A' }}>Why Choose Our Mortgage Solutions?</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-speedometer2 text-white"></i>
                </div>
                <h5>Fast Processing</h5>
                <p className="text-muted">Quick loan approval and processing to get you into your new home faster.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-currency-dollar text-white"></i>
                </div>
                <h5>Competitive Rates</h5>
                <p className="text-muted">Low interest rates and flexible terms to fit your budget and needs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-people text-white"></i>
                </div>
                <h5>Expert Guidance</h5>
                <p className="text-muted">Dedicated loan officers to guide you through every step of the process.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-shield-check text-white"></i>
                </div>
                <h5>Secure Process</h5>
                <p className="text-muted">Safe and secure loan processing with full data protection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4" style={{ color: '#14432A' }}>Ready to Secure Your Dream Home?</h2>
              <p className="lead text-muted mb-4">
                Schedule a consultation with our experts to find the perfect mortgage solution for your needs.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Link href="/schedule" className="btn btn-primary btn-lg" style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}>
                  Schedule Consultation
                </Link>
                <Link href="/contact" className="btn btn-outline-primary btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
