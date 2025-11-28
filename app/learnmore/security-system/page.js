'use client'

import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Link from 'next/link'
import { 
  HomeIcon, 
  LockClosedIcon, 
  BellIcon, 
  KeyIcon, 
  ShieldCheckIcon, 
  ComputerDesktopIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function SecuritySystemLearnMore() {
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
                  Smart Home Security System
                </h1>
                <p className="lead mb-5" style={{ 
                  fontSize: '1.25rem', 
                  maxWidth: '800px', 
                  margin: '0 auto 2.5rem',
                  lineHeight: '1.8',
                  opacity: 0.95
                }}>
                  Complete home security solution integrating cameras, network devices, and smart sensors. Powered by Lumen Technologies and Texas Instruments for comprehensive home protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-5">
            <div className="row g-4 mb-5">
              <div className="col-md-6 col-lg-3">
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
                      <ComputerDesktopIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Integrated System</h4>
                    <p className="text-muted">
                      Unified security platform connecting all devices seamlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
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
                      <BellIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Smart Alerts</h4>
                    <p className="text-muted">
                      Real-time notifications sent directly to your devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
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
                      <KeyIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Access Control</h4>
                    <p className="text-muted">
                      Smart locks & keys for secure entry management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
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
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>Complete Protection</h4>
                    <p className="text-muted">
                      End-to-end security covering all entry points.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Dashboard */}
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5">
                    <h3 className="fw-bold mb-4 text-center" style={{ color: '#14432A' }}>Security System Dashboard</h3>
                    <div className="row g-4 mb-4">
                      <div className="col-md-6">
                        <div className="text-center p-4" style={{ 
                          background: '#f8f9fa', 
                          borderRadius: '12px',
                          border: '2px solid #e9ecef'
                        }}>
                          <HomeIcon style={{ width: '40px', height: '40px', color: '#14432A', marginBottom: '12px' }} />
                          <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>100%</h6>
                          <small className="text-muted">Coverage</small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-center p-4" style={{ 
                          background: '#f8f9fa', 
                          borderRadius: '12px',
                          border: '2px solid #e9ecef'
                        }}>
                          <LockClosedIcon style={{ width: '40px', height: '40px', color: '#14432A', marginBottom: '12px' }} />
                          <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>256-bit</h6>
                          <small className="text-muted">Encryption</small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3" style={{ color: '#14432A' }}>System Status</h6>
                      <div className="space-y-2">
                        <div className="d-flex justify-content-between align-items-center p-3" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                          <span className="fw-medium">All Systems Active</span>
                          <span className="text-success fw-bold">✓ Online</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-3" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                          <span className="fw-medium">Smart Sensors</span>
                          <span className="text-success fw-bold">✓ Monitoring</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-3" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
                          <span className="fw-medium">Automated Alerts</span>
                          <span className="text-success fw-bold">✓ Enabled</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Powered By Section */}
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-sm" style={{ 
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                  color: 'white'
                }}>
                  <div className="card-body p-5 text-center">
                    <h3 className="fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Powered by Industry Leaders
                    </h3>
                    <div className="d-flex gap-4 justify-content-center flex-wrap">
                      <div>
                        <h5 className="fw-bold mb-2">Lumen Technologies</h5>
                        <p className="mb-0" style={{ opacity: 0.9 }}>Enterprise-grade security infrastructure</p>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Texas Instruments</h5>
                        <p className="mb-0" style={{ opacity: 0.9 }}>Advanced sensor and processing technology</p>
                      </div>
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

