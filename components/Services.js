'use client'

import { CalculatorIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: "Tax Preparation",
    description: "Expert tax preparation services ensuring maximum returns and full compliance.",
    icon: CalculatorIcon,
    accent: "#14432A"
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health insurance solutions tailored to your needs.",
    icon: HeartIcon,
    accent: "#1a5436"
  },
  {
    title: "Life Insurance",
    description: "Protect your family's future with our comprehensive life insurance plans.",
    icon: ShieldCheckIcon,
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
          <h2 className="display-5 fw-bold mb-3">Professional Services</h2>
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
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
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
                      background: `${service.accent}10`,
                      width: '70px',
                      height: '70px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <service.icon 
                      style={{
                        width: '35px',
                        height: '35px',
                        color: service.accent
                      }}
                    />
                  </div>
                  
                  <h3 className="card-title h4 mb-3">{service.title}</h3>
                  <p className="card-text text-muted mb-4">{service.description}</p>
                  
                  <a 
                    href="#" 
                    className="text-decoration-none d-flex align-items-center"
                    style={{ color: service.accent }}
                  >
                    <span className="me-2">Learn More</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill="currentColor" 
                      className="bi bi-arrow-right" 
                      viewBox="0 0 16 16"
                    >
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 