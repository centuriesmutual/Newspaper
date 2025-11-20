'use client'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { HomeIcon, CreditCardIcon, ShieldCheckIcon, ChartBarIcon, CheckCircleIcon, BanknotesIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline'

export default function RentalEquity() {
  return (
    <>
      <Navbar />
      <main>


        {/* Benefits Detail Section */}
        <section className="py-5 bg-light">
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  The Rental Equity Advantage
                </h2>
              </div>
            </div>

            <div className="row g-5 align-items-center mb-5">
              <div className="col-lg-6">
                <div className="pe-lg-5">
                  <div className="mb-4" style={{
                    background: '#14432A15',
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ChartBarIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                  </div>
                  <h3 className="h2 fw-bold mb-4" style={{ color: '#14432A' }}>
                    Transform Rent Into Credit
                  </h3>
                  <p className="text-muted mb-4">
                    Rent is often your largest monthly expense, yet it typically does nothing for your trust score. With Rental Equity, Your Trust Score grows with each payment, giving you better standing, more opportunities, and greater confidence across Centuries Mutual.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                      <span className="ms-3">Build trust history month after month</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                      <span className="ms-3">Improve your trust score for future loans</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                      <span className="ms-3">Create a pathway to homeownership</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                      <span className="ms-3">Qualify for better rates on rentals</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5" style={{ background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)', color: 'white' }}>
                    <h4 className="fw-bold mb-4">Trust Building Impact</h4>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Average Trust Score Increase</span>
                        <span className="fw-bold">+60 points</span>
                      </div>
                      <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-bar" style={{ width: '75%', backgroundColor: 'white' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Time to See Results</span>
                        <span className="fw-bold">3-6 months</span>
                      </div>
                      <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-bar" style={{ width: '50%', backgroundColor: 'white' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Reporting Bureaus</span>
                        <span className="fw-bold">All 3 Major</span>
                      </div>
                      <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-bar" style={{ width: '100%', backgroundColor: 'white' }}></div>
                      </div>
                    </div>
                    <p className="mb-0 mt-4" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      * Results based on average user data from renters with consistent on-time payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Payment Benefits */}
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="ps-lg-5">
                  <div className="mb-4" style={{
                    background: '#20654215',
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CreditCardIcon style={{ width: '40px', height: '40px', color: '#206542' }} />
                  </div>
                  <h3 className="h2 fw-bold mb-4" style={{ color: '#14432A' }}>
                    Comprehensive eDocument System
                  </h3>
                  <p className="text-muted mb-4">
                    Track and manage all legal documents pertaining to your housing search in one secure platform. Our eDocument system protects your housing experience with proof of residency and legally binding documents.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Receive proof of residency documentation instantly</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Legally binding documents for lease agreements and applications</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Protect your housing experience with verified documents</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Secure document storage with legal validation and timestamps</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5">
                    <h4 className="fw-bold mb-4" style={{ color: '#14432A' }}>Document Types Managed</h4>
                    <div className="mb-4 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                      <div className="d-flex align-items-center mb-3">
                        <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1" style={{ color: '#14432A' }}>Lease Agreements</h5>
                          <p className="text-muted mb-0 small">Legally binding documents with digital signatures</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                      <div className="d-flex align-items-center mb-3">
                        <CheckCircleIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1" style={{ color: '#14432A' }}>Proof of Residency</h5>
                          <p className="text-muted mb-0 small">Instant verification and documentation</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                      <div className="d-flex align-items-center mb-3">
                        <ClockIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1" style={{ color: '#14432A' }}>Application Materials</h5>
                          <p className="text-muted mb-0 small">Comprehensive verification and record-keeping</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Blockchain-Powered Payment Processing
                </h2>
                <p className="lead text-muted">
                  Secure, fast payments powered by Coinbase blockchain technology
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="mb-3 mx-auto" style={{
                    background: '#14432A15',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <BanknotesIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Coinbase Wallet</h5>
                  <p className="text-muted small mb-0">
                    Seamless P2P payments via Coinbase Wallet Connect for instant transactions
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="mb-3 mx-auto" style={{
                    background: '#14432A15',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ClockIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Fast Claims</h5>
                  <p className="text-muted small mb-0">
                    Process claims and disputes faster with blockchain verification and immutable records
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="mb-3 mx-auto" style={{
                    background: '#14432A15',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CheckCircleIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Transparency</h5>
                  <p className="text-muted small mb-0">
                    Immutable blockchain records provide complete transaction transparency and audit trails
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-10 mx-auto">
                <div className="alert mb-0 p-4" style={{ 
                  backgroundColor: '#14432A15', 
                  border: 'none',
                  borderRadius: '16px'
                }}>
                  <div className="d-flex align-items-start">
                    <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A', flexShrink: 0 }} />
                    <div className="ms-3">
                      <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>
                        Powered by Leading Blockchain Infrastructure
                      </h5>
                      <p className="mb-0 text-muted">
                        Our blockchain integration with Circle and Coinbase ensures that all payments are processed safely and securely on the blockchain. This technology enables faster claim processing, transparent transaction records, and enhanced security for renters and landlords. Every transaction is verified and recorded on the blockchain, providing an immutable audit trail for complete peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Landlord/Renter Platform Section */}
        <section className="py-5 bg-light">
          <div className="container py-4">
            <div className="row g-5 align-items-center mb-5">
              <div className="col-lg-6">
                <div className="pe-lg-5">
                  <div className="mb-4" style={{
                    background: '#20654215',
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <HomeIcon style={{ width: '40px', height: '40px', color: '#206542' }} />
                  </div>
                  <h3 className="h2 fw-bold mb-4" style={{ color: '#14432A' }}>
                    Unified Platform for Landlords & Renters
                  </h3>
                  <p className="text-muted mb-4">
                    Our comprehensive platform connects landlords and renters with streamlined communication, secure messaging, and legally binding documentation for a protected housing experience.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Secure, legally binding messaging between parties</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Instant payments with Coinbase Wallet Connect integration</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Automated record-keeping and document management</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">In-house social credit system for verified tenants</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5" style={{ background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)', color: 'white' }}>
                    <h4 className="fw-bold mb-4">Platform Features</h4>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Instant Payments</span>
                        <span className="fw-bold">✓ Enabled</span>
                      </div>
                      <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-bar" style={{ width: '100%', backgroundColor: 'white' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Secure Messaging</span>
                        <span className="fw-bold">✓ Encrypted</span>
                      </div>
                      <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-bar" style={{ width: '100%', backgroundColor: 'white' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>eDocument System</span>
                        <span className="fw-bold">✓ Active</span>
                      </div>
                      <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-bar" style={{ width: '100%', backgroundColor: 'white' }}></div>
                      </div>
                    </div>
                    <p className="mb-0 mt-4" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      * All features are live and available for both landlords and renters.
                    </p>
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

