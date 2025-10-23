import Footer from '../../components/Footer'

export default function RealEstate() {
  return (
    <main>
      <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-5">
          {/* Hero Section */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 className="display-3 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                Real Estate Services
              </h1>
              <p className="lead mb-5" style={{ color: '#495057', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                Comprehensive real estate solutions designed to help you find the perfect property, whether you're buying, selling, or investing in real estate.
              </p>
            </div>
          </div>

          {/* Services Overview */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-lg" style={{ borderRadius: '20px', background: 'white' }}>
                <div className="card-body p-5">
                  <h2 className="fw-bold mb-4" style={{ color: '#14432A', fontSize: '2rem' }}>Our Real Estate Services</h2>
                  
                  {/* Property Services */}
                  <div className="mb-5">
                    <h3 className="h4 fw-bold mb-4" style={{ color: '#14432A', fontSize: '1.5rem' }}>Property Services</h3>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start p-3" style={{ background: 'rgba(20, 67, 42, 0.05)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.1)' }}>
                          <div style={{
                            background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                            borderRadius: '8px',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px',
                            flexShrink: 0
                          }}>
                            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Property Sales</h6>
                            <p className="text-muted mb-0 small">Expert guidance through the home selling process</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start p-3" style={{ background: 'rgba(20, 67, 42, 0.05)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.1)' }}>
                          <div style={{
                            background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                            borderRadius: '8px',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px',
                            flexShrink: 0
                          }}>
                            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Property Purchases</h6>
                            <p className="text-muted mb-0 small">Find and secure your dream home with expert assistance</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start p-3" style={{ background: 'rgba(20, 67, 42, 0.05)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.1)' }}>
                          <div style={{
                            background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                            borderRadius: '8px',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px',
                            flexShrink: 0
                          }}>
                            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Property Management</h6>
                            <p className="text-muted mb-0 small">Comprehensive property management and maintenance services</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start p-3" style={{ background: 'rgba(20, 67, 42, 0.05)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.1)' }}>
                          <div style={{
                            background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                            borderRadius: '8px',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px',
                            flexShrink: 0
                          }}>
                            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Investment Properties</h6>
                            <p className="text-muted mb-0 small">Strategic real estate investment opportunities and guidance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Analysis */}
                  <div className="mb-5">
                    <h3 className="h4 fw-bold mb-4" style={{ color: '#14432A', fontSize: '1.5rem' }}>Market Analysis & Consulting</h3>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Property Valuation</h6>
                          <p className="text-muted mb-0 small">Accurate property assessments and market value analysis</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Market Trends</h6>
                          <p className="text-muted mb-0 small">Current market insights and future trend predictions</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Investment Strategy</h6>
                          <p className="text-muted mb-0 small">Personalized investment strategies and portfolio development</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Legal Support</h6>
                          <p className="text-muted mb-0 small">Transaction support and legal documentation assistance</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)' }}>
                      <div className="card-body p-5">
                        <h3 className="text-white fw-bold mb-3" style={{ fontSize: '1.8rem' }}>Ready to Start Your Real Estate Journey?</h3>
                        <p className="text-white-50 mb-4 lead">
                          Contact our expert real estate team for personalized guidance and comprehensive property solutions.
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                          <a href="/contact" className="btn btn-light btn-lg px-4 py-3 fw-bold" style={{ borderRadius: '12px', minWidth: '180px' }}>
                            Get Started
                          </a>
                          <a href="/learnmore" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold" style={{ borderRadius: '12px', minWidth: '180px' }}>
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
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
