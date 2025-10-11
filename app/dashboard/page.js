'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CreditCardIcon, ShieldCheckIcon, HomeIcon, ArrowRightIcon, ChartBarIcon, BanknotesIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Dashboard() {
  const router = useRouter()

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated')
    sessionStorage.removeItem('isAuthenticated')
    router.push('/login')
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f7fa' }}>
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm sticky-top">
        <div className="container-fluid">
          <div className="row align-items-center py-3">
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <Image 
                  src="/cmlogotreesmall-removebg-preview.png"
                  alt="Centuries Mutual"
                  width={40}
                  height={20}
                  style={{ objectFit: 'contain' }}
                />
                <span className="ms-2 fw-bold" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif", fontSize: '1.2rem' }}>
                  Centuries Mutual
                </span>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="d-flex justify-content-center gap-4">
                <Link href="/" className="text-decoration-none" style={{ color: '#14432A' }}>
                  <i className="bi bi-house me-2"></i>Home
                </Link>
                <Link href="/transactions" className="text-decoration-none" style={{ color: '#14432A' }}>
                  <i className="bi bi-clock-history me-2"></i>Activity
                </Link>
                <Link href="/documents" className="text-decoration-none" style={{ color: '#14432A' }}>
                  <i className="bi bi-folder me-2"></i>Documents
                </Link>
                <Link href="/contact" className="text-decoration-none" style={{ color: '#14432A' }}>
                  <i className="bi bi-headset me-2"></i>Support
                </Link>
              </div>
            </div>
            <div className="col-md-3 text-end">
              <button className="btn btn-outline-secondary btn-sm me-2">
                <i className="bi bi-bell"></i>
              </button>
              <button className="btn btn-sm" style={{ backgroundColor: '#14432A', color: 'white' }} onClick={handleSignOut}>
                <i className="bi bi-box-arrow-right me-1"></i>Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid py-4">
        {/* Welcome Section */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="fw-bold mb-1" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
              Welcome Back, Member
            </h2>
            <p className="text-muted">Here's your financial overview and progress toward your goals</p>
          </div>
        </div>

        {/* Account Summary Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px', borderLeft: '4px solid #14432A' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="text-muted mb-1 small">Total Balance</p>
                    <h3 className="fw-bold mb-0" style={{ color: '#14432A' }}>$24,847</h3>
                    <small className="text-success">
                      <i className="bi bi-arrow-up"></i> +2.4% this month
                    </small>
                  </div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#14432A15',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <BanknotesIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px', borderLeft: '4px solid #1a5436' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="text-muted mb-1 small">Credit Score</p>
                    <h3 className="fw-bold mb-0" style={{ color: '#1a5436' }}>745</h3>
                    <small className="text-success">
                      <i className="bi bi-arrow-up"></i> +12 this month
                    </small>
                  </div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#1a543615',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ChartBarIcon style={{ width: '24px', height: '24px', color: '#1a5436' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px', borderLeft: '4px solid #206542' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="text-muted mb-1 small">Active Services</p>
                    <h3 className="fw-bold mb-0" style={{ color: '#206542' }}>3</h3>
                    <small className="text-muted">
                      All services active
                    </small>
                  </div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#20654215',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px', borderLeft: '4px solid #6c757d' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="text-muted mb-1 small">Next Payment</p>
                    <h3 className="fw-bold mb-0" style={{ color: '#6c757d' }}>Feb 15</h3>
                    <small className="text-muted">
                      $1,284 due
                    </small>
                  </div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#6c757d15',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ClockIcon style={{ width: '24px', height: '24px', color: '#6c757d' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Goals Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold mb-0" style={{ color: '#14432A' }}>
                    <i className="bi bi-bullseye me-2"></i>Your Financial Goals
                  </h5>
                  <button className="btn btn-sm btn-outline-secondary">
                    <i className="bi bi-gear me-1"></i>Manage Goals
                  </button>
                </div>

                <div className="row g-4">
                  {/* Health Insurance Goal */}
                  <div className="col-md-4">
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', border: '2px solid #14432A20' }}>
                      <div className="d-flex align-items-start mb-3">
                        <div style={{
                          width: '56px',
                          height: '56px',
                          backgroundColor: '#14432A',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '16px'
                        }}>
                          <CreditCardIcon style={{ width: '28px', height: '28px', color: 'white' }} />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>Health Coverage</h6>
                          <p className="text-muted small mb-2">Health Insurance Plan</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="small text-muted">Annual Deductible</span>
                          <span className="small fw-bold" style={{ color: '#14432A' }}>$1,500 / $2,000</span>
                        </div>
                        <div className="progress" style={{ height: '8px', borderRadius: '4px' }}>
                          <div className="progress-bar" style={{ width: '75%', backgroundColor: '#14432A' }}></div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="small text-muted">Coverage Status</span>
                          <span className="badge" style={{ backgroundColor: '#14432A20', color: '#14432A' }}>Active</span>
                        </div>
                      </div>
                      <Link href="/healthinsurance" className="btn btn-sm w-100" style={{ backgroundColor: '#14432A', color: 'white' }}>
                        View Details <ArrowRightIcon style={{ width: '14px', height: '14px', display: 'inline', marginLeft: '4px' }} />
                      </Link>
                    </div>
                  </div>

                  {/* Permanent Life Goal */}
                  <div className="col-md-4">
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', border: '2px solid #1a543620' }}>
                      <div className="d-flex align-items-start mb-3">
                        <div style={{
                          width: '56px',
                          height: '56px',
                          backgroundColor: '#1a5436',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '16px'
                        }}>
                          <ShieldCheckIcon style={{ width: '28px', height: '28px', color: 'white' }} />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fw-bold mb-1" style={{ color: '#1a5436' }}>Retirement Security</h6>
                          <p className="text-muted small mb-2">Permanent Life Plan</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="small text-muted">Cash Value Growth</span>
                          <span className="small fw-bold" style={{ color: '#1a5436' }}>$42K / $100K</span>
                        </div>
                        <div className="progress" style={{ height: '8px', borderRadius: '4px' }}>
                          <div className="progress-bar" style={{ width: '42%', backgroundColor: '#1a5436' }}></div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="small text-muted">Policy Status</span>
                          <span className="badge" style={{ backgroundColor: '#1a543620', color: '#1a5436' }}>Active</span>
                        </div>
                      </div>
                      <Link href="/permanentlife" className="btn btn-sm w-100" style={{ backgroundColor: '#1a5436', color: 'white' }}>
                        View Details <ArrowRightIcon style={{ width: '14px', height: '14px', display: 'inline', marginLeft: '4px' }} />
                      </Link>
                    </div>
                  </div>

                  {/* Mortgage Goal */}
                  <div className="col-md-4">
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', border: '2px solid #20654220' }}>
                      <div className="d-flex align-items-start mb-3">
                        <div style={{
                          width: '56px',
                          height: '56px',
                          backgroundColor: '#206542',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '16px'
                        }}>
                          <HomeIcon style={{ width: '28px', height: '28px', color: 'white' }} />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fw-bold mb-1" style={{ color: '#206542' }}>Dream Home Purchase</h6>
                          <p className="text-muted small mb-2">Mortgage Preparation</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="small text-muted">Down Payment Saved</span>
                          <span className="small fw-bold" style={{ color: '#206542' }}>$38K / $50K</span>
                        </div>
                        <div className="progress" style={{ height: '8px', borderRadius: '4px' }}>
                          <div className="progress-bar" style={{ width: '76%', backgroundColor: '#206542' }}></div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="small text-muted">Pre-Approval</span>
                          <span className="badge" style={{ backgroundColor: '#20654220', color: '#206542' }}>Ready</span>
                        </div>
                      </div>
                      <Link href="/mortgageloans" className="btn btn-sm w-100" style={{ backgroundColor: '#206542', color: 'white' }}>
                        View Details <ArrowRightIcon style={{ width: '14px', height: '14px', display: 'inline', marginLeft: '4px' }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Recent Activity Row */}
        <div className="row g-4">
          {/* Quick Access to Services */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '12px' }}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4" style={{ color: '#14432A' }}>
                  <i className="bi bi-grid-3x3 me-2"></i>Your Services
                </h5>
                
                <div className="row g-3">
                  {/* Health Insurance */}
                  <div className="col-md-6">
                    <div className="p-4 h-100" style={{ backgroundColor: '#14432A', borderRadius: '12px', color: 'white' }}>
                      <div className="d-flex align-items-start mb-3">
                        <CreditCardIcon style={{ width: '32px', height: '32px', marginRight: '12px' }} />
                        <div>
                          <h6 className="fw-bold mb-1">Health Insurance</h6>
                          <p className="small mb-0" style={{ opacity: 0.9 }}>
                            Comprehensive health insurance solutions tailored to your needs with expert guidance and coverage options.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex gap-2 mt-3">
                        <Link href="/healthinsurance" className="btn btn-light btn-sm flex-grow-1">
                          <i className="bi bi-arrow-right me-1"></i>Learn More
                        </Link>
                        <Link href="/apply" className="btn btn-outline-light btn-sm">
                          Apply
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Permanent Life */}
                  <div className="col-md-6">
                    <div className="p-4 h-100" style={{ backgroundColor: '#1a5436', borderRadius: '12px', color: 'white' }}>
                      <div className="d-flex align-items-start mb-3">
                        <ShieldCheckIcon style={{ width: '32px', height: '32px', marginRight: '12px' }} />
                        <div>
                          <h6 className="fw-bold mb-1">Permanent Life™</h6>
                          <p className="small mb-0" style={{ opacity: 0.9 }}>
                            Protect your family today, secure your income tomorrow. Convert life insurance to guaranteed retirement income.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex gap-2 mt-3">
                        <Link href="/permanentlife" className="btn btn-light btn-sm flex-grow-1">
                          <i className="bi bi-arrow-right me-1"></i>Learn More
                        </Link>
                        <Link href="/apply" className="btn btn-outline-light btn-sm">
                          Apply
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Mortgage Loans */}
                  <div className="col-12">
                    <div className="p-4" style={{ backgroundColor: '#206542', borderRadius: '12px', color: 'white' }}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-start flex-grow-1">
                          <HomeIcon style={{ width: '32px', height: '32px', marginRight: '12px', flexShrink: 0 }} />
                          <div>
                            <h6 className="fw-bold mb-1">Mortgage Loans</h6>
                            <p className="small mb-0" style={{ opacity: 0.9 }}>
                              Secure your dream home with our competitive mortgage loan solutions and expert guidance throughout the entire process.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex gap-2 ms-3">
                          <Link href="/mortgageloans" className="btn btn-light btn-sm">
                            <i className="bi bi-arrow-right me-1"></i>Learn More
                          </Link>
                          <Link href="/apply" className="btn btn-outline-light btn-sm">
                            Apply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Insights */}
            <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4" style={{ color: '#14432A' }}>
                  <i className="bi bi-lightbulb me-2"></i>Financial Insights
                </h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                      <div className="me-3">
                        <i className="bi bi-graph-up-arrow" style={{ fontSize: '1.5rem', color: '#28a745' }}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Coverage Active</h6>
                        <p className="text-muted small mb-0">Your health insurance policy is active with comprehensive coverage and preventive care benefits.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                      <div className="me-3">
                        <i className="bi bi-trophy" style={{ fontSize: '1.5rem', color: '#ffc107' }}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Homeownership Goal On Track</h6>
                        <p className="text-muted small mb-0">You're 76% of the way to your down payment goal. Keep it up!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4" style={{ color: '#14432A' }}>
                  <i className="bi bi-clock-history me-2"></i>Recent Activity
                </h5>
                
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#28a74520',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className="bi bi-check-circle" style={{ color: '#28a745', fontSize: '1.2rem' }}></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 small">Premium Payment Processed</h6>
                      <p className="text-muted small mb-1">$450 paid on time</p>
                      <small className="text-muted">2 hours ago</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#007bff20',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className="bi bi-graph-up" style={{ color: '#007bff', fontSize: '1.2rem' }}></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 small">Coverage Verified</h6>
                      <p className="text-muted small mb-1">Health insurance policy active</p>
                      <small className="text-muted">Yesterday</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#ffc10720',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className="bi bi-star" style={{ color: '#ffc107', fontSize: '1.2rem' }}></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 small">Wellness Checkup</h6>
                      <p className="text-muted small mb-1">Annual physical scheduled</p>
                      <small className="text-muted">2 days ago</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#6c757d20',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className="bi bi-file-text" style={{ color: '#6c757d', fontSize: '1.2rem' }}></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 small">Policy Statement</h6>
                      <p className="text-muted small mb-1">January statement available</p>
                      <small className="text-muted">3 days ago</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#28a74520',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className="bi bi-cash" style={{ color: '#28a745', fontSize: '1.2rem' }}></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 small">Savings Milestone</h6>
                      <p className="text-muted small mb-1">$5,000 added to down payment fund</p>
                      <small className="text-muted">5 days ago</small>
                    </div>
                  </div>
                </div>

                <Link href="/transactions" className="btn btn-outline-secondary btn-sm w-100 mt-4">
                  View All Activity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
