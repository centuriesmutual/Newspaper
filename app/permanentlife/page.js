'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ShieldCheckIcon, ArrowPathIcon, CurrencyDollarIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function PermanentLife() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)',
          color: 'white'
        }}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Centuries Mutual Permanent Life™
                </h1>
                <p className="lead mb-4" style={{ fontSize: '1.4rem' }}>
                  Protect your family today, secure your income tomorrow.
                </p>
                <p className="fs-5 mb-5">
                  A complete financial solution that evolves with your life — from protecting your mortgage and loved ones to funding guaranteed retirement income.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <Link href="/apply" className="btn btn-light btn-lg px-5 py-3">
                    Get Started
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light btn-lg px-5 py-3">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-5 bg-light">
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Two Stages of Life, One Smart Strategy
                </h2>
                <p className="lead text-muted">
                  Our Permanent Life offering adapts to your changing needs through life's journey
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5">
                    <div className="mb-4" style={{
                      background: '#14432A15',
                      width: '80px',
                      height: '80px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ShieldCheckIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                    </div>
                    <h3 className="h3 fw-bold mb-3" style={{ color: '#14432A' }}>
                      Stage 1: Protection Years
                    </h3>
                    <p className="text-muted mb-4">
                      During your working years, your Permanent Life policy provides crucial death benefit protection for your family. Cover your mortgage, children's education, and family expenses while building cash value tax-deferred.
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#14432A', display: 'inline' }} />
                        <span className="ms-2">Death benefit protection</span>
                      </li>
                      <li className="mb-2">
                        <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#14432A', display: 'inline' }} />
                        <span className="ms-2">Tax-deferred cash value growth</span>
                      </li>
                      <li className="mb-2">
                        <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#14432A', display: 'inline' }} />
                        <span className="ms-2">Mortgage & family coverage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5">
                    <div className="mb-4" style={{
                      background: '#20654215',
                      width: '80px',
                      height: '80px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CurrencyDollarIcon style={{ width: '40px', height: '40px', color: '#206542' }} />
                    </div>
                    <h3 className="h3 fw-bold mb-3" style={{ color: '#14432A' }}>
                      Stage 2: Income Years
                    </h3>
                    <p className="text-muted mb-4">
                      After your mortgage is paid and protection needs decrease, convert your policy's cash value into a guaranteed income stream for retirement. Enjoy financial security when you need it most.
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#206542', display: 'inline' }} />
                        <span className="ms-2">Guaranteed lifetime income</span>
                      </li>
                      <li className="mb-2">
                        <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#206542', display: 'inline' }} />
                        <span className="ms-2">Tax-advantaged conversion</span>
                      </li>
                      <li className="mb-2">
                        <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#206542', display: 'inline' }} />
                        <span className="ms-2">Retirement income security</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  How the Life-to-Annuity Conversion Works
                </h2>
                <p className="lead text-muted">
                  A seamless transition from protection to income
                </p>
              </div>
            </div>

            <div className="row g-5">
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-4 mx-auto" style={{
                    background: '#14432A',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    1
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                    Build Your Foundation
                  </h4>
                  <p className="text-muted">
                    Start with a Whole Life, Universal Life, or Indexed Universal Life (IUL) policy. Your policy builds cash value over time while protecting your family.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-4 mx-auto" style={{
                    background: '#1a5436',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    2
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                    Life Changes
                  </h4>
                  <p className="text-muted">
                    Your mortgage is paid off, kids are grown, and you're approaching retirement. You no longer need as much life coverage but want guaranteed income.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-4 mx-auto" style={{
                    background: '#206542',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    3
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                    Convert to Income
                  </h4>
                  <p className="text-muted">
                    Use your cash value to fund an annuity through an IRS 1035 exchange. Enjoy tax-advantaged, guaranteed lifetime income for retirement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IRS 1035 Exchange Section */}
        <section className="py-5 bg-light">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="pe-lg-5">
                  <div className="mb-4" style={{
                    background: '#14432A15',
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ArrowPathIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                  </div>
                  <h2 className="display-6 fw-bold mb-4" style={{ color: '#14432A' }}>
                    IRS Section 1035 Exchange
                  </h2>
                  <p className="lead mb-4" style={{ color: '#14432A' }}>
                    The Key to Tax-Advantaged Conversion
                  </p>
                  <p className="text-muted mb-4">
                    This powerful IRS provision allows you to exchange your life insurance policy for an annuity without paying taxes on the gain — as long as the exchange is direct and compliant.
                  </p>
                  <p className="text-muted mb-4">
                    This means you preserve the full value of your policy for retirement income, without losing a significant portion to taxes in the conversion process.
                  </p>
                  <div className="alert" style={{ backgroundColor: '#14432A15', border: 'none' }}>
                    <p className="mb-0 fw-bold" style={{ color: '#14432A' }}>
                      💡 No taxes on conversion when done properly under 1035 exchange rules
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-5">
                    <h4 className="fw-bold mb-4" style={{ color: '#14432A' }}>
                      Benefits of the 1035 Exchange
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex">
                        <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                        <span className="ms-3">
                          <strong>Tax-free transfer:</strong> No immediate tax consequences on policy gains
                        </span>
                      </li>
                      <li className="mb-3 d-flex">
                        <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                        <span className="ms-3">
                          <strong>Full value preserved:</strong> Your entire cash value works for your retirement
                        </span>
                      </li>
                      <li className="mb-3 d-flex">
                        <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                        <span className="ms-3">
                          <strong>Direct exchange:</strong> Seamless transition from life insurance to annuity
                        </span>
                      </li>
                      <li className="mb-3 d-flex">
                        <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#14432A', flexShrink: 0 }} />
                        <span className="ms-3">
                          <strong>IRS compliant:</strong> Follows federal tax code for maximum benefits
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Types Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Permanent Life Policy Options
                </h2>
                <p className="lead text-muted">
                  Choose the policy that best fits your needs
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                      Whole Life Insurance
                    </h4>
                    <p className="text-muted mb-3">
                      Traditional permanent coverage with guaranteed cash value growth and fixed premiums. Predictable and stable.
                    </p>
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2">✓ Fixed premiums</li>
                      <li className="mb-2">✓ Guaranteed cash value</li>
                      <li className="mb-2">✓ Lifetime protection</li>
                      <li className="mb-2">✓ Potential dividends</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px', border: '2px solid #14432A' }}>
                  <div className="card-body p-4">
                    <div className="badge mb-3" style={{ backgroundColor: '#14432A', color: 'white' }}>
                      MOST POPULAR
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                      Universal Life Insurance
                    </h4>
                    <p className="text-muted mb-3">
                      Flexible permanent coverage with adjustable premiums and death benefits. Adapts as your life changes.
                    </p>
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2">✓ Flexible premiums</li>
                      <li className="mb-2">✓ Adjustable death benefit</li>
                      <li className="mb-2">✓ Cash value accumulation</li>
                      <li className="mb-2">✓ Policy loan options</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-3" style={{ color: '#14432A' }}>
                      Indexed Universal Life (IUL)
                    </h4>
                    <p className="text-muted mb-3">
                      Growth potential tied to market index performance with downside protection. Best of both worlds.
                    </p>
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2">✓ Market-linked growth</li>
                      <li className="mb-2">✓ Downside protection</li>
                      <li className="mb-2">✓ Flexible premiums</li>
                      <li className="mb-2">✓ Higher cash value potential</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Centuries Mutual Section */}
        <section className="py-5" style={{ backgroundColor: '#14432A', color: 'white' }}>
          <div className="container py-4">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Why Choose Centuries Mutual?
                </h2>
                <p className="lead mb-4">
                  A mutual structure that puts members first
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="text-center">
                  <div className="mb-3 mx-auto" style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ShieldCheckIcon style={{ width: '30px', height: '30px' }} />
                  </div>
                  <h5 className="fw-bold mb-2">Member-Owned</h5>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    No shareholders, just policyholders. Your interests come first.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="text-center">
                  <div className="mb-3 mx-auto" style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ChartBarIcon style={{ width: '30px', height: '30px' }} />
                  </div>
                  <h5 className="fw-bold mb-2">Financial Strength</h5>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    Decades of stability and commitment to our members.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="text-center">
                  <div className="mb-3 mx-auto" style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ArrowPathIcon style={{ width: '30px', height: '30px' }} />
                  </div>
                  <h5 className="fw-bold mb-2">Complete Solution</h5>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    One strategy that covers every stage of your life.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="text-center">
                  <div className="mb-3 mx-auto" style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CurrencyDollarIcon style={{ width: '30px', height: '30px' }} />
                  </div>
                  <h5 className="fw-bold mb-2">Tax Advantages</h5>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    Maximize your wealth with smart, tax-efficient strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-light">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Ready to Protect Your Family & Secure Your Future?
                </h2>
                <p className="lead text-muted mb-5">
                  Discover how Permanent Life can provide protection today and guaranteed income tomorrow.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/apply" className="btn btn-lg px-5 py-3" style={{
                    backgroundColor: '#14432A',
                    color: 'white',
                    borderRadius: '8px'
                  }}>
                    Apply Now
                  </Link>
                  <Link href="/schedule" className="btn btn-outline-dark btn-lg px-5 py-3" style={{
                    borderRadius: '8px',
                    borderColor: '#14432A',
                    color: '#14432A'
                  }}>
                    Schedule Consultation
                  </Link>
                  <Link href="/contact" className="btn btn-outline-dark btn-lg px-5 py-3" style={{
                    borderRadius: '8px',
                    borderColor: '#14432A',
                    color: '#14432A'
                  }}>
                    Contact Us
                  </Link>
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

