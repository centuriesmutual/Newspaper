'use client'

import { CreditCardIcon, GlobeAltIcon, ChartBarIcon, ShieldCheckIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PaymentTech() {
  return (
    <section className="payment-tech-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2314432A" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.6
      }} />
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="position-relative">
              <div style={{
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '20px',
                padding: '50px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 className="mb-4 fw-bold" style={{ color: '#14432A' }}>Document Audit Dashboard</h3>
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="text-center p-3" style={{ 
                      background: '#f8f9fa', 
                      borderRadius: '12px',
                      border: '2px solid #e9ecef'
                    }}>
                      <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      <div className="mt-2">
                        <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>98%</h6>
                        <small className="text-muted">Accuracy Rate</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3" style={{ 
                      background: '#f8f9fa', 
                      borderRadius: '12px',
                      border: '2px solid #e9ecef'
                    }}>
                      <ClockIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      <div className="mt-2">
                        <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>24hrs</h6>
                        <small className="text-muted">Avg. Processing</small>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>Recent Audits</h6>
                  <div className="space-y-2">
                    <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                      <span className="fw-medium">Tax Documents</span>
                      <span className="text-success fw-bold">✓ Complete</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                      <span className="fw-medium">Insurance Forms</span>
                      <span className="text-success fw-bold">✓ Verified</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                      <span className="fw-medium">Financial Statements</span>
                      <span className="text-warning fw-bold">⚠ Review</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="btn btn-warning btn-lg w-100 fw-bold"
                  style={{ borderRadius: '12px' }}
                >
                  View Audit Reports
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="text-dark">
              <h1 className="display-2 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A'
              }}>
                Document Auditing Process
              </h1>
              <p className="lead mb-5" style={{ 
                fontSize: '1.3rem',
                color: '#495057'
              }}>
                Streamline your financial documentation with our comprehensive auditing system. 
                Ensure accuracy, compliance, and peace of mind with our expert review process.
              </p>
              
              <div className="row g-4 mb-5">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <CreditCardIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Accuracy Verification</h5>
                      <small className="opacity-75">Error detection & correction</small>
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
                      <ShieldCheckIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Compliance Review</h5>
                      <small className="opacity-75">Regulatory adherence</small>
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
                      <ChartBarIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Detailed Reports</h5>
                      <small className="opacity-75">Comprehensive analysis</small>
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
                      <ClockIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Fast Turnaround</h5>
                      <small className="opacity-75">Quick processing</small>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="d-flex gap-3">
                <Link 
                  href="/dashboard" 
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
                  Start Audit
                </Link>
                <Link 
                  href="/audit-process" 
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
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
