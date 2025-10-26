'use client'

import Footer from '../../components/Footer'
import Link from 'next/link'
import { HomeIcon, CreditCardIcon, ShieldCheckIcon, ChartBarIcon, CheckCircleIcon, BanknotesIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline'

export default function RentalEquity() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)',
          color: 'white'
        }}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Centuries Mutual Rental Equity™
                </h1>
                <p className="lead mb-4" style={{ fontSize: '1.4rem' }}>
                  Your Rent Should Work For You
                </p>
                <p className="fs-5 mb-5">
                  Build credit, earn rewards, and create a pathway to homeownership — all while paying rent. Transform your monthly rent payment into an investment in your financial future.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/apply" className="btn btn-light btn-lg px-5 py-3">
                    Get Started Today
                  </Link>
                  <Link href="/learnmore" className="btn btn-outline-light btn-lg px-5 py-3">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-5 bg-light">
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Why Rental Equity?
                </h2>
                <p className="lead text-muted">
                  Most renters miss out on building financial equity. We're changing that.
                </p>
              </div>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="mb-3 mx-auto" style={{
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
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Build Credit</h4>
                  <p className="text-muted mb-0">
                    Every on-time rent payment reported to major credit bureaus
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="mb-3 mx-auto" style={{
                    background: '#1a543615',
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CreditCardIcon style={{ width: '40px', height: '40px', color: '#1a5436' }} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Digital Payments</h4>
                  <p className="text-muted mb-0">
                    Secure, instant, and transparent rent payments with no hidden fees
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="mb-3 mx-auto" style={{
                    background: '#20654215',
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <StarIcon style={{ width: '40px', height: '40px', color: '#206542' }} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Earn Rewards</h4>
                  <p className="text-muted mb-0">
                    Get cashback and rewards for consistent, on-time rent payments
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="mb-3 mx-auto" style={{
                    background: '#14432A15',
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ShieldCheckIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Protected Payments</h4>
                  <p className="text-muted mb-0">
                    Rent protection insurance to safeguard your payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  How Rental Equity Works
                </h2>
                <p className="lead text-muted">
                  Simple, secure, and designed to help you succeed
                </p>
              </div>
            </div>

            <div className="row g-5 mb-5">
              <div className="col-md-6 col-lg-4">
                <div className="text-center">
                  <div className="mb-4 mx-auto" style={{
                    background: '#14432A',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    1
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                    Enroll & Set Up Your Wallet
                  </h4>
                  <p className="text-muted">
                    Sign up in minutes and create your secure digital wallet. Link your bank account or debit card for easy funding.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="text-center">
                  <div className="mb-4 mx-auto" style={{
                    background: '#1a5436',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    2
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                    Pay Rent Digitally
                  </h4>
                  <p className="text-muted">
                    Make payments through our platform with instant settlement and complete transparency. Set up automatic payments for hassle-free rent.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="text-center">
                  <div className="mb-4 mx-auto" style={{
                    background: '#206542',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    3
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                    Build Credit & Earn
                  </h4>
                  <p className="text-muted">
                    Your on-time payments are automatically reported to credit bureaus. Plus, earn rewards and build savings toward homeownership.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Details */}
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <div className="card-body p-5">
                    <h3 className="h3 fw-bold mb-4" style={{ color: '#14432A' }}>
                      What Happens Each Month
                    </h3>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex">
                          <div className="me-3" style={{ color: '#14432A' }}>
                            <CheckCircleIcon style={{ width: '24px', height: '24px' }} />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Payment Processing</h5>
                            <p className="text-muted mb-0">
                              Your rent is securely transferred from your wallet to your landlord's wallet with instant settlement.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <div className="me-3" style={{ color: '#14432A' }}>
                            <CheckCircleIcon style={{ width: '24px', height: '24px' }} />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Credit Reporting</h5>
                            <p className="text-muted mb-0">
                              On-time payments are automatically reported to Experian, Equifax, and TransUnion to boost your credit score.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <div className="me-3" style={{ color: '#14432A' }}>
                            <CheckCircleIcon style={{ width: '24px', height: '24px' }} />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Rewards Distribution</h5>
                            <p className="text-muted mb-0">
                              Earn cashback rewards or credits deposited directly into your wallet for each successful payment.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <div className="me-3" style={{ color: '#14432A' }}>
                            <CheckCircleIcon style={{ width: '24px', height: '24px' }} />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-2">Protection Coverage</h5>
                            <p className="text-muted mb-0">
                              Optional rent protection insurance ensures your payments are covered in case of unexpected financial hardship.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    Rent is often your largest monthly expense, yet it typically does nothing for your credit score. With Rental Equity, every on-time payment is reported to all three major credit bureaus — Experian, Equifax, and TransUnion.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                      <span className="ms-3">Build credit history month after month</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                      <span className="ms-3">Improve your credit score for future loans</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                      <span className="ms-3">Create a pathway to homeownership</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                      <span className="ms-3">Qualify for better interest rates on mortgages</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5" style={{ background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)', color: 'white' }}>
                    <h4 className="fw-bold mb-4">Credit Building Impact</h4>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Average Credit Score Increase</span>
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
                    Modern Digital Payments
                  </h3>
                  <p className="text-muted mb-4">
                    Say goodbye to checks, money orders, and payment delays. Our secure digital wallet system powered by enterprise-grade financial infrastructure provides instant, transparent transactions.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Instant settlement — no waiting days for payments to clear</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Complete payment transparency and history</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Automatic payments to never miss due dates</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542', flexShrink: 0 }} />
                      <span className="ms-3">Bank-level security and encryption</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5">
                    <h4 className="fw-bold mb-4" style={{ color: '#14432A' }}>Payment Methods Accepted</h4>
                    <div className="mb-4 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                      <div className="d-flex align-items-center mb-3">
                        <BanknotesIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1" style={{ color: '#14432A' }}>Bank Transfer (ACH)</h5>
                          <p className="text-muted mb-0 small">Free, secure transfers from your checking account</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                      <div className="d-flex align-items-center mb-3">
                        <CreditCardIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1" style={{ color: '#14432A' }}>Debit Card</h5>
                          <p className="text-muted mb-0 small">Instant funding with your debit card</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                      <div className="d-flex align-items-center mb-3">
                        <HomeIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1" style={{ color: '#14432A' }}>Direct Deposit</h5>
                          <p className="text-muted mb-0 small">Automatically fund your wallet from your paycheck</p>
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
                  Bank-Level Security & Compliance
                </h2>
                <p className="lead text-muted">
                  Your financial data and payments are protected by enterprise-grade security
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
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
                    <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Encryption</h5>
                  <p className="text-muted small mb-0">
                    End-to-end encryption protects all transactions and personal data
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
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
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Compliance</h5>
                  <p className="text-muted small mb-0">
                    PCI DSS and SOC 2 compliant infrastructure
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
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
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Regulated</h5>
                  <p className="text-muted small mb-0">
                    Fully regulated under U.S. money transmission laws
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
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
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>24/7 Monitoring</h5>
                  <p className="text-muted small mb-0">
                    Continuous fraud detection and transaction monitoring
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
                        Your Data Is Protected
                      </h5>
                      <p className="mb-0 text-muted">
                        We partner with leading financial technology providers to ensure your payments are secure and your personal information remains private. All transactions are backed by enterprise-grade security infrastructure used by major financial institutions worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Landlord Benefits Section */}
        <section className="py-5 bg-light">
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Benefits for Landlords Too
                </h2>
                <p className="lead text-muted">
                  Rental Equity creates value for both renters and property owners
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                      Instant Payments
                    </h5>
                    <p className="text-muted mb-0">
                      Receive rent instantly with guaranteed settlement, no more waiting for checks to clear or chasing late payments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                      Automated Tracking
                    </h5>
                    <p className="text-muted mb-0">
                      Complete payment history and automated record-keeping for all your properties in one convenient dashboard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                      Better Tenants
                    </h5>
                    <p className="text-muted mb-0">
                      Attract responsible tenants who value credit building and are motivated to make on-time payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5" style={{ backgroundColor: '#14432A', color: 'white' }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Start Building Your Financial Future Today
                </h2>
                <p className="lead mb-5">
                  Join thousands of renters who are transforming their rent payments into credit, rewards, and a pathway to homeownership.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/apply" className="btn btn-light btn-lg px-5 py-3">
                    Get Started Now
                  </Link>
                  <Link href="/dashboard" className="btn btn-outline-light btn-lg px-5 py-3">
                    View Dashboard Demo
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light btn-lg px-5 py-3">
                    Contact Us
                  </Link>
                </div>
                
                <div className="mt-5 pt-5 border-top" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                  <div className="row text-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="h2 fw-bold mb-2">$0</div>
                      <p className="mb-0" style={{ opacity: 0.9 }}>Setup Fees</p>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="h2 fw-bold mb-2">+60</div>
                      <p className="mb-0" style={{ opacity: 0.9 }}>Avg. Credit Score Increase</p>
                    </div>
                    <div className="col-md-4">
                      <div className="h2 fw-bold mb-2">100%</div>
                      <p className="mb-0" style={{ opacity: 0.9 }}>Secure & Encrypted</p>
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

