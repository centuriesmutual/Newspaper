'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import { sectionAnimation, staggerContainer, cardAnimation } from '../utils/animations'

export default function BlockchainSection() {
  return (
    <section className="py-5" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      borderTop: '1px solid #e9ecef',
      borderBottom: '1px solid #e9ecef'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div className="text-center mb-4" {...sectionAnimation}>
              <div className="d-inline-flex align-items-center gap-2 mb-3">
                <CheckBadgeIcon style={{ width: '18px', height: '18px', color: '#14432A' }} />
                <span style={{ 
                  color: '#14432A',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Patented Technology
                </span>
              </div>
              
              <h5 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.1rem' }}>
                Powered by Patented Blockchain Technology
              </h5>
              
              <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                Our proprietary blockchain system ensures immutable, transparent, and secure contract enforcement 
                across all platform transactions, providing unparalleled trust and reliability in digital agreements.
              </p>
            </motion.div>

            {/* Feature Icons */}
            <div className="row g-4 mt-4">
              <div className="col-md-4 text-center">
                <div className="card border-0 shadow-sm h-100" style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '2rem 1.5rem',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <div className="mb-3 d-flex justify-content-center">
                    <ShieldCheckIcon style={{ 
                      width: '40px', 
                      height: '40px', 
                      color: '#14432A'
                    }} />
                  </div>
                  <h6 className="fw-bold mb-2" style={{ 
                    color: '#14432A',
                    fontSize: '1rem',
                    marginBottom: '0.75rem'
                  }}>
                    Immutable
                  </h6>
                  <p className="text-muted mb-0" style={{ 
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                  }}>
                    Permanent, tamper-proof records
                  </p>
                </div>
              </div>
              
              <div className="col-md-4 text-center">
                <div className="card border-0 shadow-sm h-100" style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '2rem 1.5rem',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <div className="mb-3 d-flex justify-content-center">
                    <LockClosedIcon style={{ 
                      width: '40px', 
                      height: '40px', 
                      color: '#14432A'
                    }} />
                  </div>
                  <h6 className="fw-bold mb-2" style={{ 
                    color: '#14432A',
                    fontSize: '1rem',
                    marginBottom: '0.75rem'
                  }}>
                    Secure
                  </h6>
                  <p className="text-muted mb-0" style={{ 
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                  }}>
                    Enterprise-grade security protocols
                  </p>
                </div>
              </div>
              
              <div className="col-md-4 text-center">
                <div className="card border-0 shadow-sm h-100" style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '2rem 1.5rem',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <div className="mb-3 d-flex justify-content-center">
                    <CheckBadgeIcon style={{ 
                      width: '40px', 
                      height: '40px', 
                      color: '#14432A'
                    }} />
                  </div>
                  <h6 className="fw-bold mb-2" style={{ 
                    color: '#14432A',
                    fontSize: '1rem',
                    marginBottom: '0.75rem'
                  }}>
                    Transparent
                  </h6>
                  <p className="text-muted mb-0" style={{ 
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                  }}>
                    Full visibility and accountability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

