'use client'

import { HomeIcon, MapPinIcon, KeyIcon, UsersIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function RealEstate() {
  return (
    <section className="real-estate-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem 0'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2314432A" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.4
      }} />
      
      <div className="container">
        <div className="row align-items-center" style={{ padding: '1rem 0' }}>
          <div className="col-lg-6">
            <div className="text-dark">
              <h1 className="display-2 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A'
              }}>
                Find Your Perfect Room
              </h1>
              <p className="lead mb-5" style={{ 
                fontSize: '1.3rem',
                color: '#495057'
              }}>
                Discover amazing rental opportunities in your area. From cozy studios to shared apartments, 
                we connect you with the perfect living space that fits your lifestyle and budget.
              </p>
              
              <div className="row g-3 mb-4" style={{ marginBottom: '2rem' }}>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <UsersIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Credit Based Community</h5>
                      <small className="opacity-75">Verified trustworthy renters</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <HomeIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Beautiful Spaces</h5>
                      <small className="opacity-75">Great options available</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <KeyIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Secure Access</h5>
                      <small className="opacity-75">Coinbase wallet integration</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <DocumentTextIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Document Services</h5>
                      <small className="opacity-75">Secure digital document management</small>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="d-flex gap-3 flex-wrap" style={{ marginTop: '1.5rem' }}>
                <Link 
                  href="/rentalequity" 
                  className="btn btn-primary btn-lg px-4 py-3 fw-bold"
                  style={{ 
                    borderRadius: '12px',
                    backgroundColor: '#14432A',
                    borderColor: '#14432A',
                    boxShadow: '0 4px 15px rgba(20, 67, 42, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                >
                  Browse Rooms
                </Link>
                <Link 
                  href="/contact" 
                  className="btn btn-outline-primary btn-lg px-4 py-3 fw-bold"
                  style={{ 
                    borderRadius: '12px',
                    borderColor: '#14432A',
                    color: '#14432A',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(20, 67, 42, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                  }}
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="position-relative" style={{ marginTop: '2rem' }}>
              <style jsx>{`
                @media (max-width: 991px) {
                  .search-form-container {
                    margin-top: 3rem !important;
                  }
                }
              `}</style>
              <div className="search-form-container" style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '40px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}>
                <h3 className="mb-4 fw-bold" style={{ color: '#14432A' }}>Start Your Search Today</h3>
                <div className="mb-3">
                  <label className="form-label fw-bold" style={{ color: '#14432A' }}>Location</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Enter city or neighborhood"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold" style={{ color: '#14432A' }}>Max Price</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Enter max monthly rent (e.g., $1200)"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold" style={{ color: '#14432A' }}>Room Type</label>
                  <select className="form-select form-select-lg" style={{ borderRadius: '10px' }}>
                    <option>Private Room</option>
                    <option>Shared Room</option>
                    <option>Studio</option>
                    <option>1 Bedroom</option>
                  </select>
                </div>
                <button 
                  className="btn btn-warning btn-lg w-100 fw-bold"
                  style={{ borderRadius: '10px' }}
                >
                  Search Available Rooms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
