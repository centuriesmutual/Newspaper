'use client'

import { ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function BlockchainSection() {
  return (
    <section className="py-5" style={{ 
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      borderTop: '1px solid #e9ecef',
      borderBottom: '1px solid #e9ecef'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex align-items-center justify-content-center flex-column flex-md-row gap-4">
              <div style={{
                background: 'rgba(20, 67, 42, 0.1)',
                borderRadius: '16px',
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
              </div>
              <div className="text-center text-md-start" style={{ flex: 1 }}>
                <h5 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '1.1rem' }}>
                  Powered by Patented Blockchain Technology
                </h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Our proprietary blockchain system ensures immutable, transparent, and secure contract enforcement 
                  across all platform transactions, providing unparalleled trust and reliability in digital agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

