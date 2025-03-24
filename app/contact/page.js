'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
                Contact Us
              </h1>
              <p className="lead mb-0" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                fontSize: '1.3rem'
              }}>
                Get in touch with our team of financial experts
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: '400px' }}>
                <Image
                  src="/deer.jpeg"
                  alt="Contact Us"
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

      {/* Contact Information Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#14432A15',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-geo-alt text-primary" style={{ fontSize: '1.5rem' }}></i>
                  </div>
                  <h3 className="h5 mb-0">Visit Us</h3>
                </div>
                <p className="text-muted mb-0">
                  123 Financial District, Suite 100<br />
                  New York, NY 10004<br />
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#14432A15',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-telephone text-primary" style={{ fontSize: '1.5rem' }}></i>
                  </div>
                  <h3 className="h5 mb-0">Call Us</h3>
                </div>
                <p className="text-muted mb-0">
                  Main Office: (555) 123-4567<br />
                  Toll Free: 1-800-123-4567<br />
                  Fax: (555) 123-4568
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#14432A15',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-envelope text-primary" style={{ fontSize: '1.5rem' }}></i>
                  </div>
                  <h3 className="h5 mb-0">Email Us</h3>
                </div>
                <p className="text-muted mb-0">
                  info@centuriesmutual.com<br />
                  support@centuriesmutual.com<br />
                  careers@centuriesmutual.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-white p-5 rounded-3 shadow-lg">
                <h2 className="display-5 mb-4" style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: '#14432A'
                }}>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <label htmlFor="phone">Your Phone</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          style={{ height: '150px' }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg w-100">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rounded-3 overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2218089997!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Financial%20District%2C%20New%20York%2C%20NY%2010004!5e0!3m2!1sen!2sus!4v1648123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 