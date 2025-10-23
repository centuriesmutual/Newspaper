'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CommunityModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="modal show d-block" 
      style={{ 
        backgroundColor: 'rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease-in-out',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div 
        className="modal-dialog modal-dialog-centered"
        style={{
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div 
          className="modal-content border-0" 
          style={{ 
            borderRadius: '20px', 
            overflow: 'hidden',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <div className="modal-header border-0 p-4" style={{ background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)' }}>
            <h4 className="modal-title text-white fw-bold">
              {isSignUp ? 'Join Our Community' : 'Welcome Back'}
            </h4>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
            ></button>
          </div>
          
          <div className="modal-body p-4">
            <div 
              className="text-center mb-4"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.4s ease-in-out 0.1s'
              }}
            >
              <div style={{
                background: 'rgba(20, 67, 42, 0.1)',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.3s ease-in-out 0.2s'
              }}>
                <svg width="40" height="40" fill="#14432A" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h-2.5l-1.5-1.5v-1.5h-1.5v1.5L13.5 16H11v6h9zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9l-1.5-1.5v-1.5H6v1.5L4.5 15H3v7h4.5z"/>
                </svg>
              </div>
              <h5 className="fw-bold" style={{ color: '#14432A' }}>
                {isSignUp ? 'Join 10,000+ Members' : 'Sign In to Continue'}
              </h5>
              <p className="text-muted">
                {isSignUp 
                  ? 'Connect with like-minded individuals and unlock exclusive community benefits.' 
                  : 'Access your community dashboard and connect with members.'
                }
              </p>
            </div>

            <form
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.4s ease-in-out 0.2s'
              }}
            >
              {isSignUp && (
                <div className="mb-3">
                  <label className="form-label fw-bold" style={{ color: '#14432A' }}>Full Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Enter your full name"
                    style={{ 
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      border: '2px solid #e9ecef'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#14432A'
                      e.target.style.boxShadow = '0 0 0 0.2rem rgba(20, 67, 42, 0.25)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e9ecef'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
              )}
              
              <div className="mb-3">
                <label className="form-label fw-bold" style={{ color: '#14432A' }}>Email Address</label>
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Enter your email"
                  style={{ 
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    border: '2px solid #e9ecef'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#14432A'
                    e.target.style.boxShadow = '0 0 0 0.2rem rgba(20, 67, 42, 0.25)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e9ecef'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label fw-bold" style={{ color: '#14432A' }}>Password</label>
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Enter your password"
                  style={{ 
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    border: '2px solid #e9ecef'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#14432A'
                    e.target.style.boxShadow = '0 0 0 0.2rem rgba(20, 67, 42, 0.25)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e9ecef'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              {isSignUp && (
                <div className="mb-3">
                  <label className="form-label fw-bold" style={{ color: '#14432A' }}>Interests</label>
                  <select className="form-select form-select-lg" style={{ borderRadius: '10px' }}>
                    <option>Select your interests</option>
                    <option>Real Estate</option>
                    <option>Financial Planning</option>
                    <option>Travel & Lifestyle</option>
                    <option>Community Events</option>
                    <option>All of the above</option>
                  </select>
                </div>
              )}

              <div className="mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="terms" />
                  <label className="form-check-label text-muted" htmlFor="terms">
                    I agree to the <a href="#" style={{ color: '#14432A' }}>Terms of Service</a> and <a href="#" style={{ color: '#14432A' }}>Privacy Policy</a>
                  </label>
                </div>
              </div>

              <div 
                className="d-grid gap-3"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.4s ease-in-out 0.3s'
                }}
              >
                <button 
                  type="button" 
                  className="btn btn-primary btn-lg fw-bold"
                  style={{ 
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 4px 15px rgba(20, 67, 42, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  {isSignUp ? 'Join Community' : 'Sign In'}
                </button>
                
                <div className="text-center">
                  <button 
                    type="button" 
                    className="btn btn-link text-decoration-none"
                    onClick={() => setIsSignUp(!isSignUp)}
                    style={{ 
                      color: '#14432A',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#1a5436'
                      e.target.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#14432A'
                      e.target.style.transform = 'scale(1)'
                    }}
                  >
                    {isSignUp 
                      ? 'Already have an account? Sign In' 
                      : "Don't have an account? Sign Up"
                    }
                  </button>
                </div>
              </div>
            </form>

            <div 
              className="mt-4 pt-4 border-top"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.4s ease-in-out 0.4s'
              }}
            >
              <div className="row g-3 text-center">
                <div className="col-4">
                  <div style={{
                    background: 'rgba(20, 67, 42, 0.1)',
                    borderRadius: '12px',
                    padding: '15px',
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.3s ease-in-out 0.5s'
                  }}>
                    <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>10K+</h6>
                    <small className="text-muted">Members</small>
                  </div>
                </div>
                <div className="col-4">
                  <div style={{
                    background: 'rgba(20, 67, 42, 0.1)',
                    borderRadius: '12px',
                    padding: '15px',
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.3s ease-in-out 0.6s'
                  }}>
                    <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>150+</h6>
                    <small className="text-muted">Events</small>
                  </div>
                </div>
                <div className="col-4">
                  <div style={{
                    background: 'rgba(20, 67, 42, 0.1)',
                    borderRadius: '12px',
                    padding: '15px',
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.3s ease-in-out 0.7s'
                  }}>
                    <h6 className="fw-bold mb-1" style={{ color: '#14432A' }}>98%</h6>
                    <small className="text-muted">Satisfied</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
