'use client'

import Footer from '../../components/Footer'
import Link from 'next/link'
import { CreditCardIcon, ShieldCheckIcon, HomeIcon, ArrowRightIcon, CheckCircleIcon, ChartBarIcon, BanknotesIcon } from '@heroicons/react/24/outline'

export default function LearnMore() {
  return (
    <>
      <main>
        {/* Professional Hero Section */}
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
                  Comprehensive Financial Solutions
                </h1>
                <p className="lead mb-5" style={{ 
                  fontSize: '1.25rem', 
                  maxWidth: '800px', 
                  margin: '0 auto 2.5rem',
                  lineHeight: '1.8',
                  opacity: 0.95
                }}>
                  Centuries Mutual offers a complete suite of financial services designed to support you at every stage of life — from building credit to securing retirement and achieving homeownership.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/apply" className="btn btn-light btn-lg px-5 py-3">
                    Get Started
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light btn-lg px-5 py-3">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview - Clean Professional Grid */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3" style={{ 
                  color: '#14432A', 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '-0.5px'
                }}>
                  Our Financial Services
                </h2>
                <p className="text-muted lead">
                  Tailored solutions for your financial success
                </p>
              </div>
            </div>

            {/* Service 1: Rental Equity */}
            <div className="row mb-5 pb-5 border-bottom">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="p-4" style={{
                  backgroundColor: '#14432A',
                  color: 'white',
                  borderRadius: '8px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <CreditCardIcon style={{ width: '56px', height: '56px', marginBottom: '24px' }} />
                  <h3 className="h2 fw-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Rental Equity™
                  </h3>
                  <p className="mb-4" style={{ opacity: 0.95, fontSize: '1.1rem' }}>
                    Build credit and earn rewards from your rent payments. Transform rent into a pathway to homeownership.
                  </p>
                  <Link href="/rentalequity" className="btn btn-light px-4 py-2 align-self-start">
                    Learn More <ArrowRightIcon style={{ width: '16px', height: '16px', display: 'inline', marginLeft: '8px' }} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#14432A15',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <ChartBarIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Build Credit History</h5>
                        <p className="text-muted mb-0">
                          Every on-time rent payment is reported to all three major credit bureaus — Experian, Equifax, and TransUnion. Members see an average credit score increase of 60 points within 6 months.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#14432A15',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <BanknotesIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Digital Payment Platform</h5>
                        <p className="text-muted mb-0">
                          Secure, instant, and transparent rent payments with bank-level encryption. Automatic payments ensure you never miss a due date.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#14432A15',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Rewards & Protection</h5>
                        <p className="text-muted mb-0">
                          Earn cashback on every payment and optional rent protection insurance to safeguard against unexpected financial hardship.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Permanent Life */}
            <div className="row mb-5 pb-5 border-bottom">
              <div className="col-lg-7 order-lg-1 mb-4 mb-lg-0">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#1a543615',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <ShieldCheckIcon style={{ width: '24px', height: '24px', color: '#1a5436' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Protection Stage</h5>
                        <p className="text-muted mb-0">
                          During your working years, permanent life insurance provides death benefit protection for your family, covering mortgages and living expenses while building tax-deferred cash value.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#1a543615',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <BanknotesIcon style={{ width: '24px', height: '24px', color: '#1a5436' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Income Conversion</h5>
                        <p className="text-muted mb-0">
                          Later in life, convert your policy's cash value into guaranteed lifetime retirement income through an IRS 1035 exchange — tax-free and seamless.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#1a543615',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#1a5436' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Policy Options</h5>
                        <p className="text-muted mb-0">
                          Choose from Whole Life, Universal Life, or Indexed Universal Life (IUL). Each offers unique benefits for cash value accumulation and family protection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-lg-2">
                <div className="p-4" style={{
                  backgroundColor: '#1a5436',
                  color: 'white',
                  borderRadius: '8px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <ShieldCheckIcon style={{ width: '56px', height: '56px', marginBottom: '24px' }} />
                  <h3 className="h2 fw-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Permanent Life™
                  </h3>
                  <p className="mb-4" style={{ opacity: 0.95, fontSize: '1.1rem' }}>
                    Protect your family today, secure your income tomorrow. Convert life insurance to guaranteed retirement income.
                  </p>
                  <Link href="/permanentlife" className="btn btn-light px-4 py-2 align-self-start">
                    Learn More <ArrowRightIcon style={{ width: '16px', height: '16px', display: 'inline', marginLeft: '8px' }} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3: Mortgage Loans */}
            <div className="row mb-4">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="p-4" style={{
                  backgroundColor: '#206542',
                  color: 'white',
                  borderRadius: '8px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <HomeIcon style={{ width: '56px', height: '56px', marginBottom: '24px' }} />
                  <h3 className="h2 fw-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Mortgage Loans
                  </h3>
                  <p className="mb-4" style={{ opacity: 0.95, fontSize: '1.1rem' }}>
                    Secure your dream home with our competitive mortgage loan solutions. From first-time buyers to refinancing, we provide expert guidance every step of the way.
                  </p>
                  <Link href="/mortgageloans" className="btn btn-light px-4 py-2 align-self-start">
                    Learn More <ArrowRightIcon style={{ width: '16px', height: '16px', display: 'inline', marginLeft: '8px' }} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#20654215',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <HomeIcon style={{ width: '24px', height: '24px', color: '#206542' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Comprehensive Loan Products</h5>
                        <p className="text-muted mb-0">
                          Conventional loans, FHA, VA loans, and jumbo mortgages. Whether you're a first-time homebuyer or refinancing, we have the right solution for you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#20654215',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <ChartBarIcon style={{ width: '24px', height: '24px', color: '#206542' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Better Credit, Better Rates</h5>
                        <p className="text-muted mb-0">
                          Your improved credit score from Rental Equity translates directly to better mortgage rates, potentially saving you thousands over the life of your loan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#20654215',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#206542' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Expert Guidance</h5>
                        <p className="text-muted mb-0">
                          Dedicated loan officers guide you through every step, from pre-approval to closing. Fast approvals and personalized service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Centuries Mutual Section */}
        <section className="py-5 bg-white">
          <div className="container py-5">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3" style={{ 
                  color: '#14432A', 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '-0.5px'
                }}>
                  Why Choose Centuries Mutual?
                </h2>
                <p className="text-muted lead">
                  A member-focused approach to financial services
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="text-center h-100 p-4">
                  <div className="mb-3 mx-auto" style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#14432A15',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Member-Owned</h5>
                  <p className="text-muted mb-0">
                    No shareholders, only policyholders. Your interests always come first in every decision we make.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="text-center h-100 p-4">
                  <div className="mb-3 mx-auto" style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#14432A15',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <ChartBarIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Financial Strength</h5>
                  <p className="text-muted mb-0">
                    Built on a foundation of stability and commitment to long-term member value and security.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="text-center h-100 p-4">
                  <div className="mb-3 mx-auto" style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#14432A15',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <HomeIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Complete Solutions</h5>
                  <p className="text-muted mb-0">
                    Integrated financial services that work together to support your life's journey.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="text-center h-100 p-4">
                  <div className="mb-3 mx-auto" style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#14432A15',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <CheckCircleIcon style={{ width: '32px', height: '32px', color: '#14432A' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Trusted Expertise</h5>
                  <p className="text-muted mb-0">
                    Professional guidance from experienced financial specialists dedicated to your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5" style={{ backgroundColor: '#14432A', color: 'white' }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ready to Get Started?
                </h2>
                <p className="lead mb-5" style={{ opacity: 0.95 }}>
                  Discover how Centuries Mutual can help you achieve your financial goals. Schedule a consultation or apply today.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/apply" className="btn btn-light btn-lg px-5 py-3">
                    Apply Now
                  </Link>
                  <Link href="/schedule" className="btn btn-outline-light btn-lg px-5 py-3">
                    Schedule Consultation
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light btn-lg px-5 py-3">
                    Contact Us
                  </Link>
                </div>

                <div className="row mt-5 pt-5 border-top" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="h3 fw-bold mb-2">3</div>
                    <p className="mb-0" style={{ opacity: 0.9 }}>Comprehensive Solutions</p>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="h3 fw-bold mb-2">100%</div>
                    <p className="mb-0" style={{ opacity: 0.9 }}>Member-Focused</p>
                  </div>
                  <div className="col-md-4">
                    <div className="h3 fw-bold mb-2">24/7</div>
                    <p className="mb-0" style={{ opacity: 0.9 }}>Digital Access</p>
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
