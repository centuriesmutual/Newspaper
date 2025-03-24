'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="min-h-screen bg-light py-5 d-flex flex-column">
      <div className="container flex-grow-1 d-flex align-items-center">
        <div className="row justify-content-center w-100">
          <div className="col-md-6 col-lg-5">
            <div className="card border-0 shadow-sm">
              {/* Card Header with Logo */}
              <div className="card-header bg-white border-0 text-center pt-4">
                <div className="mb-4 d-flex justify-content-center">
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
                  color: '#14432A'
                }}>Welcome Back</h4>
              </div>

              {/* Card Body */}
              <div className="card-body px-4 py-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label htmlFor="password" className="form-label">Password</label>
                      <Link href="/forgot-password" className="text-decoration-none small" style={{ color: '#14432A' }}>
                        Forgot Password?
                      </Link>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="remember" />
                      <label className="form-check-label small" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}
                  >
                    Sign In
                  </button>
                </form>

                <p className="text-center mt-4 mb-0 small">
                  Don't have an account? {' '}
                  <Link href="/register" className="text-decoration-none" style={{ color: '#14432A' }}>
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>

            {/* Security Notice */}
            <div className="text-center mt-4">
              <p className="text-muted small">
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
                Secure login with 256-bit encryption
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-3 text-center">
        <p className="text-muted small mb-0">
          © 2025 Centuries Mutual. All rights reserved.
        </p>
      </footer>
    </div>
  )
} 