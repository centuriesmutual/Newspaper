import Footer from '../../components/Footer'

export default function SaintDaniels() {
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

                  {/* Wellness Program Management */}
                  <div className="mb-5">
                    <h3 className="h4 fw-bold mb-4" style={{ color: '#14432A', fontSize: '1.5rem' }}>2. Wellness Consultation Program Management</h3>
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
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>30-Day Wellness Consultation Challenge</h6>
                            <p className="text-muted mb-0 small">Structured consultation program with progress tracking and goal setting</p>
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
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Mindfulness & Meditation Consultation</h6>
                            <p className="text-muted mb-0 small">Guided consultation programs and specialized sessions</p>
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
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Nutrition Consultation Mastery</h6>
                            <p className="text-muted mb-0 small">Comprehensive nutrition consultation courses and specialized guidance</p>
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
                            <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Sleep Optimization Consultation</h6>
                            <p className="text-muted mb-0 small">Sleep science consultation and recovery protocol guidance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Consulting Services */}
                  <div className="mb-5">
                    <h3 className="h4 fw-bold mb-4" style={{ color: '#14432A', fontSize: '1.5rem' }}>3. Additional Consulting Services</h3>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Career Development Consultation</h6>
                          <p className="text-muted mb-0 small">Professional assessment tools, templates, and one-on-one career guidance sessions</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Workplace Wellness Consultation</h6>
                          <p className="text-muted mb-0 small">Organizational health initiatives and evidence-based workplace wellness programs</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Clinical Resources & Guidelines</h6>
                          <p className="text-muted mb-0 small">Comprehensive clinical resources, research papers, and consultation documentation</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.08) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.15)' }}>
                          <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>24/7 Consultant Support</h6>
                          <p className="text-muted mb-0 small">Priority-based assistance and round-the-clock consultant support system</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics & Performance Metrics */}
                  <div className="mb-4">
                    <h3 className="h4 fw-bold mb-4" style={{ color: '#14432A', fontSize: '1.5rem' }}>4. Consultation Analytics & Performance Metrics</h3>
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="text-center p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.1) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.2)' }}>
                          <h3 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '2.5rem' }}>94%</h3>
                          <p className="fw-bold mb-0" style={{ color: '#14432A' }}>Health Score Average</p>
                          <small className="text-muted">Consultation effectiveness rating</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.1) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.2)' }}>
                          <h3 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '2.5rem' }}>78%</h3>
                          <p className="fw-bold mb-0" style={{ color: '#14432A' }}>Learning Completion</p>
                          <small className="text-muted">Consultant education progress</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-4" style={{ background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.1) 0%, rgba(20, 67, 42, 0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(20, 67, 42, 0.2)' }}>
                          <h3 className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '2.5rem' }}>92%</h3>
                          <p className="fw-bold mb-0" style={{ color: '#14432A' }}>Client Engagement</p>
                          <small className="text-muted">Consultation satisfaction rate</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row">
            <div className="col-12 text-center">
              <div className="card border-0 shadow-lg" style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)' }}>
                <div className="card-body p-5">
                  <h3 className="text-white fw-bold mb-3" style={{ fontSize: '2rem' }}>Ready to Join Our Community?</h3>
                  <p className="text-white-50 mb-4 lead" style={{ fontSize: '1.1rem' }}>
                    Join thousands of community members who are already benefiting from our comprehensive platform and collaborative resources.
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
      <Footer />
    </main>
  )
}
