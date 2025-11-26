'use client'

import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  CheckCircleIcon,
  LockClosedIcon,
  CloudArrowUpIcon,
  DocumentCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function EDocumentSystem() {
  return (
    <>
      <main>
        {/* Hero Section with Framed Image */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="display-3 fw-bold mb-4" style={{ 
                  color: '#14432A',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  eDocument System
                </h1>
                <p className="lead mb-4" style={{ 
                  fontSize: '1.25rem',
                  color: '#495057',
                  lineHeight: '1.8'
                }}>
                  Find and rent real estate with roommates using our comprehensive eDocument system. 
                  Streamline lease agreements, roommate contracts, and property documentation all in one secure place.
                </p>
                <p className="mb-4" style={{ color: '#6c757d' }}>
                  Our platform automates the entire documentation process, from initial lease agreements to 
                  roommate contracts and verification documents. Complete all necessary paperwork in minutes 
                  rather than days.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link 
                    href="/dashboard" 
                    className="btn btn-primary btn-lg px-4 py-3 fw-bold"
                    style={{ 
                      borderRadius: '12px',
                      backgroundColor: '#14432A',
                      borderColor: '#14432A'
                    }}
                  >
                    Access Dashboard
                  </Link>
                  <Link 
                    href="/contact" 
                    className="btn btn-outline-primary btn-lg px-4 py-3 fw-bold"
                    style={{ 
                      borderRadius: '12px',
                      borderColor: '#14432A',
                      color: '#14432A'
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative" style={{
                  padding: '20px',
                  background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.05) 0%, rgba(20, 67, 42, 0.1) 100%)',
                  borderRadius: '24px',
                  border: '3px solid rgba(20, 67, 42, 0.2)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                }}>
                  <div style={{
                    position: 'relative',
                    height: '500px',
                    width: '100%',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '2px solid rgba(20, 67, 42, 0.1)'
                  }}>
                    <Image
                      src="/mountians.jpeg"
                      alt="eDocument System"
                      fill
                      priority
                      quality={100}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: '18px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3" style={{ 
                  color: '#14432A',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  Comprehensive Document Management
                </h2>
                <p className="lead text-muted">
                  Everything you need to manage your real estate and roommate documentation
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        <DocumentTextIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      </div>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Digital Leases</h5>
                    <p className="text-muted mb-0">
                      Electronic lease agreements that are legally binding and easy to manage
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        <UserGroupIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      </div>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Roommate Contracts</h5>
                    <p className="text-muted mb-0">
                      Secure roommate agreements with clear terms and responsibilities
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        <DocumentCheckIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      </div>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Property Documents</h5>
                    <p className="text-muted mb-0">
                      Complete property files including inspections and maintenance records
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <div style={{
                        background: 'rgba(20, 67, 42, 0.1)',
                        borderRadius: '12px',
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        <ClockIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                      </div>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Instant Access</h5>
                    <p className="text-muted mb-0">
                      24/7 document access from anywhere, anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3" style={{ 
                  color: '#14432A',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  How It Works
                </h2>
                <p className="lead text-muted">
                  Simple, secure, and streamlined document management
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-4">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <span className="fw-bold" style={{ color: '#14432A', fontSize: '2rem' }}>1</span>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Upload Documents</h5>
                  <p className="text-muted">
                    Upload your lease agreements, contracts, and property documents to our secure platform. 
                    All documents are encrypted and stored safely.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-4">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <span className="fw-bold" style={{ color: '#14432A', fontSize: '2rem' }}>2</span>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Digital Signatures</h5>
                  <p className="text-muted">
                    Sign documents electronically with legally binding digital signatures. 
                    All parties can sign from anywhere, anytime.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-4">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <span className="fw-bold" style={{ color: '#14432A', fontSize: '2rem' }}>3</span>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Manage & Track</h5>
                  <p className="text-muted">
                    Track document status, manage renewals, and access all your documents 
                    in one centralized dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-5" style={{ backgroundColor: '#14432A', color: 'white' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3" style={{ 
                  fontFamily: "'Playfair Display', serif"
                }}>
                  Why Choose Our eDocument System?
                </h2>
                <p className="lead" style={{ opacity: 0.95 }}>
                  Secure, efficient, and user-friendly document management
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="me-4">
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ShieldCheckIcon style={{ width: '28px', height: '28px', color: 'white' }} />
                    </div>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-3">Bank-Level Security</h5>
                    <p style={{ opacity: 0.9 }}>
                      All documents are encrypted with military-grade security. Your sensitive information 
                      is protected with the same technology used by major financial institutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="me-4">
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <LockClosedIcon style={{ width: '28px', height: '28px', color: 'white' }} />
                    </div>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-3">Legally Binding</h5>
                    <p style={{ opacity: 0.9 }}>
                      All digital signatures are legally binding and recognized by courts. 
                      Your documents have the same legal standing as paper documents.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="me-4">
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CloudArrowUpIcon style={{ width: '28px', height: '28px', color: 'white' }} />
                    </div>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-3">Cloud Storage</h5>
                    <p style={{ opacity: 0.9 }}>
                      Access your documents from anywhere with cloud storage. Never lose a document again 
                      with automatic backups and version control.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="me-4">
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CheckCircleIcon style={{ width: '28px', height: '28px', color: 'white' }} />
                    </div>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-3">Automated Workflows</h5>
                    <p style={{ opacity: 0.9 }}>
                      Streamline your document processes with automated workflows. 
                      Get reminders for renewals and important deadlines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-lg" style={{ 
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(20, 67, 42, 0.05) 0%, rgba(20, 67, 42, 0.1) 100%)'
                }}>
                  <div className="card-body p-5 text-center">
                    <h3 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                      Ready to Streamline Your Document Management?
                    </h3>
                    <p className="lead mb-4" style={{ color: '#495057' }}>
                      Join thousands of users who are already managing their real estate and roommate 
                      documents more efficiently with our eDocument system.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <Link 
                        href="/dashboard" 
                        className="btn btn-primary btn-lg px-5 py-3 fw-bold"
                        style={{ 
                          borderRadius: '12px',
                          backgroundColor: '#14432A',
                          borderColor: '#14432A'
                        }}
                      >
                        Get Started
                      </Link>
                      <Link 
                        href="/contact" 
                        className="btn btn-outline-primary btn-lg px-5 py-3 fw-bold"
                        style={{ 
                          borderRadius: '12px',
                          borderColor: '#14432A',
                          color: '#14432A'
                        }}
                      >
                        Learn More
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

