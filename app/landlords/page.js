'use client'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { 
  HomeIcon, 
  ShieldCheckIcon, 
  CreditCardIcon,
  CheckCircleIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function LandLords() {
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
                  For Landlords
                </h1>
                <p className="lead mb-5" style={{ 
                  fontSize: '1.25rem', 
                  maxWidth: '800px', 
                  margin: '0 auto 2.5rem',
                  lineHeight: '1.8',
                  opacity: 0.95
                }}>
                  Streamline your property management with our comprehensive platform. Find verified tenants, process payments securely, and manage your properties with ease.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-5">
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
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Verified Tenants</h4>
                    <p className="text-muted">
                      Access our in-house trust score system to find reliable tenants with verified backgrounds and payment history.
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
                      <CreditCardIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Secure Payments</h4>
                    <p className="text-muted">
                      Receive rent payments instantly through our blockchain-powered payment system with Coinbase Wallet integration.
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
                      <HomeIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Property Management</h4>
                    <p className="text-muted">
                      Manage all your properties, leases, and documents in one secure platform with automated record-keeping.
                    </p>
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
                      Ready to Get Started?
                    </h3>
                    <p className="mb-4" style={{ opacity: 0.95, fontSize: '1.1rem' }}>
                      Join our platform and start managing your properties more efficiently today.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <Link href="/contact" className="btn btn-light btn-lg px-5 py-3">
                        Contact Us
                      </Link>
                      <Link href="/rentalequity" className="btn btn-outline-light btn-lg px-5 py-3">
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

