'use client'

import { WifiIcon, ServerIcon, ShieldCheckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

export default function NetworkTechnology() {
  return (
    <section className="py-5" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      borderTop: '1px solid #e9ecef',
      borderBottom: '1px solid #e9ecef'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-4">
              <div className="d-inline-flex align-items-center gap-2 mb-3">
                <CheckBadgeIcon style={{ width: '18px', height: '18px', color: '#14432A' }} />
                <span style={{ 
                  color: '#14432A',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Network Technology
                </span>
              </div>
              
              <h5 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.1rem' }}>
                Powered by Lumen Technologies and Texas Instruments
              </h5>
              
              <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                Our custom-built network infrastructure ensures high-performance connectivity, enterprise-grade security, 
                and seamless integration across all devices, providing reliable and secure networking solutions for your home.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="row g-3">
              <div className="col-md-4 text-center">
                <div style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '1.5rem 1rem',
                  border: '1px solid #e9ecef',
                  height: '100%'
                }}>
                  <WifiIcon style={{ 
                    width: '32px', 
                    height: '32px', 
                    color: '#14432A',
                    marginBottom: '0.75rem'
                  }} />
                  <h6 style={{ 
                    color: '#14432A',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    High-Performance
                  </h6>
                  <p style={{ 
                    color: '#6c757d',
                    fontSize: '0.85rem',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    WiFi 6E and 10Gbps speeds
                  </p>
                </div>
              </div>
              
              <div className="col-md-4 text-center">
                <div style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '1.5rem 1rem',
                  border: '1px solid #e9ecef',
                  height: '100%'
                }}>
                  <ShieldCheckIcon style={{ 
                    width: '32px', 
                    height: '32px', 
                    color: '#14432A',
                    marginBottom: '0.75rem'
                  }} />
                  <h6 style={{ 
                    color: '#14432A',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    Secure
                  </h6>
                  <p style={{ 
                    color: '#6c757d',
                    fontSize: '0.85rem',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    Enterprise-grade security protocols
                  </p>
                </div>
              </div>
              
              <div className="col-md-4 text-center">
                <div style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '1.5rem 1rem',
                  border: '1px solid #e9ecef',
                  height: '100%'
                }}>
                  <ServerIcon style={{ 
                    width: '32px', 
                    height: '32px', 
                    color: '#14432A',
                    marginBottom: '0.75rem'
                  }} />
                  <h6 style={{ 
                    color: '#14432A',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    Integrated
                  </h6>
                  <p style={{ 
                    color: '#6c757d',
                    fontSize: '0.85rem',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    Seamless device connectivity
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

