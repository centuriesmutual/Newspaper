'use client'

import { useState } from 'react'
import { UsersIcon, ChatBubbleLeftRightIcon, HeartIcon, StarIcon, CalendarDaysIcon, TrophyIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import CommunityModal from './CommunityModal'
import CreditRatingDisplay from './CryptoWalletVisualization'

export default function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('signup') // 'signup' or 'credit-info'

  return (
    <section className="community-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 50%, #ced4da 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem 0'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2314432A" fill-opacity="0.04"%3E%3Cpath d="M40 40c0-22.091-17.909-40-40-40v40h40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.7
      }} />
      
      <div className="container">
        <div className="row align-items-center" style={{ padding: '1rem 0' }}>
          <div className="col-lg-6">
            <div className="position-relative" style={{ marginTop: '2rem' }}>
              <style jsx>{`
                @media (max-width: 991px) {
                  .crypto-visualization-container {
                    margin-top: 3rem !important;
                  }
                }
              `}</style>
              <div className="crypto-visualization-container" style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}>
                <CreditRatingDisplay />
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="text-dark" style={{ marginTop: '4rem' }}>
              <h1 className="display-2 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A'
              }}>
                Member Credit Rating System
              </h1>
              <p className="lead mb-5" style={{ 
                fontSize: '1.3rem',
                color: '#495057'
              }}>
                Find the perfect room and roommate with our trusted member credit rating system. 
                Verified profiles, secure payments, and reliable reviews help you make informed 
                decisions for your next home.
              </p>
              
              <div className="row g-3 mb-4" style={{ marginBottom: '2rem' }}>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <UsersIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Verified Profiles</h5>
                      <small className="opacity-75">ID & background checked</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <StarIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Credit Ratings</h5>
                      <small className="opacity-75">Reliable scoring system</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <ChatBubbleLeftRightIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Secure Messaging</h5>
                      <small className="opacity-75">Safe communication</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '12px',
                      marginRight: '15px'
                    }}>
                      <HeartIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Roommate Matching</h5>
                      <small className="opacity-75">Compatible preferences</small>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="d-flex gap-3 flex-wrap" style={{ marginTop: '1.5rem' }}>
                <button 
                  onClick={() => {
                    setModalType('signup')
                    setIsModalOpen(true)
                  }}
                  className="btn btn-primary btn-lg px-4 py-3 fw-bold"
                  style={{ 
                    borderRadius: '12px',
                    backgroundColor: '#14432A',
                    borderColor: '#14432A',
                    boxShadow: '0 4px 15px rgba(20, 67, 42, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                >
                  Find Roommates
                </button>
                <button 
                  onClick={() => {
                    setModalType('credit-info')
                    setIsModalOpen(true)
                  }}
                  className="btn btn-outline-primary btn-lg px-4 py-3 fw-bold"
                  style={{ 
                    borderRadius: '12px',
                    borderColor: '#14432A',
                    color: '#14432A',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(20, 67, 42, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                  }}
                >
                  More Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CommunityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        modalType={modalType}
      />
    </section>
  )
}
