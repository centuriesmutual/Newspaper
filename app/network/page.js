'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ShieldCheckIcon, 
  CpuChipIcon, 
  ServerIcon, 
  LockClosedIcon,
  EyeIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function Network() {
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
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Network Security & Infrastructure
                </h1>
                <p className="lead mb-4" style={{ fontSize: '1.4rem' }}>
                  Advanced network security systems powered by vector databases, AI-powered anomaly detection, and custom firmware
                </p>
                <p className="fs-5 mb-5">
                  Our enterprise-grade network infrastructure ensures safe, secure connectivity for child care facilities and all our services. Built with cutting-edge technology including vector databases, AI anomaly detection, and custom firmware for maximum security.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link href="/contact" className="btn btn-light btn-lg px-5 py-3">
                    Learn More
                  </Link>
                  <Link href="/apply" className="btn btn-outline-light btn-lg px-5 py-3">
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative" style={{ height: '500px', borderRadius: '20px', overflow: 'hidden' }}>
                  <Image
                    src="/mountians.jpeg"
                    alt="Network Security"
                    fill
                    priority
                    quality={100}
                    style={{ objectFit: 'cover', borderRadius: '20px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vector Database Section */}
        <section className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A' }}>
                  Vector Database Technology
                </h2>
                <p className="lead text-muted">
                  Our network infrastructure leverages advanced vector database technology to enable fast, efficient data processing and intelligent pattern recognition for enhanced security monitoring.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <ServerIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>High-Performance Data Storage</h3>
                    <p className="text-muted">
                      Our vector database provides lightning-fast storage and retrieval of network data, security logs, and behavioral patterns. This enables real-time analysis and instant threat detection across our entire network infrastructure.
                    </p>
                    <ul className="list-unstyled mt-3">
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Scalable vector storage
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Real-time data processing
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Efficient pattern matching
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <ChartBarIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>Intelligent Data Analysis</h3>
                    <p className="text-muted">
                      Vector databases enable sophisticated similarity searches and pattern recognition, allowing our AI systems to identify anomalies, detect threats, and learn from network behavior patterns to continuously improve security.
                    </p>
                    <ul className="list-unstyled mt-3">
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Similarity-based searches
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Pattern recognition
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Behavioral analysis
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network Security for Child Care Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A' }}>
                  Child Care Network Security
                </h2>
                <p className="lead text-muted">
                  Our network security tools are specifically designed to create a safe, secure environment for child care facilities. Every aspect of our network infrastructure prioritizes the safety and protection of children.
                </p>
              </div>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <ShieldCheckIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>Content Filtering</h3>
                    <p className="text-muted">
                      Advanced content filtering ensures that only age-appropriate content is accessible on our network. All web traffic is monitored and filtered to protect children from harmful or inappropriate material.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <LockClosedIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>Access Control</h3>
                    <p className="text-muted">
                      Strict access control mechanisms ensure that only authorized personnel can access sensitive systems and data. Multi-factor authentication and role-based access control protect all network resources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <EyeIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>24/7 Monitoring</h3>
                    <p className="text-muted">
                      Continuous network monitoring ensures that any security threats or anomalies are detected immediately. Our monitoring systems operate around the clock to maintain the highest levels of security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Powered Anomaly Detection Section */}
        <section className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A' }}>
                  AI-Powered Anomaly Detection
                </h2>
                <p className="lead text-muted">
                  Our advanced AI systems continuously analyze network traffic, user behavior, and system patterns to identify anomalies and potential security threats in real-time.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <CpuChipIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>Machine Learning Algorithms</h3>
                    <p className="text-muted">
                      Our AI systems use sophisticated machine learning algorithms trained on vast datasets of network behavior. These algorithms learn normal patterns and can instantly identify deviations that may indicate security threats or suspicious activity.
                    </p>
                    <ul className="list-unstyled mt-3">
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Behavioral pattern analysis
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Real-time threat detection
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Adaptive learning systems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <EyeIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>Proactive Threat Prevention</h3>
                    <p className="text-muted">
                      Our AI-powered anomaly detection doesn't just identify threats - it prevents them. By analyzing patterns and predicting potential security issues before they occur, our systems can automatically implement protective measures to keep your network safe.
                    </p>
                    <ul className="list-unstyled mt-3">
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Predictive threat analysis
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Automated response systems
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Zero-day threat detection
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Firmware Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A' }}>
                  Custom Firmware for Network Security Equipment
                </h2>
                <p className="lead text-muted">
                  We build our own network security equipment with custom firmware specifically designed for our security requirements. This gives us complete control over security features and ensures optimal protection.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <CogIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>Purpose-Built Security</h3>
                    <p className="text-muted">
                      Our custom firmware is built from the ground up with security as the primary focus. Every feature is designed to enhance network protection and prevent unauthorized access.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <ShieldCheckIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>Hardware Integration</h3>
                    <p className="text-muted">
                      Our custom firmware is optimized for the specific hardware we build, ensuring maximum performance and security. This tight integration allows for advanced security features not possible with off-the-shelf solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <CpuChipIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#14432A' }}>Continuous Updates</h3>
                    <p className="text-muted">
                      Our custom firmware receives regular security updates and feature enhancements. We can quickly respond to new threats and implement security improvements across all our network equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-10 mx-auto">
                <div className="alert mb-0 p-4" style={{ 
                  backgroundColor: '#14432A15', 
                  border: 'none',
                  borderRadius: '16px'
                }}>
                  <div className="d-flex align-items-start">
                    <ShieldCheckIcon style={{ width: '32px', height: '32px', color: '#14432A', flexShrink: 0 }} />
                    <div className="ms-3">
                      <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>
                        Complete Control & Security
                      </h5>
                      <p className="mb-0 text-muted">
                        By building our own network security equipment with custom firmware, we maintain complete control over every aspect of network security. This allows us to implement the most advanced security features, respond quickly to threats, and ensure that our network infrastructure meets the highest standards for child care facilities and all our services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#14432A' }}>
                  Why Our Network Security Stands Out
                </h2>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <ShieldCheckIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                  </div>
                  <h4 className="h5 mb-3 fw-bold" style={{ color: '#14432A' }}>Child Care Safe</h4>
                  <p className="text-muted">Network infrastructure specifically designed to protect children and ensure safe online environments.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <CpuChipIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                  </div>
                  <h4 className="h5 mb-3 fw-bold" style={{ color: '#14432A' }}>AI-Powered</h4>
                  <p className="text-muted">Advanced AI systems continuously monitor and protect your network from emerging threats.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <CogIcon style={{ width: '40px', height: '40px', color: '#14432A' }} />
                  </div>
                  <h4 className="h5 mb-3 fw-bold" style={{ color: '#14432A' }}>Custom Built</h4>
                  <p className="text-muted">Purpose-built equipment with custom firmware designed specifically for our security requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mb-4 fw-bold" style={{ color: '#14432A' }}>Secure Your Network Today</h2>
                <p className="lead mb-4">
                  Experience enterprise-grade network security powered by vector databases, AI anomaly detection, and custom firmware.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <Link href="/contact" className="btn btn-primary btn-lg px-5 py-3">
                    Contact Us
                  </Link>
                  <Link href="/apply" className="btn btn-outline-primary btn-lg px-5 py-3">
                    Get Started
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

