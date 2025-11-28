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

export default function Tenants() {
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
                  For Tenants
                </h1>
                <p className="lead mb-5" style={{ 
                  fontSize: '1.25rem', 
                  maxWidth: '800px', 
                  margin: '0 auto 2.5rem',
                  lineHeight: '1.8',
                  opacity: 0.95
                }}>
                  Find your perfect home with verified landlords and hosts. Build your trust score, make secure payments, and access rental equity benefits.
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
                      <HomeIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Find Your Home</h4>
                    <p className="text-muted">
                      Browse verified listings from trusted landlords and hosts with our comprehensive search and filter system.
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
                      <ChartBarIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Build Trust Score</h4>
                    <p className="text-muted">
                      Build your trust score with every on-time rent payment and unlock better rental opportunities and rates.
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
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Rental Equity</h4>
                    <p className="text-muted">
                      Transform your rent payments into trust score growth and build a pathway to homeownership.
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
                      Start Your Search Today
                    </h3>
                    <p className="mb-4" style={{ opacity: 0.95, fontSize: '1.1rem' }}>
                      Join our platform and discover verified listings from trusted landlords and hosts.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <Link href="/rooms" className="btn btn-light btn-lg px-5 py-3">
                        Browse Rooms
                      </Link>
                      <Link href="/rentalequity" className="btn btn-outline-light btn-lg px-5 py-3">
                        Learn About Rental Equity
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

