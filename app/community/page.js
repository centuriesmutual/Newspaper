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
                Community Platform
              </h1>
              <p className="lead mb-5" style={{ color: '#495057', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                A comprehensive community platform designed to connect individuals, foster collaboration, and build meaningful relationships through shared experiences, knowledge exchange, and collective growth.
              </p>
            </div>
          </div>

          {/* Platform Overview */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-lg" style={{ borderRadius: '20px', background: 'white' }}>
                <div className="card-body p-5">
                  <h2 className="fw-bold mb-4" style={{ color: '#14432A', fontSize: '2rem' }}>Community Features & Services</h2>
                  
                  {/* Community Dashboard System */}
                  <div className="mb-5">
                    <h3 className="h4 fw-bold mb-4" style={{ color: '#14432A', fontSize: '1.5rem' }}>1. Community Dashboard</h3>
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
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Event Management System</h6>
                            <p className="text-muted mb-0 small">Organize and manage community events, meetups, and gatherings</p>
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
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Community Analytics</h6>
                            <p className="text-muted mb-0 small">Track engagement, growth, and community health metrics</p>
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
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Learning Hub</h6>
                            <p className="text-muted mb-0 small">Shared knowledge base and educational resources for community members</p>
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
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Community Messaging</h6>
                            <p className="text-muted mb-0 small">Direct messaging and group communication tools for community members</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Community Topics */}
                    <div className="mt-4">
                      <h6 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.1rem' }}>Community Focus Areas:</h6>
                      <div className="row g-3">
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Professional Networking</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Skill Development</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Mentorship Programs</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Collaborative Projects</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Knowledge Sharing</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-3" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '12px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                            <small className="fw-bold" style={{ color: '#14432A' }}>Community Events</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)' }}>
                      <div className="card-body p-5">
                        <h3 className="text-white fw-bold mb-3" style={{ fontSize: '1.8rem' }}>Ready to Join Our Community?</h3>
                        <p className="text-white-50 mb-4 lead">
                          Connect with like-minded individuals and unlock the power of collaborative growth.
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                          <a href="/contact" className="btn btn-light btn-lg px-4 py-3 fw-bold" style={{ borderRadius: '12px', minWidth: '180px' }}>
                            Join Community
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
