'use client'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  sectionAnimation,
  staggerContainer,
  staggerItem,
  cardAnimation,
  slideInLeft,
  slideInRight
} from '../../utils/animations'
import { 
  HomeIcon, 
  ShieldCheckIcon, 
  CreditCardIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  KeyIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function LandLords() {
  const [properties, setProperties] = useState(2)
  const [location, setLocation] = useState('McKinney')
  const estimatedMonthlyRevenue = properties * 1500

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#ffffff' }}>
        {/* Hero Section with Revenue Calculator */}
        <section className="py-5" style={{ backgroundColor: '#f7f7f7', paddingTop: '100px' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="display-4 fw-bold mb-4" style={{ 
                  color: '#222222',
                  fontSize: '3rem',
                  lineHeight: '1.1'
                }}>
                  Your properties could generate
                </h1>
                <div className="mb-4">
                  <div className="d-flex align-items-baseline">
                    <span className="display-3 fw-bold" style={{ color: '#14432A' }}>${estimatedMonthlyRevenue.toLocaleString()}</span>
                  </div>
                  <p className="text-muted mb-0" style={{ fontSize: '1.1rem' }}>
                    estimated monthly revenue on Centuries Mutual
                  </p>
                </div>
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="text-muted">{properties} properties</span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">${1500}/property/month</span>
                  </div>
                  <p className="text-muted small mb-3">
                    <Link href="#" className="text-decoration-none" style={{ color: '#222222' }}>
                      Learn how we estimate revenue
                    </Link>
                  </p>
                </div>
                
                {/* Properties Slider */}
                <div className="mb-4">
                  <label className="form-label fw-bold" style={{ color: '#222222' }}>
                    How many properties? {properties} properties. Managing {properties} properties. Adjustable.
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="1"
                    max="10"
                    value={properties}
                    onChange={(e) => setProperties(parseInt(e.target.value))}
                    style={{ 
                      accentColor: '#14432A',
                      height: '8px'
                    }}
                  />
                  <div className="d-flex justify-content-between small text-muted">
                    <span>Slide backward to decrease</span>
                    <span>Slide forward to increase</span>
                  </div>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{
                      borderRadius: '8px',
                      border: '1px solid #dddddd',
                      padding: '12px 16px'
                    }}
                  />
                  <div className="mt-2">
                    <span className="text-muted small">
                      {location}, · Entire place, · 2 bedrooms
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-muted small mb-2">Centered on Texas. Explore rates near you</p>
                  <div className="d-flex flex-wrap gap-2">
                    {['$1,200', '$1,500', '$1,800', '$2,000', '$1,400', '$1,600', '$1,900', '$1,300', '$1,700', '$2,200'].map((price, idx) => (
                      <span key={idx} className="badge" style={{ 
                        backgroundColor: '#f7f7f7',
                        color: '#222222',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: '1px solid #dddddd'
                      }}>
                        {price} USD/month, {location}, Texas
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <div style={{
                    height: '400px',
                    background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <div className="text-center">
                      <HomeIcon style={{ width: '80px', height: '80px', margin: '0 auto 20px' }} />
                      <h3 className="fw-bold">Start Managing Properties Today</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* It's Easy to Manage Section */}
        <section className="py-5">
          <div className="container">
            <motion.div className="row mb-5" {...sectionAnimation}>
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#222222' }}>
                  It's easy to manage your properties on Centuries Mutual
                </h2>
              </div>
            </motion.div>
            <motion.div 
              className="row g-4 mb-5"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div className="col-md-4" variants={staggerItem}>
                <div className="text-center">
                  <div className="mb-3" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(20, 67, 42, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <HomeIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>
                    List your properties in just a few steps
                  </h4>
                  <p className="text-muted">
                    Go at your own pace, and make changes whenever
                  </p>
                </div>
              </motion.div>
              <motion.div className="col-md-4" variants={staggerItem}>
                <div className="text-center">
                  <div className="mb-3" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(20, 67, 42, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <UserGroupIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>
                    Find verified tenants instantly
                  </h4>
                  <p className="text-muted">
                    Access our trust score system to find reliable tenants
                  </p>
                </div>
              </motion.div>
              <motion.div className="col-md-4" variants={staggerItem}>
                <div className="text-center">
                  <div className="mb-3" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(20, 67, 42, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <CreditCardIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>
                    Get paid securely and on time
                  </h4>
                  <p className="text-muted">
                    Receive rent payments instantly through blockchain technology
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Property Management Features */}
        <section className="py-5" style={{ backgroundColor: '#f7f7f7' }}>
          <div className="container">
            <motion.div className="row mb-5" {...sectionAnimation}>
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#222222' }}>
                  Comprehensive Property Management
                </h2>
                <p className="lead text-muted">
                  All the tools you need to manage your properties efficiently
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="row g-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div className="col-md-6 col-lg-4" variants={cardAnimation}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <ShieldCheckIcon style={{ width: '48px', height: '48px', color: '#14432A', marginBottom: '20px' }} />
                    <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>Verified Tenants</h4>
                    <p className="text-muted">
                      Access our in-house trust score system to find reliable tenants with verified backgrounds and payment history.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-md-6 col-lg-4" variants={cardAnimation}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <CreditCardIcon style={{ width: '48px', height: '48px', color: '#14432A', marginBottom: '20px' }} />
                    <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>Secure Payments</h4>
                    <p className="text-muted">
                      Receive rent payments instantly through our blockchain-powered payment system with Coinbase Wallet integration.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-md-6 col-lg-4" variants={cardAnimation}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <DocumentTextIcon style={{ width: '48px', height: '48px', color: '#14432A', marginBottom: '20px' }} />
                    <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>Document Management</h4>
                    <p className="text-muted">
                      Manage all your leases, contracts, and property documents in one secure platform.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-md-6 col-lg-4" variants={cardAnimation}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <CalendarIcon style={{ width: '48px', height: '48px', color: '#14432A', marginBottom: '20px' }} />
                    <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>Lease Management</h4>
                    <p className="text-muted">
                      Track lease terms, renewals, and important dates with automated reminders.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-md-6 col-lg-4" variants={cardAnimation}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <ChatBubbleLeftRightIcon style={{ width: '48px', height: '48px', color: '#14432A', marginBottom: '20px' }} />
                    <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>Tenant Communication</h4>
                    <p className="text-muted">
                      Secure messaging platform for all tenant communications and support.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-md-6 col-lg-4" variants={cardAnimation}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <ChartBarIcon style={{ width: '48px', height: '48px', color: '#14432A', marginBottom: '20px' }} />
                    <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>Analytics & Reports</h4>
                    <p className="text-muted">
                      Track income, expenses, and property performance with detailed analytics.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Protection Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <motion.div className="col-lg-6 mb-4 mb-lg-0" {...slideInLeft}>
                <div className="d-flex align-items-center mb-3">
                  <ShieldCheckIcon style={{ width: '48px', height: '48px', color: '#14432A', marginRight: '16px' }} />
                  <h2 className="fw-bold mb-0" style={{ color: '#222222' }}>Landlord Protection</h2>
                </div>
                <p className="lead mb-4" style={{ color: '#222222' }}>
                  However you manage, you're protected
                </p>
                <p className="text-muted mb-4">
                  Comprehensive protection included with every property listing on Centuries Mutual.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#10b981', marginRight: '12px', flexShrink: 0 }} />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#222222' }}>Verified tenant network</h5>
                      <p className="text-muted mb-0">All tenants are verified through our comprehensive trust score system</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#10b981', marginRight: '12px', flexShrink: 0 }} />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#222222' }}>Secure payment processing</h5>
                      <p className="text-muted mb-0">Blockchain-powered secure payment system with instant processing</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#10b981', marginRight: '12px', flexShrink: 0 }} />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#222222' }}>Property damage protection</h5>
                      <p className="text-muted mb-0">Up to $3M in property damage protection</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#10b981', marginRight: '12px', flexShrink: 0 }} />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#222222' }}>24-hour support line</h5>
                      <p className="text-muted mb-0">Round-the-clock support for landlords</p>
                    </div>
                  </li>
                </ul>
                <Link href="/trustscore" className="btn btn-dark btn-lg">
                  Learn about Trust Scores
                </Link>
              </motion.div>
              <motion.div className="col-lg-6" {...slideInRight}>
                <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5" style={{ background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)', color: 'white' }}>
                    <h4 className="fw-bold mb-4">Protection Details</h4>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Property Damage Coverage</span>
                        <span className="fw-bold">$3M</span>
                      </div>
                      <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-bar" style={{ width: '100%', backgroundColor: 'white' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Verified Tenant Network</span>
                        <span className="fw-bold">✓ Active</span>
                      </div>
                      <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-bar" style={{ width: '100%', backgroundColor: 'white' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Secure Payment Processing</span>
                        <span className="fw-bold">✓ Enabled</span>
                      </div>
                      <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-bar" style={{ width: '100%', backgroundColor: 'white' }}></div>
                      </div>
                    </div>
                    <p className="mb-0 mt-4" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      * All protection features are included with every property listing on Centuries Mutual.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-5" style={{ backgroundColor: '#f7f7f7' }}>
          <div className="container">
            <motion.div className="row mb-5" {...sectionAnimation}>
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#222222' }}>
                  All the tools you need to manage properties, all in one app
                </h2>
              </div>
            </motion.div>
            <motion.div 
              className="row g-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div className="col-md-4" variants={cardAnimation}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <HomeIcon style={{ width: '48px', height: '48px', color: '#14432A', marginBottom: '20px' }} />
                    <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>Property Dashboard</h4>
                    <p className="text-muted">
                      Manage all your properties from one central dashboard
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-md-4" variants={cardAnimation}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <CalendarIcon style={{ width: '48px', height: '48px', color: '#14432A', marginBottom: '20px' }} />
                    <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>Lease Calendar</h4>
                    <p className="text-muted">
                      Track lease terms, renewals, and important dates
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-md-4" variants={cardAnimation}>
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <ChatBubbleLeftRightIcon style={{ width: '48px', height: '48px', color: '#14432A', marginBottom: '20px' }} />
                    <h4 className="fw-bold mb-3" style={{ color: '#222222' }}>Tenant Messages</h4>
                    <p className="text-muted">
                      Communicate securely with tenants through our platform
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-5">
          <div className="container">
            <motion.div className="row mb-5" {...sectionAnimation}>
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#222222' }}>
                  Trusted by landlords nationwide
                </h2>
                <p className="lead text-muted">
                  Join thousands of landlords who trust Centuries Mutual for property management
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="row g-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
            >
              {[
                { name: 'Sarah M.', location: 'Dallas, TX', properties: 5, revenue: '$7,500/month', rating: 4.9 },
                { name: 'Michael R.', location: 'Austin, TX', properties: 8, revenue: '$12,000/month', rating: 4.8 },
                { name: 'Jennifer L.', location: 'Houston, TX', properties: 3, revenue: '$4,500/month', rating: 5.0 },
                { name: 'David K.', location: 'San Antonio, TX', properties: 6, revenue: '$9,000/month', rating: 4.9 }
              ].map((landlord, idx) => (
                <motion.div key={idx} className="col-md-6 col-lg-3" variants={cardAnimation}>
                  <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px' }}>
                    <div className="card-body p-4 text-center">
                      <div className="mb-3" style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'rgba(20, 67, 42, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        <span className="fw-bold" style={{ color: '#14432A', fontSize: '1.5rem' }}>
                          {landlord.name[0]}
                        </span>
                      </div>
                      <h6 className="fw-bold mb-1" style={{ color: '#222222' }}>{landlord.name}</h6>
                      <p className="text-muted small mb-2">Landlord in {landlord.location}</p>
                      <div className="mb-2">
                        <span className="badge" style={{ 
                          background: 'rgba(20, 67, 42, 0.1)',
                          color: '#14432A',
                          padding: '4px 8px',
                          fontSize: '0.75rem'
                        }}>
                          {landlord.properties} properties
                        </span>
                      </div>
                      <p className="fw-bold mb-1" style={{ color: '#14432A' }}>{landlord.revenue}</p>
                      <p className="text-muted small mb-0">Average monthly revenue</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5" style={{ backgroundColor: '#f7f7f7' }}>
          <div className="container">
            <motion.div className="row" {...sectionAnimation}>
              <div className="col-lg-8 mx-auto">
                <h2 className="display-6 fw-bold mb-5 text-center" style={{ color: '#222222' }}>
                  Your questions, answered
                </h2>
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <h5 className="fw-bold mb-3" style={{ color: '#222222' }}>Top questions</h5>
                    <ul className="list-unstyled">
                      {['How do I list my property?', 'How do I find verified tenants?', 'How do I get paid?', 'What are the fees?'].map((q, idx) => (
                        <li key={idx} className="mb-2">
                          <Link href="#" className="text-decoration-none text-muted">
                            {q}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h5 className="fw-bold mb-3" style={{ color: '#222222' }}>Property management</h5>
                    <ul className="list-unstyled">
                      {['How to manage multiple properties', 'Lease agreement templates', 'Tenant screening process', 'Payment processing'].map((q, idx) => (
                        <li key={idx} className="mb-2">
                          <Link href="#" className="text-decoration-none text-muted">
                            {q}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <h5 className="fw-bold mb-3" style={{ color: '#222222' }}>Trust Score System</h5>
                    <ul className="list-unstyled">
                      {['How trust scores work', 'Tenant verification process', 'Background checks', 'Payment history tracking'].map((q, idx) => (
                        <li key={idx} className="mb-2">
                          <Link href="#" className="text-decoration-none text-muted">
                            {q}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h5 className="fw-bold mb-3" style={{ color: '#222222' }}>Support & Resources</h5>
                    <ul className="list-unstyled">
                      {['24/7 landlord support', 'Property management guides', 'Legal resources', 'Best practices'].map((q, idx) => (
                        <li key={idx} className="mb-2">
                          <Link href="#" className="text-decoration-none text-muted">
                            {q}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <p className="mb-3" style={{ color: '#222222' }}>Still have questions?</p>
                  <Link href="/contact" className="btn btn-outline-dark">
                    Get answers from our support team
                  </Link>
                  <p className="mt-3 mb-0">
                    <Link href="/contact" className="text-decoration-none" style={{ color: '#222222' }}>
                      Contact Support
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
