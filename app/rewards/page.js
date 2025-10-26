'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Rewards() {
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
              <div className="d-flex gap-3">
                <Link href="/" className="btn btn-outline-secondary btn-lg">
                  Back to Home
                </Link>
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
            
          </div>
        </div>
      </div>



    </div>
  )
}
