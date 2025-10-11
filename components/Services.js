'use client'

import { CreditCardIcon, ShieldCheckIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const services = [
  {
    title: "Health Insurance",
    description: "Comprehensive health insurance solutions tailored to your needs with expert guidance and coverage options.",
    icon: CreditCardIcon,
    accent: "#14432A"
  },
  {
    title: "Permanent Life",
    description: "Protect your family today, secure your income tomorrow. Convert life insurance to guaranteed retirement income.",
    icon: ShieldCheckIcon,
    accent: "#1a5436"
  },
  {
    title: "Mortgage Loans",
    description: "Secure your dream home with our competitive mortgage loan solutions and expert guidance throughout the entire process.",
    icon: HomeIcon,
    accent: "#206542"
  }
]

export default function Services() {
  return (
    <section className="services-section py-5" style={{
      backgroundColor: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#14432A'
          }}>Professional Services</h2>
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <p className="text-muted lead">
              Comprehensive financial solutions tailored to your unique needs and goals
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div 
                className="card h-100 border-0 shadow-lg"
                style={{
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)',
                  backgroundColor: 'white',
                  border: '1px solid rgba(20, 67, 42, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(20, 67, 42, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="card-body p-5">
                  <div 
                    className="service-icon-wrapper mb-4"
                    style={{
                      background: `${service.accent}15`,
                      width: '80px',
                      height: '80px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <service.icon 
                      style={{
                        width: '40px',
                        height: '40px',
                        color: service.accent
                      }}
                    />
                  </div>
                  
                  <h3 className="card-title h3 mb-3 fw-bold" style={{ color: '#14432A' }}>{service.title}</h3>
                  <p className="card-text text-muted mb-4" style={{ fontSize: '1.1rem' }}>{service.description}</p>
                  
                  <Link 
                    href={service.title === "Health Insurance" ? "/healthinsurance" : 
                          service.title === "Permanent Life" ? "/permanentlife" : 
                          service.title === "Mortgage Loans" ? "/mortgageloans" : "#"}
                    className="text-decoration-none d-flex align-items-center fw-bold"
                    style={{ color: service.accent }}
                  >
                    <span className="me-2">Learn More</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      fill="currentColor" 
                      className="bi bi-arrow-right" 
                      viewBox="0 0 16 16"
                    >
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 