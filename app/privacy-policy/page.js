import Footer from '../../components/Footer'

export default function PrivacyPolicy() {
  return (
    <main>
      <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-5">
          {/* Hero Section */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 className="display-3 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                Privacy Policy
              </h1>
              <p className="lead mb-5" style={{ color: '#495057', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                At Centuries Mutual, we are committed to protecting your privacy and personal information. This policy explains how we collect, use, and safeguard your data.
              </p>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-lg" style={{ borderRadius: '20px', background: 'white' }}>
                <div className="card-body p-5">
                  
                  {/* Section 1 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>1. Information We Collect</h2>
                    <p className="text-muted mb-3">
                      We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:
                    </p>
                    <ul className="text-muted mb-3">
                      <li>Personal identification information (name, email address, phone number)</li>
                      <li>Financial information (for payment processing and financial services)</li>
                      <li>Real estate preferences and requirements</li>
                      <li>Communication records and support interactions</li>
                      <li>Account credentials and authentication data</li>
                    </ul>
                    <p className="text-muted">
                      We also automatically collect certain information when you use our services, including device information, usage patterns, and cookies data.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>2. How We Use Your Information</h2>
                    <p className="text-muted mb-3">
                      We use the information we collect to:
                    </p>
                    <ul className="text-muted mb-3">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and manage your account</li>
                      <li>Communicate with you about services, updates, and support</li>
                      <li>Personalize your experience and recommend relevant services</li>
                      <li>Ensure security and prevent fraud</li>
                      <li>Comply with legal obligations and regulatory requirements</li>
                    </ul>
                    <p className="text-muted">
                      We do not sell, trade, or rent your personal information to third parties without your explicit consent.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>3. Information Sharing and Disclosure</h2>
                    <p className="text-muted mb-3">
                      We may share your information in the following circumstances:
                    </p>
                    <ul className="text-muted mb-3">
                      <li>With your explicit consent</li>
                      <li>To comply with legal obligations or court orders</li>
                      <li>To protect our rights, property, or safety, or that of our users</li>
                      <li>With trusted service providers who assist in our operations</li>
                      <li>In connection with a business transfer or acquisition</li>
                    </ul>
                    <p className="text-muted">
                      All third parties with whom we share information are required to maintain appropriate security measures and use the information only for the purposes specified.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>4. Data Security</h2>
                    <p className="text-muted mb-3">
                      We implement comprehensive security measures to protect your personal information:
                    </p>
                    <ul className="text-muted mb-3">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Secure servers and regular security audits</li>
                      <li>Access controls and authentication protocols</li>
                      <li>Employee training on data protection practices</li>
                      <li>Regular security assessments and updates</li>
                    </ul>
                    <p className="text-muted">
                      While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>5. Your Rights and Choices</h2>
                    <p className="text-muted mb-3">
                      You have the following rights regarding your personal information:
                    </p>
                    <ul className="text-muted mb-3">
                      <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong>Objection:</strong> Object to certain processing of your information</li>
                      <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                    </ul>
                    <p className="text-muted">
                      To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>6. Cookies and Tracking Technologies</h2>
                    <p className="text-muted mb-3">
                      We use cookies and similar tracking technologies to enhance your experience on our platform:
                    </p>
                    <ul className="text-muted mb-3">
                      <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how you use our services</li>
                      <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    </ul>
                    <p className="text-muted">
                      You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect platform functionality.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>7. Data Retention</h2>
                    <p className="text-muted mb-3">
                      We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                    </p>
                    <p className="text-muted">
                      When we no longer need your information, we will securely delete or anonymize it. Some information may be retained for legal, regulatory, or business purposes.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>8. Children's Privacy</h2>
                    <p className="text-muted mb-3">
                      Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
                    </p>
                    <p className="text-muted">
                      If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#14432A', fontSize: '1.8rem' }}>9. Changes to This Policy</h2>
                    <p className="text-muted mb-3">
                      We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
                    </p>
                    <ul className="text-muted mb-3">
                      <li>Posting the updated policy on our website</li>
                      <li>Sending you an email notification</li>
                      <li>Providing notice through our services</li>
                    </ul>
                    <p className="text-muted">
                      Your continued use of our services after any changes constitutes acceptance of the updated policy.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-5 pt-4 border-top">
                    <h3 className="fw-bold mb-3" style={{ color: '#14432A' }}>Contact Us</h3>
                    <p className="text-muted mb-3">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
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
