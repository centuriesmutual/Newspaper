'use client'

import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Our Story
              </h1>
              <p className="lead mb-0" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                fontSize: '1.3rem'
              }}>
                Building trust and securing futures since 2024
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: '400px' }}>
                <Image
                  src="/deer.jpeg"
                  alt="Legacy and Tradition"
                  fill
                  priority
                  quality={100}
                  className="rounded-3"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-5 mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A'
              }}>Our Mission</h2>
              <p className="lead text-muted mb-4">
                At Centuries Mutual, we're committed to providing exceptional financial services 
                that help our clients achieve their long-term goals while maintaining the highest 
                standards of integrity and professionalism.
              </p>
              <p className="text-muted">
                Our mission is to empower individuals and families with the knowledge and tools 
                they need to make informed financial decisions, ensuring a secure and prosperous 
                future for generations to come.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-white p-5 rounded-3 shadow-lg">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="text-center">
                      <h3 className="h2 mb-2" style={{ color: '#14432A' }}>98%</h3>
                      <p className="text-muted mb-0">Client Satisfaction</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                      <h3 className="h2 mb-2" style={{ color: '#14432A' }}>25+</h3>
                      <p className="text-muted mb-0">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="display-5 text-center mb-5" style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#14432A'
          }}>Our Core Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="mb-4" style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#14432A15',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}>
                  <i className="bi bi-shield-check text-primary" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="h4 mb-3">Integrity</h3>
                <p className="text-muted mb-0">
                  We maintain the highest standards of honesty and transparency in all our dealings.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="mb-4" style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#14432A15',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}>
                  <i className="bi bi-lightbulb text-primary" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="h4 mb-3">Innovation</h3>
                <p className="text-muted mb-0">
                  We continuously evolve our services to meet the changing needs of our clients.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="mb-4" style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#14432A15',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}>
                  <i className="bi bi-people text-primary" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="h4 mb-3">Client Focus</h3>
                <p className="text-muted mb-0">
                  Your success is our priority, and we're committed to your financial well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="display-5 text-center mb-5" style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#14432A'
          }}>Our Leadership Team</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-4">
                    <div className="position-relative mx-auto" style={{ width: '150px', height: '150px' }}>
                      <Image
                        src="/placeholder-profile.jpg"
                        alt="Team Member"
                        fill
                        className="rounded-circle"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <h3 className="h4 mb-1">John Smith</h3>
                  <p className="text-muted mb-3">CEO & Founder</p>
                  <p className="text-muted mb-0">
                    20+ years of experience in financial services and wealth management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-4">
                    <div className="position-relative mx-auto" style={{ width: '150px', height: '150px' }}>
                      <Image
                        src="/placeholder-profile.jpg"
                        alt="Team Member"
                        fill
                        className="rounded-circle"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <h3 className="h4 mb-1">Sarah Johnson</h3>
                  <p className="text-muted mb-3">Chief Financial Officer</p>
                  <p className="text-muted mb-0">
                    Expert in financial planning and investment strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-4">
                    <div className="position-relative mx-auto" style={{ width: '150px', height: '150px' }}>
                      <Image
                        src="/placeholder-profile.jpg"
                        alt="Team Member"
                        fill
                        className="rounded-circle"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <h3 className="h4 mb-1">Michael Chen</h3>
                  <p className="text-muted mb-3">Head of Operations</p>
                  <p className="text-muted mb-0">
                    Specialized in operational efficiency and client service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 