'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Download() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <div className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#14432A' }}>
                Download Our Mobile App
              </h1>
              <p className="lead text-muted mb-4">
                Access your insurance, mortgage, and tax services anywhere with our comprehensive mobile app. 
                Manage your policies, make payments, and track your financial progress on the go.
              </p>
              <div className="d-flex gap-3">
                <Link href="/learnmore" className="btn btn-outline-primary btn-lg">
                  Learn More
                </Link>
                <Link href="/" className="btn btn-outline-secondary btn-lg">
                  Back to Home
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div className="position-relative d-inline-block">
                  <div className="bg-primary rounded-3 p-4 shadow-lg" style={{ width: '200px', height: '300px' }}>
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 text-white">
                      <i className="bi bi-phone display-1 mb-3"></i>
                      <h5 className="mb-2">Centuries Mutual</h5>
                      <small>Mobile App</small>
                    </div>
                  </div>
                  <div className="position-absolute top-0 end-0 translate-middle">
                    <div className="bg-success rounded-circle p-2">
                      <i className="bi bi-download text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Options */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3" style={{ color: '#14432A' }}>Choose Your Platform</h2>
            <p className="text-muted">Download our app on your preferred platform</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4 text-center">
                  <div className="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-apple text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h5 className="mb-2">iOS App</h5>
                  <p className="text-muted mb-4">Download for iPhone and iPad from the App Store</p>
                  <button className="btn btn-dark w-100">
                    <i className="bi bi-download me-2"></i>Download for iOS
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4 text-center">
                  <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-android2 text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h5 className="mb-2">Android App</h5>
                  <p className="text-muted mb-4">Download for Android devices from Google Play</p>
                  <button className="btn btn-success w-100">
                    <i className="bi bi-download me-2"></i>Download for Android
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4 text-center">
                  <div className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-globe text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h5 className="mb-2">Web App</h5>
                  <p className="text-muted mb-4">Access from any browser on any device</p>
                  <Link href="/dashboard" className="btn btn-info w-100">
                    <i className="bi bi-arrow-right me-2"></i>Access Web App
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3" style={{ color: '#14432A' }}>App Features</h2>
            <p className="text-muted">Everything you need to manage your financial services</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-shield-check text-white"></i>
                </div>
                <h6 className="mb-2">Secure Access</h6>
                <p className="text-muted small">Bank-level security for all your financial data</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-phone text-white"></i>
                </div>
                <h6 className="mb-2">Mobile First</h6>
                <p className="text-muted small">Optimized for mobile devices and tablets</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-bell text-white"></i>
                </div>
                <h6 className="mb-2">Real-time Notifications</h6>
                <p className="text-muted small">Instant updates on your policies and payments</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-graph-up text-white"></i>
                </div>
                <h6 className="mb-2">Track Progress</h6>
                <p className="text-muted small">Monitor your financial goals and achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-3" style={{ color: '#14432A' }}>Quick Download</h3>
              <p className="text-muted mb-4">
                Scan the QR code with your mobile device to download our app directly 
                from the App Store or Google Play Store.
              </p>
              <div className="d-flex gap-3">
                <Link href="/learnmore" className="btn btn-outline-primary">
                  Learn More
                </Link>
                <Link href="/contact" className="btn btn-outline-secondary">
                  Contact Support
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="bg-white p-4 rounded-3 shadow-sm d-inline-block">
                <div className="bg-light rounded p-3 mb-3" style={{ width: '150px', height: '150px' }}>
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <i className="bi bi-qr-code display-4 text-muted"></i>
                  </div>
                </div>
                <p className="text-muted small mb-0">Scan to Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-5" style={{ backgroundColor: '#14432A' }}>
        <div className="container text-center">
          <h3 className="text-white mb-3">Ready to Get Started?</h3>
          <p className="text-white-50 mb-4">
            Download our app today and take control of your financial services from anywhere.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link href="/download" className="btn btn-light btn-lg">
              <i className="bi bi-download me-2"></i>Download Now
            </Link>
            <Link href="/learnmore" className="btn btn-outline-light btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}