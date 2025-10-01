'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SubmitResume() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    resume: null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        resume: null
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="h3 mb-0" style={{ color: '#14432A' }}>
                <i className="bi bi-file-earmark-person me-2"></i>Submit Resume
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
                Ready to Apply?
              </motion.h1>
              <motion.p 
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Don't see a position that matches your skills? We're always looking for talented individuals 
                to join our team. Send us your resume and let us know how you can contribute to our mission.
              </motion.p>
              <motion.div 
                className="d-flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/apply" className="btn btn-primary btn-lg">Apply for Position</Link>
                <Link href="/careers" className="btn btn-outline-primary btn-lg">View Openings</Link>
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
                  <i className="bi bi-person-plus display-1 mb-3"></i>
                  <h3 className="mb-2">Join Our Team</h3>
                  <p className="mb-0">We're always looking for talented individuals to join our growing team.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div 
                className="card border-0 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-body p-4">
                  {submitStatus === 'success' ? (
                    <motion.div 
                      className="text-center py-5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-check text-white" style={{ fontSize: '2rem' }}></i>
                      </div>
                      <h3 className="mb-3" style={{ color: '#14432A' }}>Resume Submitted!</h3>
                      <p className="text-muted mb-4">
                        Thank you for your interest in joining Centuries Mutual. We'll review your resume 
                        and get back to you within 5-7 business days.
                      </p>
                      <div className="d-flex gap-3 justify-content-center">
                        <Link href="/careers" className="btn btn-primary">View Other Positions</Link>
                        <Link href="/" className="btn btn-outline-primary">Return Home</Link>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="text-center mb-4">
                        <h3 className="mb-3" style={{ color: '#14432A' }}>
                          <i className="bi bi-envelope me-2"></i>Get in Touch
                        </h3>
                        <p className="text-muted">Send us your resume and tell us about your interest in joining our team.</p>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label">Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Email *</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Subject</label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder="General inquiry or specific position"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Resume/CV *</label>
                            <input
                              type="file"
                              className="form-control"
                              name="resume"
                              onChange={handleInputChange}
                              accept=".pdf,.doc,.docx"
                              required
                            />
                            <small className="text-muted">PDF, DOC, or DOCX files only</small>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Message *</label>
                            <textarea
                              className="form-control"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows="5"
                              placeholder="Tell us about your interest in joining our team, your skills, and how you can contribute to our mission..."
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex gap-3 justify-content-center mt-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Submitting...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-send me-2"></i>Submit Resume
                              </>
                            )}
                          </button>
                          <Link href="/careers" className="btn btn-outline-secondary btn-lg">
                            Cancel
                          </Link>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
