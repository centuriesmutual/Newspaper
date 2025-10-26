'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call to Auth0 password reset
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Set submitted state to show success message
      setIsSubmitted(true)
      setIsSubmitting(false)
      
      // Then redirect to Auth0 password reset after a delay
      setTimeout(() => {
        window.location.href = `/api/auth/login?prompt=login&screen_hint=reset_password&connection=Username-Password-Authentication&login_hint=${encodeURIComponent(email)}`
      }, 3000)
    } catch (error) {
      console.error('Password reset error:', error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-light py-3 py-md-5 d-flex flex-column">
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            {/* Back to Home Button */}
            <div className="mb-3">
              <Link href="/" className="btn btn-outline-secondary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Back to Home
              </Link>
            </div>
            <div className="card border-0 shadow-sm">
              {/* Card Header with Logo */}
              <div className="card-header bg-white border-0 text-center pt-4 pb-2">
                <div className="mb-3 mb-md-4 d-flex justify-content-center">
                  <Image 
                    src="/cmlogotreesmall-removebg-preview.png"
                    alt="Centuries Mutual"
                    width={120}
                    height={60}
                    style={{ 
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <h4 className="mb-0" style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: '#14432A',
                  fontSize: '1.5rem'
                }}>Reset Password</h4>
              </div>

              {/* Card Body */}
              <div className="card-body px-3 px-md-4 py-3 py-md-4">
                {!isSubmitted ? (
                  <>
                    <p className="text-muted small mb-4 text-center">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="email" className="form-label small text-muted">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          style={{ 
                            borderColor: '#e9ecef',
                            fontSize: '1rem',
                            padding: '0.75rem'
                          }}
                        />
                      </div>

                      <button 
                        type="submit"
                        className="btn btn-primary w-100 py-3 mb-3"
                        style={{ backgroundColor: '#14432A', borderColor: '#14432A', fontSize: '1.1rem' }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          'Send Reset Link'
                        )}
                      </button>
                    </form>

                    <div className="text-center">
                      <p className="text-muted small mb-0">
                        Remember your password? {' '}
                        <Link href="/login" className="text-decoration-none" style={{ color: '#14432A', fontWeight: '500' }}>
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <div className="mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#14432A" className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 2.604 6.3a.75.75 0 0 1 1.792 1.258l3.26 2.3a.75.75 0 0 1 .952 0l4.5-3.6a.75.75 0 0 1-.902 1.154l-4.098 3.28-1.96-1.96-.853-.853-1.96-1.96z"/>
                      </svg>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Check Your Email</h5>
                    <p className="text-muted mb-4">
                      We've sent password reset instructions to <strong>{email}</strong>
                    </p>
                    <p className="text-muted small mb-3">
                      Didn't receive the email? Check your spam folder or try again.
                    </p>
                    <Link href="/login" className="btn btn-outline-primary">
                      Back to Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Security Notice */}
            <div className="text-center mt-3 mt-md-4">
              <p className="text-muted small mb-0">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  className="bi bi-shield-lock me-2" 
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                </svg>
                Secure password reset with 256-bit encryption
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-2 py-md-3 text-center">
        <p className="text-muted small mb-0">
          © 2025 Centuries Mutual. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
