'use client'

import Image from 'next/image'

const services = [
  {
    title: "Tax Preparation",
    description: "Expert tax preparation services ensuring maximum returns and full compliance.",
    longDescription: "Our comprehensive tax preparation services are designed to maximize your returns while ensuring full compliance with all tax regulations. We handle everything from personal tax returns to complex business filings, providing expert guidance every step of the way.",
    icon: "bi-calculator",
    accent: "#14432A",
    features: [
      "Personal and Business Tax Returns",
      "Tax Planning and Strategy",
      "IRS Audit Support",
      "Quarterly Tax Estimates",
      "Tax Credit Optimization"
    ]
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health insurance solutions tailored to your needs.",
    longDescription: "We provide personalized health insurance solutions that protect you and your family. Our team works with leading insurance providers to find the perfect coverage that fits your healthcare needs and budget.",
    icon: "bi-heart-pulse",
    accent: "#1a5436",
    features: [
      "Individual and Family Plans",
      "Group Health Insurance",
      "Medicare Supplement Plans",
      "Dental and Vision Coverage",
      "Prescription Drug Coverage"
    ]
  },
  {
    title: "Life Insurance",
    description: "Protect your family's future with our comprehensive life insurance plans.",
    longDescription: "Secure your family's financial future with our comprehensive life insurance solutions. We offer a range of policies designed to provide peace of mind and financial security for your loved ones.",
    icon: "bi-shield-check",
    accent: "#206542",
    features: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Universal Life Insurance",
      "Final Expense Coverage",
      "Business Life Insurance"
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Our Services
              </h1>
              <p className="lead mb-0" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                fontSize: '1.3rem'
              }}>
                Comprehensive financial solutions for your peace of mind
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: '400px' }}>
                <Image
                  src="/deer.jpeg"
                  alt="Professional Services"
                  fill
                  priority
                  quality={100}
                  className="rounded-3"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className="mb-5">
              <div className="row align-items-center g-5">
                <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                  <div className="position-relative" style={{ height: '400px' }}>
                    <Image
                      src={`/service-${index + 1}.jpg`}
                      alt={service.title}
                      fill
                      className="rounded-3"
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                </div>
                <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3" style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: `${service.accent}15`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className={`bi ${service.icon} text-primary`} style={{ fontSize: '2rem' }}></i>
                    </div>
                    <h2 className="h1 mb-0" style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: '#14432A'
                    }}>{service.title}</h2>
                  </div>
                  <p className="lead text-muted mb-4">{service.longDescription}</p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-3 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-primary btn-lg mt-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A'
              }}>Ready to Get Started?</h2>
              <p className="lead text-muted mb-4">
                Contact us today to learn more about our services and how we can help you achieve your financial goals.
              </p>
              <button className="btn btn-primary btn-lg px-5">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 