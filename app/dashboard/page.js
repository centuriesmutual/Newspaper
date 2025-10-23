import Footer from '../../components/Footer'

export default function Dashboard() {
  return (
    <main>
      <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                Payment Tech Dashboard
              </h1>
              <p className="lead mb-5" style={{ color: '#495057' }}>
                Manage your bills, track expenses, and maximize your travel rewards all in one place.
              </p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <svg width="24" height="24" fill="#14432A" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Auto-Payments</h5>
                  <p className="text-muted mb-0">12 active</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <svg width="24" height="24" fill="#14432A" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Travel Points</h5>
                  <p className="text-muted mb-0">2,450 points</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <svg width="24" height="24" fill="#14432A" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Monthly Bills</h5>
                  <p className="text-muted mb-0">$2,450 total</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <svg width="24" height="24" fill="#14432A" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Security Score</h5>
                  <p className="text-muted mb-0">98% secure</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-header bg-transparent border-0 p-4">
                  <h4 className="fw-bold mb-0" style={{ color: '#14432A' }}>Recent Transactions</h4>
                </div>
                <div className="card-body p-4">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item border-0 px-0 py-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
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
                            <h6 className="mb-1 fw-bold">Rent Payment</h6>
                            <small className="text-muted">Auto-pay • Today</small>
                          </div>
                        </div>
                        <span className="text-success fw-bold">-$1,200</span>
                      </div>
                    </div>
                    <div className="list-group-item border-0 px-0 py-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
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
                            <h6 className="mb-1 fw-bold">Utilities</h6>
                            <small className="text-muted">Auto-pay • Yesterday</small>
                          </div>
                        </div>
                        <span className="text-success fw-bold">-$180</span>
                      </div>
                    </div>
                    <div className="list-group-item border-0 px-0 py-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
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
                            <h6 className="mb-1 fw-bold">Travel Booking</h6>
                            <small className="text-muted">Manual • 2 days ago</small>
                          </div>
                        </div>
                        <span className="text-success fw-bold">-$450</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-header bg-transparent border-0 p-4">
                  <h4 className="fw-bold mb-0" style={{ color: '#14432A' }}>Quick Actions</h4>
                </div>
                <div className="card-body p-4">
                  <div className="d-grid gap-3">
                    <button className="btn btn-primary btn-lg" style={{ borderRadius: '12px' }}>
                      Add New Bill
                    </button>
                    <button className="btn btn-outline-primary btn-lg" style={{ borderRadius: '12px' }}>
                      Set Up Auto-Pay
                    </button>
                    <button className="btn btn-outline-primary btn-lg" style={{ borderRadius: '12px' }}>
                      View Travel Rewards
                    </button>
                    <button className="btn btn-outline-primary btn-lg" style={{ borderRadius: '12px' }}>
                      Download Report
                    </button>
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