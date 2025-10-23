'use client'

import { useState } from 'react'
import { UsersIcon, ChatBubbleLeftRightIcon, HeartIcon, StarIcon, CalendarDaysIcon, TrophyIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import CommunityModal from './CommunityModal'

export default function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="community-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 50%, #ced4da 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
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
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="text-dark">
              <h1 className="display-2 fw-bold mb-4" style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#14432A'
              }}>
                Our Community
              </h1>
              <p className="lead mb-5" style={{ 
                fontSize: '1.3rem',
                color: '#495057'
              }}>
                Join a vibrant community of like-minded individuals who share your passion for 
                smart living, financial wellness, and meaningful connections. Together, we build 
                stronger neighborhoods and brighter futures.
              </p>
              
              <div className="row g-4 mb-5">
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
                      <h5 className="mb-1 fw-bold">10,000+ Members</h5>
                      <small className="opacity-75">Growing community</small>
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
                      <h5 className="mb-1 fw-bold">Active Forums</h5>
                      <small className="opacity-75">Daily discussions</small>
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
                      <h5 className="mb-1 fw-bold">Support Network</h5>
                      <small className="opacity-75">Help when you need it</small>
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
                      <TrophyIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Achievement System</h5>
                      <small className="opacity-75">Earn recognition</small>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="d-flex gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
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
                  Join Community
                </button>
                <Link 
                  href="/schedule" 
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
                  View Events
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="position-relative">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '40px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}>
                <h3 className="text-dark mb-4 fw-bold" style={{ color: '#14432A' }}>Community Highlights</h3>
                
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <CalendarDaysIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h6 className="text-dark mb-1 fw-bold" style={{ color: '#14432A' }}>Weekly Meetups</h6>
                      <small className="text-muted">Every Saturday 2PM</small>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <StarIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h6 className="text-dark mb-1 fw-bold" style={{ color: '#14432A' }}>Member Spotlight</h6>
                      <small className="text-muted">Featured this month</small>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <TrophyIcon style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div>
                      <h6 className="text-dark mb-1 fw-bold" style={{ color: '#14432A' }}>Community Challenges</h6>
                      <small className="text-muted">Monthly competitions</small>
                    </div>
                  </div>
                </div>
                
                <div className="row g-3 text-center">
                  <div className="col-4">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '15px'
                    }}>
                      <h4 className="text-dark mb-1 fw-bold" style={{ color: '#14432A' }}>2.5K</h4>
                      <small className="text-muted">Active Members</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '15px'
                    }}>
                      <h4 className="text-dark mb-1 fw-bold" style={{ color: '#14432A' }}>150+</h4>
                      <small className="text-muted">Events This Year</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      padding: '15px'
                    }}>
                      <h4 className="text-dark mb-1 fw-bold" style={{ color: '#14432A' }}>98%</h4>
                      <small className="text-muted">Satisfaction Rate</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CommunityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
