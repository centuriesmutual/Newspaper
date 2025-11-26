'use client'

import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { 
  DocumentTextIcon,
  PresentationChartLineIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline'

export default function InvestorRelations() {
  return (
    <>
      <Navbar />
      <main>
        {/* Endorsements Section */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="container position-relative">
            <div className="row">
              <div className="col-12 text-center mb-4">
                <p style={{ 
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '0.5rem'
                }}>
                  Trusted by industry leaders
                </p>
              </div>
            </div>
            
            <div className="row g-4 justify-content-center align-items-center">
              {/* Salesforce */}
              <div className="col-6 col-md-4 col-lg-2">
                <div 
                  className="endorsement-card"
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '120px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 161, 224, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(0, 161, 224, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ marginBottom: '12px' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#00A1E0"/>
                      <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#00A1E0"/>
                    </svg>
                  </div>
                  <span style={{
                    color: '#00A1E0',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '-0.3px'
                  }}>
                    Salesforce
                  </span>
                </div>
              </div>

              {/* Oracle */}
              <div className="col-6 col-md-4 col-lg-2">
                <div 
                  className="endorsement-card"
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '120px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(248, 0, 0, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(248, 0, 0, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ marginBottom: '12px' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="2" fill="#F80000"/>
                      <path d="M8 12L12 8L16 12L12 16L8 12Z" fill="white"/>
                    </svg>
                  </div>
                  <span style={{
                    color: '#F80000',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '-0.3px'
                  }}>
                    Oracle
                  </span>
                </div>
              </div>

              {/* Coinbase */}
              <div className="col-6 col-md-4 col-lg-2">
                <div 
                  className="endorsement-card"
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '120px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 82, 255, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(0, 82, 255, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ marginBottom: '12px' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0052FF"/>
                      <path d="M12 6L12 18M6 12L18 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{
                    color: '#0052FF',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '-0.3px'
                  }}>
                    Coinbase
                  </span>
                </div>
              </div>

              {/* Circle Internet Group */}
              <div className="col-6 col-md-4 col-lg-2">
                <div 
                  className="endorsement-card"
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '120px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(20, 67, 42, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(20, 67, 42, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ marginBottom: '12px' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#14432A" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="5" fill="#14432A"/>
                    </svg>
                  </div>
                  <span style={{
                    color: '#14432A',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '-0.3px',
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}>
                    Circle Internet Group
                  </span>
                </div>
              </div>

              {/* Lumen Technologies */}
              <div className="col-6 col-md-4 col-lg-2">
                <div 
                  className="endorsement-card"
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '120px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 120, 212, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(0, 120, 212, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ marginBottom: '12px' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L7 12L12 7L22 12L17 7L12 2Z" fill="#0078D4"/>
                      <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#0078D4"/>
                    </svg>
                  </div>
                  <span style={{
                    color: '#0078D4',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '-0.3px',
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}>
                    Lumen Technologies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reports & Documents Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3" style={{ 
                  color: '#14432A',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  Financial Reports & Documents
                </h2>
                <p className="lead text-muted">
                  Access our latest financial reports, SEC filings, and investor presentations
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px'
                      }}>
                        <DocumentTextIcon style={{ width: '28px', height: '28px', color: '#14432A' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Annual Reports</h5>
                        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                          Comprehensive annual financial reports and performance summaries
                        </p>
                        <button className="btn btn-outline-primary btn-sm">
                          <ArrowDownTrayIcon style={{ width: '16px', height: '16px', display: 'inline', marginRight: '8px' }} />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px'
                      }}>
                        <PresentationChartLineIcon style={{ width: '28px', height: '28px', color: '#14432A' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Quarterly Reports</h5>
                        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                          Q1, Q2, Q3, and Q4 financial statements and earnings reports
                        </p>
                        <button className="btn btn-outline-primary btn-sm">
                          <ArrowDownTrayIcon style={{ width: '16px', height: '16px', display: 'inline', marginRight: '8px' }} />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px'
                      }}>
                        <BanknotesIcon style={{ width: '28px', height: '28px', color: '#14432A' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>SEC Filings</h5>
                        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                          10-K, 10-Q, 8-K, and other regulatory filings
                        </p>
                        <button className="btn btn-outline-primary btn-sm">
                          <ArrowDownTrayIcon style={{ width: '16px', height: '16px', display: 'inline', marginRight: '8px' }} />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investor Events Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3" style={{ 
                  color: '#14432A',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  Investor Events & Calendar
                </h2>
                <p className="lead text-muted">
                  Upcoming earnings calls, investor meetings, and corporate events
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px'
                      }}>
                        <CalendarDaysIcon style={{ width: '28px', height: '28px', color: '#14432A' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Q4 2024 Earnings Call</h5>
                        <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                          <strong>Date:</strong> February 15, 2025<br />
                          <strong>Time:</strong> 10:00 AM EST<br />
                          <strong>Format:</strong> Webcast & Conference Call
                        </p>
                        <Link href="/contact" className="btn btn-primary btn-sm">
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px'
                      }}>
                        <PresentationChartLineIcon style={{ width: '28px', height: '28px', color: '#14432A' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Annual Shareholder Meeting</h5>
                        <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                          <strong>Date:</strong> May 20, 2025<br />
                          <strong>Time:</strong> 2:00 PM EST<br />
                          <strong>Location:</strong> Virtual & In-Person
                        </p>
                        <Link href="/contact" className="btn btn-primary btn-sm">
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5" style={{ backgroundColor: '#14432A', color: 'white' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ 
                  fontFamily: "'Playfair Display', serif"
                }}>
                  Investor Relations Contact
                </h2>
                <p className="lead mb-4" style={{ opacity: 0.95 }}>
                  For investor inquiries, please contact our Investor Relations team
                </p>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '24px'
                    }}>
                      <h5 className="fw-bold mb-3">Email</h5>
                      <p className="mb-0">
                        <a href="mailto:investors@centuriesmutual.com" className="text-white text-decoration-none">
                          investors@centuriesmutual.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '24px'
                    }}>
                      <h5 className="fw-bold mb-3">Phone</h5>
                      <p className="mb-0">
                        <a href="tel:+1-800-555-0123" className="text-white text-decoration-none">
                          1-800-555-0123
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/contact" className="btn btn-light btn-lg px-5 py-3 fw-bold" style={{ borderRadius: '12px' }}>
                    Contact Investor Relations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

