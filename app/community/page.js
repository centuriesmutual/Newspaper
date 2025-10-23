import Footer from '../../components/Footer'

export default function Community() {
  return (
    <main>
      <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-5">
          {/* Hero Section */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 className="display-3 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                Community Standards
              </h1>
              <p className="lead mb-5" style={{ color: '#495057', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                Our comprehensive community standards ensure a safe, respectful, and secure environment for all platform users. These guidelines protect our community members and maintain the highest standards of conduct and safety.
              </p>
            </div>
          </div>

          {/* Platform Overview */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-lg" style={{ borderRadius: '20px', background: 'white' }}>
                <div className="card-body p-5">
                  <h2 className="fw-bold mb-4" style={{ color: '#14432A', fontSize: '2rem' }}>User Protection & Safety Standards</h2>
                  
                  {/* Safety Standards */}
                  <div className="mb-5">
                    <h3 className="h4 fw-bold mb-4" style={{ color: '#14432A', fontSize: '1.5rem' }}>1. Safety & Security Standards</h3>
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
                              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Identity Verification</h6>
                            <p className="text-muted mb-0 small">Mandatory ID verification and background checks for all members</p>
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
                              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Safety Monitoring</h6>
                            <p className="text-muted mb-0 small">24/7 automated monitoring and human review of all interactions</p>
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
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Report System</h6>
                            <p className="text-muted mb-0 small">Easy reporting mechanism for inappropriate behavior or safety concerns</p>
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
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Code of Conduct</h6>
                            <p className="text-muted mb-0 small">Clear guidelines for respectful and appropriate community behavior</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Safety Standards */}
                    <div className="mt-4">
                      <h6 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.1rem' }}>Protection Standards:</h6>
                      <div className="row g-3">
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Zero Tolerance Policy</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Privacy Protection</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Data Security</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Anti-Harassment</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Safe Environment</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>User Rights</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)' }}>
                      <div className="card-body p-5">
                        <h3 className="text-white fw-bold mb-3" style={{ fontSize: '1.8rem' }}>Your Safety is Our Priority</h3>
                        <p className="text-white-50 mb-4 lead">
                          Join a community where your safety, privacy, and well-being are protected by comprehensive standards and monitoring.
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                          <a href="/contact" className="btn btn-light btn-lg px-4 py-3 fw-bold" style={{ borderRadius: '12px', minWidth: '180px' }}>
                            Report Issue
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
