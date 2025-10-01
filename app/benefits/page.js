'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Benefits() {
  const benefits = [
    {
      icon: "bi-heart-pulse",
      title: "Health Insurance",
      description: "Comprehensive health, dental, and vision coverage for you and your family",
      details: [
        "100% company-paid health insurance for employees",
        "Family coverage with minimal employee contribution",
        "Dental and vision insurance included",
        "Health savings account (HSA) with company matching",
        "Mental health and wellness programs"
      ]
    },
    {
      icon: "bi-piggy-bank",
      title: "Equity & Ownership",
      description: "Employee stock options and equity participation in company growth",
      details: [
        "Stock option grants for all employees",
        "Equity participation in company growth",
        "Performance-based equity bonuses",
        "Employee stock purchase program",
        "Vesting schedule with accelerated options"
      ]
    },
    {
      icon: "bi-calendar-check",
      title: "Paid Time Off",
      description: "Generous vacation and sick leave policies",
      details: [
        "20+ days of paid vacation annually",
        "10+ paid sick days per year",
        "Personal days for life events",
        "Floating holidays for cultural observances",
        "Unlimited mental health days"
      ]
    },
    {
      icon: "bi-book",
      title: "Professional Development",
      description: "Continuing education and certification support",
      details: [
        "Annual learning and development budget",
        "Conference and training reimbursement",
        "Certification and licensing support",
        "Internal mentorship programs",
        "Leadership development opportunities"
      ]
    },
    {
      icon: "bi-people",
      title: "Team Environment",
      description: "Collaborative and supportive workplace culture",
      details: [
        "Flexible work arrangements",
        "Remote work options",
        "Team building activities",
        "Employee recognition programs",
        "Inclusive and diverse workplace"
      ]
    },
    {
      icon: "bi-graph-up",
      title: "Growth Opportunities",
      description: "Clear career advancement paths and mentorship",
      details: [
        "Individual development plans",
        "Internal promotion opportunities",
        "Cross-functional project experience",
        "Leadership training programs",
        "Career coaching and guidance"
      ]
    }
  ]

  const additionalBenefits = [
    {
      title: "Retirement Planning",
      description: "401(k) with company matching up to 6% of salary"
    },
    {
      title: "Life Insurance",
      description: "Company-paid life insurance coverage"
    },
    {
      title: "Disability Insurance",
      description: "Short and long-term disability coverage"
    },
    {
      title: "Commuter Benefits",
      description: "Pre-tax commuter and parking benefits"
    },
    {
      title: "Employee Assistance",
      description: "24/7 confidential counseling and support services"
    },
    {
      title: "Gym Membership",
      description: "Reimbursement for fitness and wellness activities"
    }
  ]

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="h3 mb-0" style={{ color: '#14432A' }}>
                <i className="bi bi-gift me-2"></i>Employee Benefits
              </h1>
            </div>
            <div className="col-auto">
              <Link href="/careers" className="btn btn-outline-secondary">
                <i className="bi bi-arrow-left me-2"></i>Back to Careers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.h1 
                className="display-4 fw-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ color: '#14432A' }}
              >
                Comprehensive Benefits Package
              </motion.h1>
              <motion.p 
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We invest in our team's success and well-being with a comprehensive benefits package 
                that supports your health, growth, and financial security.
              </motion.p>
              <motion.div 
                className="d-flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/apply" className="btn btn-primary btn-lg">Apply Now</Link>
                <Link href="/careers" className="btn btn-outline-primary btn-lg">View Positions</Link>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-primary rounded-3 p-5 text-white">
                  <i className="bi bi-shield-check display-1 mb-3"></i>
                  <h3 className="mb-2">Your Well-being Matters</h3>
                  <p className="mb-0">We provide comprehensive benefits to support every aspect of your life.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Benefits */}
      <section className="py-5">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-3" style={{ color: '#14432A' }}>Core Benefits</h2>
            <p className="text-muted">Essential benefits that support your health, growth, and financial security</p>
          </motion.div>

          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                        <i className={`${benefit.icon} text-white`} style={{ fontSize: '1.8rem' }}></i>
                      </div>
                      <h4 className="mb-2" style={{ color: '#14432A' }}>{benefit.title}</h4>
                      <p className="text-muted">{benefit.description}</p>
                    </div>
                    <ul className="list-unstyled">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="mb-2">
                          <i className="bi bi-check-circle text-success me-2"></i>
                          <small>{detail}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-5 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-3" style={{ color: '#14432A' }}>Additional Benefits</h2>
            <p className="text-muted">Extra perks and benefits that enhance your work experience</p>
          </motion.div>

          <div className="row g-4">
            {additionalBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="d-flex align-items-start">
                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                    <i className="bi bi-check text-white"></i>
                  </div>
                  <div>
                    <h6 className="mb-1" style={{ color: '#14432A' }}>{benefit.title}</h6>
                    <p className="text-muted small mb-0">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: '#14432A' }}>
        <div className="container text-center">
          <motion.h3 
            className="text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Join Our Team?
          </motion.h3>
          <motion.p 
            className="text-white-50 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our open positions and start your career with comprehensive benefits.
          </motion.p>
          <motion.div 
            className="d-flex gap-3 justify-content-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/apply" className="btn btn-light btn-lg">
              <i className="bi bi-person-plus me-2"></i>Apply Now
            </Link>
            <Link href="/careers" className="btn btn-outline-light btn-lg">
              View Positions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
