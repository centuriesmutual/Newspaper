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
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Contact Our Support Team
              </h1>
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
                    objectFit: 'contain',
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
                  8080 N Central Expressway<br />
                  Dallas, TX<br />
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
                  <strong>Main Office:</strong> 888-324-6642<br />
                  <strong>Hours:</strong> Mon-Fri 8AM-6PM CST
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
                  <strong>Support:</strong> support@centuriesmutual.com<br />
                  <strong>Response Time:</strong> Within 24 hours<br />
                  <strong>Priority Support:</strong> Available for members
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
    </div>
  )
} 