import Footer from '../../components/Footer'

export default function TermsAndConditions() {
  return (
    <main>
      <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-5">
          {/* Hero Section */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 className="display-3 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                Terms and Conditions
              </h1>
              <p className="lead mb-5" style={{ color: '#495057', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                Please read these terms and conditions carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
              </p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-lg" style={{ borderRadius: '20px', background: 'white' }}>
                <div className="card-body p-5">
                  
                  {/* Section 1 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>1. Acceptance of Terms</h2>
                    <p className="text-muted mb-3">
                      By accessing and using the services provided by Centuries Mutual, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                    </p>
                    <p className="text-muted">
                      These terms apply to all users of our platform, including visitors, clients, and service providers. We reserve the right to modify these terms at any time, and continued use of our services constitutes acceptance of any changes.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>2. Service Description</h2>
                    <p className="text-muted mb-3">
                      Centuries Mutual provides comprehensive financial and real estate services including but not limited to:
                    </p>
                    <ul className="text-muted mb-3">
                      <li>Real estate consultation and property services</li>
                      <li>Financial planning and investment guidance</li>
                      <li>Payment technology solutions</li>
                      <li>Community development programs</li>
                      <li>Professional consulting services</li>
                    </ul>
                    <p className="text-muted">
                      All services are provided subject to availability and may be modified or discontinued at our discretion.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>3. User Responsibilities</h2>
                    <p className="text-muted mb-3">
                      As a user of our services, you agree to:
                    </p>
                    <ul className="text-muted mb-3">
                      <li>Provide accurate and complete information when required</li>
                      <li>Maintain the confidentiality of your account credentials</li>
                      <li>Use our services only for lawful purposes</li>
                      <li>Respect the rights and privacy of other users</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                    <p className="text-muted">
                      You are responsible for all activities that occur under your account and must notify us immediately of any unauthorized use.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>4. Privacy and Data Protection</h2>
                    <p className="text-muted mb-3">
                      We are committed to protecting your privacy and personal information. Our data collection and processing practices are governed by our Privacy Policy, which is incorporated into these terms by reference.
                    </p>
                    <p className="text-muted">
                      We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>5. Limitation of Liability</h2>
                    <p className="text-muted mb-3">
                      Centuries Mutual shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of our services.
                    </p>
                    <p className="text-muted">
                      Our total liability to you for any claims arising from these terms or your use of our services shall not exceed the amount you paid us for the services in the twelve months preceding the claim.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>6. Intellectual Property</h2>
                    <p className="text-muted mb-3">
                      All content, trademarks, logos, and intellectual property displayed on our platform are owned by Centuries Mutual or our licensors. You may not use, reproduce, or distribute any content without our express written permission.
                    </p>
                    <p className="text-muted">
                      You retain ownership of any content you submit to our platform, but grant us a non-exclusive, royalty-free license to use, modify, and display such content in connection with our services.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>7. Termination</h2>
                    <p className="text-muted mb-3">
                      We may terminate or suspend your access to our services at any time, with or without notice, for any reason, including violation of these terms.
                    </p>
                    <p className="text-muted">
                      Upon termination, your right to use our services will cease immediately. We may delete your account and any associated data at our discretion.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>8. Governing Law</h2>
                    <p className="text-muted mb-3">
                      These terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-muted">
                      Any disputes arising from these terms or your use of our services shall be resolved in the courts of Dallas County, Texas.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-5 pt-4 border-top">
                    <h3 className="fw-bold mb-3" style={{ color: '#14432A' }}>Contact Information</h3>
                    <p className="text-muted mb-3">
                      If you have any questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="text-muted mb-1"><strong>Address:</strong></p>
                        <p className="text-muted mb-3">8080 N Central Expressway<br />Dallas, TX</p>
                      </div>
                      <div className="col-md-6">
                        <p className="text-muted mb-1"><strong>Last Updated:</strong></p>
                        <p className="text-muted">December 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
