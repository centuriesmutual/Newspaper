'use client'

import { useState } from 'react'
import Footer from '../../components/Footer'

export default function Dashboard() {
  const [showMessages, setShowMessages] = useState(false)
  const [activeConversation, setActiveConversation] = useState(null)
  const [messageText, setMessageText] = useState('')
  
  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'Thanks for the update!',
      timestamp: '2 min ago',
      unread: 2,
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      lastMessage: 'Can we schedule a call?',
      timestamp: '1 hour ago',
      unread: 1,
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emily Davis',
      lastMessage: 'The documents are ready.',
      timestamp: '3 hours ago',
      unread: 0,
      avatar: 'ED'
    }
  ]

  const messages = activeConversation ? [
    { id: 1, sender: activeConversation.name, text: 'Hey, how can I help you?', timestamp: '2:30 PM' },
    { id: 2, sender: 'You', text: 'I need to update my payment method.', timestamp: '2:32 PM' },
    { id: 3, sender: activeConversation.name, text: 'Sure, I can help with that. Send me the details.', timestamp: '2:33 PM' },
    { id: 4, sender: 'You', text: 'Perfect, I\'ll send them over now.', timestamp: '2:35 PM' },
    { id: 5, sender: activeConversation.name, text: activeConversation.lastMessage, timestamp: '2:36 PM' },
  ] : []

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Add message logic here
      setMessageText('')
    }
  }

  return (
    <main>
      <div className="container-fluid" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                Dashboard
              </h1>
              <p className="lead mb-5" style={{ color: '#495057' }}>
                Manage your account, payments, and communication all in one place.
              </p>
            </div>
          </div>

          {/* Messaging Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-header bg-white border-0 p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold mb-0" style={{ color: '#14432A' }}>
                      Messages
                      {conversations.reduce((sum, c) => sum + c.unread, 0) > 0 && (
                        <span className="badge bg-danger ms-2">
                          {conversations.reduce((sum, c) => sum + c.unread, 0)} new
                        </span>
                      )}
                    </h4>
                    <button 
                      className="btn btn-primary"
                      onClick={() => setShowMessages(!showMessages)}
                    >
                      {showMessages ? 'Hide Messages' : 'View Messages'}
                    </button>
                  </div>
                </div>
                {showMessages && (
                  <div className="card-body p-0">
                    <div className="row g-0" style={{ minHeight: '600px' }}>
                      {/* Conversations List */}
                      <div className="col-md-4 border-end">
                        <div className="p-3 border-bottom">
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search conversations..."
                          />
                        </div>
                        <div style={{ maxHeight: '550px', overflowY: 'auto' }}>
                          {conversations.map((conv) => (
                            <div 
                              key={conv.id}
                              className={`p-3 border-bottom ${activeConversation?.id === conv.id ? 'bg-light' : ''}`}
                              style={{ cursor: 'pointer' }}
                              onClick={() => setActiveConversation(conv)}
                            >
                              <div className="d-flex align-items-center">
                                <div 
                                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                  style={{
                                    width: '50px',
                                    height: '50px',
                                    background: '#14432A',
                                    color: 'white',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold'
                                  }}
                                >
                                  {conv.avatar}
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between align-items-start">
                                    <h6 className="mb-1 fw-bold">{conv.name}</h6>
                                    {conv.unread > 0 && (
                                      <span className="badge bg-danger">{conv.unread}</span>
                                    )}
                                  </div>
                                  <p className="text-muted small mb-0">{conv.lastMessage}</p>
                                  <small className="text-muted">{conv.timestamp}</small>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Message Thread */}
                      <div className="col-md-8 d-flex flex-column">
                        {activeConversation ? (
                          <>
                            <div className="p-3 border-bottom">
                              <h5 className="mb-0 fw-bold">{activeConversation.name}</h5>
                              <small className="text-muted">Online</small>
                            </div>
                            <div style={{ flex: 1, overflowY: 'auto', padding: '20px', background: '#f8f9fa' }}>
                              {messages.map((msg) => (
                                <div key={msg.id} className={`mb-3 d-flex ${msg.sender === 'You' ? 'justify-content-end' : 'justify-content-start'}`}>
                                  <div style={{ maxWidth: '70%' }}>
                                    {msg.sender !== 'You' && <small className="text-muted">{msg.sender}</small>}
                                    <div 
                                      className={`p-3 rounded ${msg.sender === 'You' ? 'bg-primary text-white' : 'bg-white'}`}
                                    >
                                      {msg.text}
                                    </div>
                                    <small className="text-muted">{msg.timestamp}</small>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="p-3 border-top">
                              <div className="input-group">
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  placeholder="Type a message..."
                                  value={messageText}
                                  onChange={(e) => setMessageText(e.target.value)}
                                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                                <button 
                                  className="btn btn-primary"
                                  onClick={handleSendMessage}
                                >
                                  Send
                                </button>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="d-flex align-items-center justify-content-center h-100">
                            <div className="text-center">
                              <svg width="64" height="64" fill="#dee2e6" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                              </svg>
                              <p className="text-muted mt-3">Select a conversation to start messaging</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Other Dashboard Content */}
          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <svg width="24" height="24" fill="#14432A" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Auto-Payments</h5>
                  <p className="text-muted mb-0">12 active</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <svg width="24" height="24" fill="#14432A" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Travel Points</h5>
                  <p className="text-muted mb-0">2,450 points</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <svg width="24" height="24" fill="#14432A" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Monthly Bills</h5>
                  <p className="text-muted mb-0">$2,450 total</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <div style={{
                      background: 'rgba(20, 67, 42, 0.1)',
                      borderRadius: '12px',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto'
                    }}>
                      <svg width="24" height="24" fill="#14432A" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#14432A' }}>Security Score</h5>
                  <p className="text-muted mb-0">98% secure</p>
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