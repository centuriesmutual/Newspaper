'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SignatureCanvas from 'react-signature-canvas'

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: '',
    resume: null,
    portfolio: '',
    availability: '',
    salary: '',
    references: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const signaturePadRef = useRef(null)
  const [signatureData, setSignatureData] = useState(null)

  const positions = [
    'Financial Broker',
    'Marketing Associate', 
    'Full Stack Developer'
  ]

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleClearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear()
      setSignatureData(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Get signature if available
      let signature = null
      if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
        signature = signaturePadRef.current.toDataURL('image/png')
        setSignatureData(signature)
      }

      // Create FormData for submission
      const submitFormData = new FormData()
      submitFormData.append('firstName', formData.firstName)
      submitFormData.append('lastName', formData.lastName)
      submitFormData.append('email', formData.email)
      submitFormData.append('phone', formData.phone)
      submitFormData.append('position', formData.position)
      submitFormData.append('experience', formData.experience)
      submitFormData.append('education', formData.education)
      submitFormData.append('coverLetter', formData.coverLetter)
      submitFormData.append('portfolio', formData.portfolio || '')
      submitFormData.append('availability', formData.availability)
      submitFormData.append('salary', formData.salary || '')
      submitFormData.append('references', formData.references || '')
      
      if (signature) {
        submitFormData.append('signature', signature)
      }
      
      if (formData.resume) {
        submitFormData.append('resume', formData.resume)
      }

      // Submit to API
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: submitFormData
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          education: '',
          coverLetter: '',
          resume: null,
          portfolio: '',
          availability: '',
          salary: '',
          references: ''
        })
        if (signaturePadRef.current) {
          signaturePadRef.current.clear()
        }
        setSignatureData(null)
      } else {
        setSubmitStatus('error')
        alert(result.error || 'Failed to submit application. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      setSubmitStatus('error')
      alert('An error occurred while submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="h3 mb-0" style={{ color: '#14432A' }}>
                <i className="bi bi-person-plus me-2"></i>Job Application
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

      {/* Application Form */}
      <div className="container py-5">
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
                    <h3 className="mb-3" style={{ color: '#14432A' }}>Application Submitted!</h3>
                    <p className="text-muted mb-4">
                      Thank you for your interest in joining Centuries Mutual. We'll review your application 
                      and get back to you within 5-7 business days.
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <Link href="/careers" className="btn btn-primary">View Other Positions</Link>
                      <Link href="/" className="btn btn-outline-primary">Return Home</Link>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div className="mb-5">
                      <h4 className="mb-4" style={{ color: '#14432A' }}>Personal Information</h4>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">First Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Last Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Phone Number *</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Position Information */}
                    <div className="mb-5">
                      <h4 className="mb-4" style={{ color: '#14432A' }}>Position Information</h4>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Position Applied For *</label>
                          <select
                            className="form-select"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select a position</option>
                            {positions.map((position, index) => (
                              <option key={index} value={position}>{position}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Years of Experience *</label>
                          <select
                            className="form-select"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select experience level</option>
                            <option value="0-1">0-1 years</option>
                            <option value="2-3">2-3 years</option>
                            <option value="4-5">4-5 years</option>
                            <option value="6-10">6-10 years</option>
                            <option value="10+">10+ years</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="form-label">Education Background *</label>
                          <textarea
                            className="form-control"
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Please describe your educational background, degrees, certifications, etc."
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Cover Letter */}
                    <div className="mb-5">
                      <h4 className="mb-4" style={{ color: '#14432A' }}>Cover Letter</h4>
                      <div className="mb-3">
                        <label className="form-label">Why are you interested in this position? *</label>
                        <textarea
                          className="form-control"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows="5"
                          placeholder="Tell us why you're interested in this position and how you can contribute to our team..."
                          required
                        />
                      </div>
                    </div>

                    {/* Documents */}
                    <div className="mb-5">
                      <h4 className="mb-4" style={{ color: '#14432A' }}>Documents</h4>
                      <div className="row g-3">
                        <div className="col-md-6">
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
                        <div className="col-md-6">
                          <label className="form-label">Portfolio/Work Samples (Optional)</label>
                          <input
                            type="url"
                            className="form-control"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleInputChange}
                            placeholder="https://yourportfolio.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mb-5">
                      <h4 className="mb-4" style={{ color: '#14432A' }}>Additional Information</h4>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Availability *</label>
                          <select
                            className="form-select"
                            name="availability"
                            value={formData.availability}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select availability</option>
                            <option value="immediate">Immediate</option>
                            <option value="2-weeks">2 weeks notice</option>
                            <option value="1-month">1 month notice</option>
                            <option value="2-months">2+ months notice</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Salary Expectations</label>
                          <input
                            type="text"
                            className="form-control"
                            name="salary"
                            value={formData.salary}
                            onChange={handleInputChange}
                            placeholder="e.g., $50,000 - $70,000"
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Professional References</label>
                          <textarea
                            className="form-control"
                            name="references"
                            value={formData.references}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Name, Title, Company, Phone, Email (Optional)"
                          />
                        </div>
                      </div>
                    </div>

                    {/* E-Signature Section */}
                    <div className="mb-5">
                      <h4 className="mb-4" style={{ color: '#14432A' }}>E-Signature *</h4>
                      <p className="text-muted small mb-3">
                        Please sign below to confirm that all information provided is accurate and complete.
                      </p>
                      <div className="border rounded p-3 mb-3" style={{ backgroundColor: '#fff', minHeight: '200px' }}>
                        <SignatureCanvas
                          ref={signaturePadRef}
                          canvasProps={{
                            width: 600,
                            height: 200,
                            className: 'signature-canvas w-100'
                          }}
                          backgroundColor="#ffffff"
                          penColor="#000000"
                          onEnd={() => {
                            if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
                              setSignatureData(signaturePadRef.current.toDataURL('image/png'))
                            }
                          }}
                        />
                      </div>
                      <div className="d-flex gap-2">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          onClick={handleClearSignature}
                        >
                          Clear Signature
                        </button>
                        {signatureData && (
                          <span className="text-success small d-flex align-items-center">
                            <i className="bi bi-check-circle me-2"></i>Signature captured
                          </span>
                        )}
                      </div>
                      {!signatureData && (
                        <div className="text-danger small mt-2">
                          * Signature is required to submit your application
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="d-flex gap-3 justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting || !signatureData}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>Submit Application
                          </>
                        )}
                      </button>
                      <Link href="/careers" className="btn btn-outline-secondary btn-lg">
                        Cancel
                      </Link>
                    </div>
                    {!signatureData && (
                      <div className="text-center mt-3">
                        <small className="text-muted">Please provide your signature above to enable submission</small>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  )
}
