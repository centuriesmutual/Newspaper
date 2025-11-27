'use client'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function ChildCare() {
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
                  Child Care Services
                </h1>
                <p className="lead mb-5" style={{ 
                  fontSize: '1.25rem', 
                  maxWidth: '800px', 
                  margin: '0 auto 2.5rem',
                  lineHeight: '1.8',
                  opacity: 0.95
                }}>
                  Trusted child care solutions for families in our community. Connect with verified, 
                  experienced caregivers who prioritize your child's safety and development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-5">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3" style={{ 
                  color: '#14432A', 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '-0.5px'
                }}>
                  Our Child Care Services
                </h2>
                <p className="text-muted lead">
                  Safe, reliable, and trusted care for your family
                </p>
              </div>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4 text-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '64px',
                      height: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Verified Caregivers</h4>
                    <p className="text-muted">
                      All caregivers undergo comprehensive background checks, reference verification, and trust score evaluation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4 text-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '64px',
                      height: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      <HeartIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Trusted Community</h4>
                    <p className="text-muted">
                      Connect with caregivers who are part of our verified community network with proven track records.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4 text-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '64px',
                      height: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      <UserGroupIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Flexible Options</h4>
                    <p className="text-muted">
                      Find care that fits your schedule - full-time, part-time, after-school, or occasional care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="row mb-5">
              <div className="col-lg-10 mx-auto">
                <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5">
                    <h3 className="fw-bold mb-4 text-center" style={{ color: '#14432A' }}>Why Choose Our Child Care Network?</h3>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#10b981', marginRight: '12px', marginTop: '4px', flexShrink: 0 }} />
                          <div>
                            <h5 className="fw-bold mb-2">Background Verified</h5>
                            <p className="text-muted mb-0">Comprehensive background checks and reference verification for all caregivers.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#10b981', marginRight: '12px', marginTop: '4px', flexShrink: 0 }} />
                          <div>
                            <h5 className="fw-bold mb-2">Trust Score Based</h5>
                            <p className="text-muted mb-0">All caregivers are evaluated using our in-house trust score system.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#10b981', marginRight: '12px', marginTop: '4px', flexShrink: 0 }} />
                          <div>
                            <h5 className="fw-bold mb-2">Secure Payments</h5>
                            <p className="text-muted mb-0">Safe payment processing through our blockchain-powered platform.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#10b981', marginRight: '12px', marginTop: '4px', flexShrink: 0 }} />
                          <div>
                            <h5 className="fw-bold mb-2">24/7 Support</h5>
                            <p className="text-muted mb-0">Round-the-clock support for families and caregivers.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-sm" style={{ 
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                  color: 'white'
                }}>
                  <div className="card-body p-5 text-center">
                    <h3 className="fw-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Ready to Find Child Care?
                    </h3>
                    <p className="mb-4" style={{ opacity: 0.95, fontSize: '1.1rem' }}>
                      Join our community to connect with verified caregivers or become a trusted caregiver yourself.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <Link href="/contact" className="btn btn-light btn-lg px-5 py-3">
                        Get Started
                      </Link>
                      <Link href="/trust-score" className="btn btn-outline-light btn-lg px-5 py-3">
                        Learn About Trust Scores
                      </Link>
                    </div>
                  </div>
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

