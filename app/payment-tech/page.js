import Footer from '../../components/Footer'

export default function PaymentTech() {
  return (
    <main>
      <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                Payment Tech Platform
              </h1>
              <p className="lead mb-4" style={{ color: '#495057', fontSize: '1.2rem' }}>
                Revolutionize how you manage your finances with our intelligent payment platform. 
                Pay bills effortlessly, track expenses, and unlock exclusive travel benefits.
              </p>
              <p className="mb-5" style={{ color: '#6c757d' }}>
                Our platform combines cutting-edge technology with user-friendly design to help you 
                maximize your financial potential and travel experiences.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div style={{
                  background: 'rgba(20, 67, 42, 0.05)',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '1px solid rgba(20, 67, 42, 0.1)'
                }}>
                  <h3 className="fw-bold mb-4" style={{ color: '#14432A' }}>Platform Features</h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{
                          background: 'rgba(20, 67, 42, 0.1)',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <svg width="20" height="20" fill="#14432A" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>Smart Bill Pay</h6>
                          <small className="text-muted">Automated payments</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{
                          background: 'rgba(20, 67, 42, 0.1)',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <svg width="20" height="20" fill="#14432A" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>Travel Rewards</h6>
                          <small className="text-muted">Earn points & miles</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{
                          background: 'rgba(20, 67, 42, 0.1)',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <svg width="20" height="20" fill="#14432A" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>Expense Tracking</h6>
                          <small className="text-muted">Detailed analytics</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{
                          background: 'rgba(20, 67, 42, 0.1)',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <svg width="20" height="20" fill="#14432A" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>Secure Platform</h6>
                          <small className="text-muted">Bank-level security</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <h2 className="fw-bold mb-4" style={{ color: '#14432A' }}>How It Works</h2>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <span className="fw-bold" style={{ color: '#14432A', fontSize: '1.5rem' }}>1</span>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Connect Your Accounts</h5>
                  <p className="text-muted">Securely link your bank accounts, credit cards, and utility providers to our platform.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <span className="fw-bold" style={{ color: '#14432A', fontSize: '1.5rem' }}>2</span>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Set Up Auto-Payments</h5>
                  <p className="text-muted">Configure automatic bill payments and never miss a due date again.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <span className="fw-bold" style={{ color: '#14432A', fontSize: '1.5rem' }}>3</span>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Earn Rewards</h5>
                  <p className="text-muted">Accumulate travel points and cashback rewards with every transaction.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '16px', background: 'rgba(20, 67, 42, 0.05)' }}>
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-3" style={{ color: '#14432A' }}>Ready to Get Started?</h3>
                  <p className="lead mb-4" style={{ color: '#495057' }}>
                    Join thousands of users who are already maximizing their financial potential.
                  </p>
                  <div className="d-flex gap-3 justify-content-center">
                    <a href="/dashboard" className="btn btn-primary btn-lg px-4 py-3 fw-bold" style={{ borderRadius: '12px' }}>
                      View Dashboard
                    </a>
                    <a href="/contact" className="btn btn-outline-primary btn-lg px-4 py-3 fw-bold" style={{ borderRadius: '12px' }}>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
