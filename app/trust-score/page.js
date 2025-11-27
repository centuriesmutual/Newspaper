'use client'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  CheckCircleIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function TrustScore() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="position-relative" style={{ 
          background: 'linear-gradient(180deg, #14432A 0%, #1a5436 100%)',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center text-white">
                <h1 className="display-4 fw-bold mb-4" style={{ 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '-0.5px'
                }}>
                  In-House Trust Rating System
                </h1>
                <p className="lead mb-5" style={{ 
                  fontSize: '1.25rem', 
                  maxWidth: '800px', 
                  margin: '0 auto 2.5rem',
                  lineHeight: '1.8',
                  opacity: 0.95
                }}>
                  Learn how our proprietary trust rating system works to ensure safe, reliable roommate matching and property transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card border-0 shadow-sm mb-5" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5">
                    <h2 className="fw-bold mb-4 text-center" style={{ color: '#14432A' }}>
                      How Our In-House Trust Score System Works
                    </h2>
                    <p className="mb-4 text-center" style={{ fontSize: '1.1rem', color: '#495057' }}>
                      Our proprietary in-house trust score based on our recommendation engine (1-300 scale) evaluates members based on multiple 
                      social and financial factors to ensure safe, reliable roommate matching and property transactions.
                    </p>
                    
                    <div className="row g-4 mb-4">
                      <div className="col-md-6">
                        <div style={{
                          background: 'rgba(20, 67, 42, 0.05)',
                          borderRadius: '16px',
                          padding: '24px',
                          border: '1px solid rgba(20, 67, 42, 0.1)',
                          height: '100%'
                        }}>
                          <div className="d-flex align-items-center mb-3">
                            <UserGroupIcon style={{ width: '32px', height: '32px', color: '#14432A', marginRight: '12px' }} />
                            <h4 className="fw-bold mb-0" style={{ color: '#14432A', fontSize: '1.5rem' }}>Social Factors</h4>
                          </div>
                          <ul className="list-unstyled mb-0" style={{ fontSize: '1rem', color: '#495057' }}>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Community participation & engagement</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Reference checks from previous roommates</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Social media verification</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Communication responsiveness</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Lifestyle compatibility indicators</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div style={{
                          background: 'rgba(20, 67, 42, 0.05)',
                          borderRadius: '16px',
                          padding: '24px',
                          border: '1px solid rgba(20, 67, 42, 0.1)',
                          height: '100%'
                        }}>
                          <div className="d-flex align-items-center mb-3">
                            <ChartBarIcon style={{ width: '32px', height: '32px', color: '#14432A', marginRight: '12px' }} />
                            <h4 className="fw-bold mb-0" style={{ color: '#14432A', fontSize: '1.5rem' }}>Financial Factors</h4>
                          </div>
                          <ul className="list-unstyled mb-0" style={{ fontSize: '1rem', color: '#495057' }}>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Income verification & stability</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Payment history & reliability</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Employment verification</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Bank account verification</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                              <span>Trust score history analysis</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 text-center" style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      border: '1px solid rgba(20, 67, 42, 0.2)'
                    }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Score Range</h5>
                      <div className="row g-3">
                        <div className="col-md-3">
                          <div style={{
                            background: 'white',
                            borderRadius: '8px',
                            padding: '16px',
                            border: '2px solid #dc3545'
                          }}>
                            <div className="fw-bold" style={{ color: '#dc3545', fontSize: '1.2rem' }}>1-100</div>
                            <div className="text-muted small">Poor</div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div style={{
                            background: 'white',
                            borderRadius: '8px',
                            padding: '16px',
                            border: '2px solid #ffc107'
                          }}>
                            <div className="fw-bold" style={{ color: '#ffc107', fontSize: '1.2rem' }}>101-200</div>
                            <div className="text-muted small">Fair</div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div style={{
                            background: 'white',
                            borderRadius: '8px',
                            padding: '16px',
                            border: '2px solid #0d6efd'
                          }}>
                            <div className="fw-bold" style={{ color: '#0d6efd', fontSize: '1.2rem' }}>201-250</div>
                            <div className="text-muted small">Good</div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div style={{
                            background: 'white',
                            borderRadius: '8px',
                            padding: '16px',
                            border: '2px solid #10b981'
                          }}>
                            <div className="fw-bold" style={{ color: '#10b981', fontSize: '1.2rem' }}>251-300</div>
                            <div className="text-muted small">Excellent</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                  <Link href="/contact" className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                    Get Started
                  </Link>
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

