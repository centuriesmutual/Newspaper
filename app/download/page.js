'use client'

import Link from 'next/link'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function Download() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)',
          color: 'white'
        }}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Download Our Mobile App
                </h1>
                <p className="lead mb-4" style={{ fontSize: '1.2rem', opacity: 0.95 }}>
                  Access your insurance, mortgage, and tax services anywhere with our comprehensive mobile app. 
                  Manage your policies, make payments, and track your financial progress on the go.
                </p>
                <div className="d-flex gap-3">
                  <Link href="/apply" className="btn btn-light btn-lg px-5 py-3">
                    Get Started
                  </Link>
                  <Link href="/" className="btn btn-outline-light btn-lg px-5 py-3">
                    Back to Home
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-center">
                  <div className="position-relative d-inline-block">
                    <div className="bg-white rounded-4 p-5 shadow-lg" style={{ 
                      width: '240px', 
                      height: '360px',
                      border: '20px solid rgba(255,255,255,0.1)'
                    }}>
                      <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <div className="mb-4" style={{ fontSize: '3rem', color: '#14432A' }}>
                          📱
                        </div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Centuries Mutual</h5>
                        <small className="text-muted">Mobile App</small>
                      </div>
                    </div>
                    <div className="position-absolute top-0 end-0 translate-middle">
                      <div className="bg-success rounded-circle p-3 shadow-lg" style={{ width: '60px', height: '60px' }}>
                        <i className="bi bi-download text-white" style={{ fontSize: '1.5rem' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Options */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                Choose Your Platform
              </h2>
              <p className="lead text-muted">Download our app on your preferred platform</p>
            </div>
            
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-lg" style={{ borderRadius: '20px', transition: 'transform 0.3s' }}>
                  <div className="card-body p-5 text-center">
                    <div className="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '100px', height: '100px' }}>
                      <i className="bi bi-apple text-white" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>iOS App</h4>
                    <p className="text-muted mb-4">Download for iPhone and iPad from the App Store</p>
                    <button className="btn btn-dark btn-lg w-100" style={{ borderRadius: '12px' }}>
                      <i className="bi bi-download me-2"></i>Download for iOS
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-lg" style={{ borderRadius: '20px', transition: 'transform 0.3s' }}>
                  <div className="card-body p-5 text-center">
                    <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '100px', height: '100px' }}>
                      <i className="bi bi-android2 text-white" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Android App</h4>
                    <p className="text-muted mb-4">Download for Android devices from Google Play</p>
                    <button className="btn btn-success btn-lg w-100" style={{ borderRadius: '12px' }}>
                      <i className="bi bi-download me-2"></i>Download for Android
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-lg" style={{ borderRadius: '20px', transition: 'transform 0.3s' }}>
                  <div className="card-body p-5 text-center">
                    <div className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '100px', height: '100px' }}>
                      <i className="bi bi-globe text-white" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Web App</h4>
                    <p className="text-muted mb-4">Access from any browser on any device</p>
                    <Link href="/dashboard" className="btn btn-info btn-lg w-100" style={{ borderRadius: '12px' }}>
                      <i className="bi bi-arrow-right me-2"></i>Access Web App
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5" style={{ backgroundColor: 'white' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                App Features
              </h2>
              <p className="lead text-muted">Everything you need to manage your financial services</p>
            </div>
            
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="text-center h-100 p-4" style={{ 
                  backgroundColor: '#14432A15', 
                  borderRadius: '20px',
                  transition: 'transform 0.3s'
                }}>
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-shield-check text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Secure Access</h5>
                  <p className="text-muted small mb-0">Bank-level security for all your financial data</p>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3">
                <div className="text-center h-100 p-4" style={{ 
                  backgroundColor: '#20654215', 
                  borderRadius: '20px',
                  transition: 'transform 0.3s'
                }}>
                  <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-phone text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Mobile First</h5>
                  <p className="text-muted small mb-0">Optimized for mobile devices and tablets</p>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3">
                <div className="text-center h-100 p-4" style={{ 
                  backgroundColor: '#1a543615', 
                  borderRadius: '20px',
                  transition: 'transform 0.3s'
                }}>
                  <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-bell text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Real-time Notifications</h5>
                  <p className="text-muted small mb-0">Instant updates on your policies and payments</p>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3">
                <div className="text-center h-100 p-4" style={{ 
                  backgroundColor: '#20654215', 
                  borderRadius: '20px',
                  transition: 'transform 0.3s'
                }}>
                  <div className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-graph-up text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Track Progress</h5>
                  <p className="text-muted small mb-0">Monitor your financial goals and achievements</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h3 className="h2 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Quick Download
                </h3>
                <p className="lead text-muted mb-4">
                  Scan the QR code with your mobile device to download our app directly 
                  from the App Store or Google Play Store.
                </p>
                <div className="d-flex gap-3">
                  <Link href="/learnmore" className="btn btn-primary btn-lg px-4">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn btn-outline-primary btn-lg px-4">
                    Contact Support
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="bg-white p-5 rounded-4 shadow-lg d-inline-block" style={{ borderRadius: '20px' }}>
                  <div className="bg-light rounded p-4 mb-4 mx-auto" style={{ width: '200px', height: '200px' }}>
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <i className="bi bi-qr-code display-1 text-muted"></i>
                    </div>
                  </div>
                  <p className="text-muted mb-0 fw-bold">Scan to Download</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}