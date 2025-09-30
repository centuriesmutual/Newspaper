'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('home')
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState([
    { id: 1, title: 'Policy Review Meeting', date: '2024-02-15', time: '2:00 PM', type: 'meeting' },
    { id: 2, title: 'Premium Payment Due', date: '2024-02-20', time: 'Auto-pay', type: 'payment' },
    { id: 3, title: 'Insurance Consultation', date: '2024-02-25', time: '10:00 AM', type: 'appointment' }
  ])
  const [showEventModal, setShowEventModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [newEvent, setNewEvent] = useState({ title: '', time: '', type: 'meeting' })
  const [mailboxView, setMailboxView] = useState('inbox')

  // Sign out function
  const handleSignOut = () => {
    // Clear any stored authentication data
    localStorage.removeItem('isAuthenticated')
    sessionStorage.removeItem('isAuthenticated')
    
    // Redirect to login page
    router.push('/login')
  }

  // Calendar helper functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    // Ensure we have exactly 35 cells (5 rows x 7 days) for consistent layout
    while (days.length < 35) {
      days.push(null)
    }
    
    return days
  }

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]
  }

  const getEventsForDate = (date) => {
    const dateStr = formatDate(date)
    return events.filter(event => event.date === dateStr)
  }

  const handleDateClick = (date) => {
    setSelectedDate(date)
    setShowEventModal(true)
  }

  const handleAddEvent = () => {
    if (newEvent.title && selectedDate) {
      const event = {
        id: Date.now(),
        title: newEvent.title,
        date: formatDate(selectedDate),
        time: newEvent.time,
        type: newEvent.type
      }
      setEvents([...events, event])
      setNewEvent({ title: '', time: '', type: 'meeting' })
      setShowEventModal(false)
    }
  }

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + direction)
      return newDate
    })
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dashboardTabs = [
    { id: 'home', label: 'Home', icon: 'bi-house' },
    { id: 'mailbox', label: 'Mailbox', icon: 'bi-envelope' },
    { id: 'cloud', label: 'Cloud', icon: 'bi-cloud' },
    { id: 'wallet', label: 'Wallet', icon: 'bi-wallet2' },
    { id: 'settings', label: 'Settings', icon: 'bi-gear' }
  ]

  const policies = [
    { name: 'Health Insurance Premium', amount: '$450.00', due: '2024-02-15', status: 'Active' },
    { name: 'Mortgage Payment', amount: '$1,250.00', due: '2024-02-20', status: 'Active' },
    { name: 'Auto Insurance', amount: '$89.00', due: '2024-02-25', status: 'Active' }
  ]

  const recentActivity = [
    { action: 'Payment Received', amount: '$450.00', date: '2024-01-15', type: 'payment' },
    { action: 'Policy Updated', description: 'Health Insurance Coverage', date: '2024-01-10', type: 'update' },
    { action: 'Claim Submitted', amount: '$1,200.00', date: '2024-01-05', type: 'claim' }
  ]

  return (
    <div className="min-h-screen bg-light">
      {/* Mobile Header */}
      <div className="d-md-none bg-white shadow-sm sticky-top">
        <div className="container-fluid px-3 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Image 
                src="/cmlogotreesmall-removebg-preview.png"
                alt="Centuries Mutual"
                width={32}
                height={16}
                style={{ objectFit: 'contain' }}
              />
              <span className="ms-2 fw-bold fs-5" style={{ color: '#14432A' }}>Dashboard</span>
            </div>
            <button 
              className="btn btn-outline-primary btn-sm"
              onClick={() => setActiveTab(activeTab === 'home' ? 'mailbox' : 'home')}
            >
              <i className="bi bi-grid-3x3-gap"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Desktop Sidebar */}
          <div className="col-md-3 col-lg-2 bg-white shadow-sm min-vh-100 p-0 d-none d-md-block">
            <div className="p-4 border-bottom">
              <div className="d-flex align-items-center">
                <Image 
                  src="/cmlogotreesmall-removebg-preview.png"
                  alt="Centuries Mutual"
                  width={40}
                  height={20}
                  style={{ objectFit: 'contain' }}
                />
                <span className="ms-2 fw-bold" style={{ color: '#14432A' }}>Dashboard</span>
              </div>
            </div>
            
            <nav className="nav flex-column p-3">
              {dashboardTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-link d-flex align-items-center mb-2 ${
                    activeTab === tab.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    backgroundColor: activeTab === tab.id ? '#14432A' : 'transparent',
                    color: activeTab === tab.id ? 'white' : '#14432A',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    textAlign: 'left'
                  }}
                >
                  <i className={`bi ${tab.icon} me-3`}></i>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Bottom Navigation */}
          <div className="d-md-none fixed-bottom bg-white border-top">
            <div className="container-fluid px-0">
              <div className="row g-0">
                {dashboardTabs.map((tab) => (
                  <div key={tab.id} className="col">
                    <button
                      className={`btn w-100 py-3 border-0 ${
                        activeTab === tab.id ? 'text-primary' : 'text-muted'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        backgroundColor: 'transparent',
                        fontSize: '12px'
                      }}
                    >
                      <i className={`bi ${tab.icon} d-block mb-1`} style={{ fontSize: '18px' }}></i>
                      {tab.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9 col-lg-10 p-3 p-md-4" style={{ paddingBottom: '100px' }}>

            {/* Home Tab */}
            {activeTab === 'home' && (
              <div>
                {/* Calendar */}
                <div className="row g-3">
                  <div className="col-12 col-lg-8">
                    <div className="card border-0 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                      <div className="card-header bg-gradient text-white border-0 d-flex justify-content-between align-items-center" 
                           style={{ 
                             background: 'linear-gradient(135deg, #14432A 0%, #2d5a3d 100%)',
                             padding: '1.5rem'
                           }}>
                        <div>
                          <h4 className="mb-1 fw-bold" style={{ color: '#14432A' }}>
                            <span style={{ fontFamily: 'Georgia, serif' }}>{monthNames[currentDate.getMonth()]}</span> {currentDate.getFullYear()}
                          </h4>
                          <small className="opacity-75">Click any date to add events</small>
                        </div>
                        <div className="d-flex gap-2">
                          <button 
                            className="btn btn-light btn-sm rounded-pill px-3"
                            onClick={() => navigateMonth(-1)}
                            style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                          >
                            <i className="bi bi-chevron-left"></i>
                          </button>
                          <button 
                            className="btn btn-light btn-sm rounded-pill px-3"
                            onClick={() => navigateMonth(1)}
                            style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                          >
                            <i className="bi bi-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        {/* Calendar Grid */}
                        <div className="calendar-grid">
                          {/* Day headers */}
                          <div className="row g-0">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                              <div key={day} className="col calendar-day-header">
                                <div className="p-3 text-center fw-bold" style={{ 
                                  color: '#14432A',
                                  backgroundColor: '#f8f9fa',
                                  borderBottom: '2px solid #e9ecef'
                                }}>
                                  {day}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Calendar days - 5 rows of 7 days each */}
                          {Array.from({ length: 5 }, (_, rowIndex) => (
                            <div key={rowIndex} className="row g-0">
                              {getDaysInMonth(currentDate).slice(rowIndex * 7, (rowIndex + 1) * 7).map((day, dayIndex) => (
                                <div key={dayIndex} className="col calendar-day">
                                  {day ? (
                                    <div 
                                      className={`calendar-day-cell ${
                                        day.toDateString() === new Date().toDateString() ? 'today' : ''
                                      }`}
                                      onClick={() => handleDateClick(day)}
                                      style={{ cursor: 'pointer' }}
                                    >
                                      <div className="p-3 h-100 d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                          <span className={`fw-bold fs-5 ${
                                            day.toDateString() === new Date().toDateString() ? 'text-white' : 'text-dark'
                                          }`}>
                                            {day.getDate()}
                                          </span>
                                          {getEventsForDate(day).length > 0 && (
                                            <span className="badge rounded-pill" style={{ 
                                              fontSize: '0.7rem',
                                              backgroundColor: '#14432A',
                                              color: 'white'
                                            }}>
                                              {getEventsForDate(day).length}
                                            </span>
                                          )}
                                        </div>
                                        <div className="flex-grow-1 d-flex flex-column justify-content-end">
                                          {getEventsForDate(day).slice(0, 3).map((event, eventIndex) => (
                                            <div key={eventIndex} className="event-indicator mb-1" style={{
                                              backgroundColor: event.type === 'meeting' ? '#007bff' : 
                                                             event.type === 'payment' ? '#28a745' : '#ffc107',
                                              height: '6px',
                                              borderRadius: '3px',
                                              width: '100%',
                                              opacity: 0.8
                                            }}></div>
                                          ))}
                                          {getEventsForDate(day).length > 3 && (
                                            <div className="text-muted small">
                                              +{getEventsForDate(day).length - 3} more
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="calendar-day-cell" style={{ backgroundColor: '#f8f9fa' }}></div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-12 col-lg-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
                        <h5 className="mb-0" style={{ color: '#14432A' }}>Upcoming Events</h5>
                        <button 
                          className="btn btn-primary btn-sm" 
                          style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}
                          onClick={() => setShowEventModal(true)}
                        >
                          <i className="bi bi-plus me-1"></i>Add Event
                        </button>
                      </div>
                      <div className="card-body">
                        {events
                          .filter(event => new Date(event.date) >= new Date())
                          .sort((a, b) => new Date(a.date) - new Date(b.date))
                          .slice(0, 5)
                          .map((event, index) => (
                            <div key={index} className="d-flex align-items-center py-2 border-bottom">
                              <div className="flex-shrink-0">
                                <div className={`rounded-circle d-flex align-items-center justify-content-center ${
                                  event.type === 'meeting' ? 'bg-primary' : 
                                  event.type === 'payment' ? 'bg-success' : 'bg-warning'
                                }`} style={{ width: '32px', height: '32px' }}>
                                  <i className={`bi ${
                                    event.type === 'meeting' ? 'bi-calendar-check' :
                                    event.type === 'payment' ? 'bi-currency-dollar' : 'bi-clock'
                                  } text-white`} style={{ fontSize: '0.8rem' }}></i>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1 small">{event.title}</h6>
                                <p className="text-muted mb-0 small">
                                  {new Date(event.date).toLocaleDateString()} • {event.time}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            )}

            {/* Mailbox Tab - Gmail Style */}
            {activeTab === 'mailbox' && (
              <div>
                {/* Gmail-style Header with Toggle */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div className="btn-group me-3" role="group">
                      <button 
                        type="button" 
                        className={`btn btn-sm ${mailboxView === 'inbox' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setMailboxView('inbox')}
                        style={mailboxView === 'inbox' ? { backgroundColor: '#14432A', borderColor: '#14432A' } : {}}
                      >
                        <i className="bi bi-inbox me-1"></i>Inbox
                        <span className="badge bg-white text-dark ms-2">3</span>
                      </button>
                      <button 
                        type="button" 
                        className={`btn btn-sm ${mailboxView === 'rewards' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setMailboxView('rewards')}
                        style={mailboxView === 'rewards' ? { backgroundColor: '#14432A', borderColor: '#14432A' } : {}}
                      >
                        <i className="bi bi-gift me-1"></i>Rewards
                        <span className="badge bg-white text-dark ms-2">2</span>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-arrow-clockwise"></i>
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-funnel"></i>
                    </button>
                    <button className="btn btn-primary btn-sm" style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}>
                      <i className="bi bi-pencil-square me-1"></i>Compose
                    </button>
                  </div>
                </div>

                {/* Gmail-style Content */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-0">
                    {/* Content Header */}
                    <div className="d-flex align-items-center px-3 py-2 border-bottom" style={{ backgroundColor: '#f8f9fa' }}>
                      <div className="form-check me-3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div className="flex-grow-1 d-flex align-items-center">
                        <div className="me-3">
                          <i className="bi bi-star text-warning"></i>
                        </div>
                        <div className="me-3" style={{ minWidth: '200px' }}>
                          <strong>From</strong>
                        </div>
                        <div className="flex-grow-1">
                          <strong>Subject</strong>
                        </div>
                        <div className="text-end" style={{ minWidth: '100px' }}>
                          <strong>Date</strong>
                        </div>
                      </div>
                    </div>

                    {/* Content Items */}
                    <div className="email-list">
                      {mailboxView === 'inbox' ? (
                        <>
                          {/* Unread Email */}
                          <div className="d-flex align-items-center px-3 py-3 border-bottom email-item" style={{ backgroundColor: '#f0f8ff', cursor: 'pointer' }}>
                            <div className="form-check me-3">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="flex-grow-1 d-flex align-items-center">
                              <div className="me-3">
                                <i className="bi bi-star text-muted"></i>
                              </div>
                              <div className="me-3 fw-bold" style={{ minWidth: '200px' }}>
                                <div className="d-flex align-items-center">
                                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                                    <span className="text-white fw-bold">CM</span>
                                  </div>
                                  <div>
                                    <div className="fw-bold">Centuries Mutual</div>
                                    <small className="text-muted">noreply@centuriesmutual.com</small>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <div className="fw-bold">Policy Update Notification</div>
                                <div className="text-muted small">Your health insurance policy has been updated with new coverage details...</div>
                              </div>
                              <div className="text-end" style={{ minWidth: '100px' }}>
                                <div className="fw-bold">2h</div>
                                <div className="badge bg-primary small">Unread</div>
                              </div>
                            </div>
                          </div>

                          {/* Read Email */}
                          <div className="d-flex align-items-center px-3 py-3 border-bottom email-item" style={{ cursor: 'pointer' }}>
                            <div className="form-check me-3">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="flex-grow-1 d-flex align-items-center">
                              <div className="me-3">
                                <i className="bi bi-star text-muted"></i>
                              </div>
                              <div className="me-3" style={{ minWidth: '200px' }}>
                                <div className="d-flex align-items-center">
                                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                                    <i className="bi bi-receipt text-white"></i>
                                  </div>
                                  <div>
                                    <div className="fw-bold">Payment System</div>
                                    <small className="text-muted">payments@centuriesmutual.com</small>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <div>Payment Receipt - Monthly Premium</div>
                                <div className="text-muted small">Your payment of $450.00 has been processed successfully...</div>
                              </div>
                              <div className="text-end" style={{ minWidth: '100px' }}>
                                <div>1d</div>
                              </div>
                            </div>
                          </div>

                          {/* Important Email */}
                          <div className="d-flex align-items-center px-3 py-3 border-bottom email-item" style={{ cursor: 'pointer' }}>
                            <div className="form-check me-3">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="flex-grow-1 d-flex align-items-center">
                              <div className="me-3">
                                <i className="bi bi-star-fill text-warning"></i>
                              </div>
                              <div className="me-3" style={{ minWidth: '200px' }}>
                                <div className="d-flex align-items-center">
                                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                                    <i className="bi bi-calendar-event text-white"></i>
                                  </div>
                                  <div>
                                    <div className="fw-bold">Appointment System</div>
                                    <small className="text-muted">appointments@centuriesmutual.com</small>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <div className="fw-bold">Appointment Reminder</div>
                                <div className="text-muted small">Your annual policy review is scheduled for next week...</div>
                              </div>
                              <div className="text-end" style={{ minWidth: '100px' }}>
                                <div>3d</div>
                                <div className="badge bg-warning small">Important</div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Rewards Email 1 */}
                          <div className="d-flex align-items-center px-3 py-3 border-bottom email-item" style={{ backgroundColor: '#fff8e1', cursor: 'pointer' }}>
                            <div className="form-check me-3">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="flex-grow-1 d-flex align-items-center">
                              <div className="me-3">
                                <i className="bi bi-star-fill text-warning"></i>
                              </div>
                              <div className="me-3 fw-bold" style={{ minWidth: '200px' }}>
                                <div className="d-flex align-items-center">
                                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                                    <i className="bi bi-gift text-white"></i>
                                  </div>
                                  <div>
                                    <div className="fw-bold">Rewards Program</div>
                                    <small className="text-muted">rewards@centuriesmutual.com</small>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <div className="fw-bold">🎉 You've Earned 500 Points!</div>
                                <div className="text-muted small">Complete your health assessment to earn bonus rewards...</div>
                              </div>
                              <div className="text-end" style={{ minWidth: '100px' }}>
                                <div className="fw-bold">1h</div>
                                <div className="badge bg-warning small">New Reward</div>
                              </div>
                            </div>
                          </div>

                          {/* Rewards Email 2 */}
                          <div className="d-flex align-items-center px-3 py-3 border-bottom email-item" style={{ cursor: 'pointer' }}>
                            <div className="form-check me-3">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="flex-grow-1 d-flex align-items-center">
                              <div className="me-3">
                                <i className="bi bi-star text-muted"></i>
                              </div>
                              <div className="me-3" style={{ minWidth: '200px' }}>
                                <div className="d-flex align-items-center">
                                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                                    <i className="bi bi-trophy text-white"></i>
                                  </div>
                                  <div>
                                    <div className="fw-bold">Loyalty Program</div>
                                    <small className="text-muted">loyalty@centuriesmutual.com</small>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <div>Monthly Wellness Challenge Complete</div>
                                <div className="text-muted small">Congratulations! You've completed this month's wellness challenge...</div>
                              </div>
                              <div className="text-end" style={{ minWidth: '100px' }}>
                                <div>2d</div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 style={{ color: '#14432A' }}>Settings & Overview</h4>
                  <button className="btn btn-primary btn-sm" style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}>
                    <i className="bi bi-save me-2"></i>Save Changes
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="row mb-4 g-3">
                  <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-3">
                        <i className="bi bi-shield-check text-success" style={{ fontSize: '2rem' }}></i>
                        <h6 className="card-title mt-2 mb-1">Active Policies</h6>
                        <h4 className="text-success mb-0">3</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-3">
                        <i className="bi bi-currency-dollar text-primary" style={{ fontSize: '2rem' }}></i>
                        <h6 className="card-title mt-2 mb-1">Monthly Premium</h6>
                        <h4 className="text-primary mb-0">$664</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-3">
                        <i className="bi bi-file-text text-warning" style={{ fontSize: '2rem' }}></i>
                        <h6 className="card-title mt-2 mb-1">Pending Claims</h6>
                        <h4 className="text-warning mb-0">1</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-3">
                        <i className="bi bi-calendar-check text-info" style={{ fontSize: '2rem' }}></i>
                        <h6 className="card-title mt-2 mb-1">Next Payment</h6>
                        <h6 className="text-info mb-0">Feb 15</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-lg-8">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h6 className="mb-3" style={{ color: '#14432A' }}>Account Settings</h6>
                        <div className="list-group list-group-flush">
                          <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                            <div className="d-flex align-items-center">
                              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                <i className="bi bi-person text-white"></i>
                              </div>
                              <div>
                                <h6 className="mb-1">Personal Information</h6>
                                <p className="text-muted small mb-0">Update your contact details and preferences</p>
                              </div>
                            </div>
                            <button className="btn btn-outline-primary btn-sm">Edit</button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                            <div className="d-flex align-items-center">
                              <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                <i className="bi bi-shield-lock text-white"></i>
                              </div>
                              <div>
                                <h6 className="mb-1">Security & Privacy</h6>
                                <p className="text-muted small mb-0">Manage password and security settings</p>
                              </div>
                            </div>
                            <button className="btn btn-outline-primary btn-sm">Edit</button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                            <div className="d-flex align-items-center">
                              <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                <i className="bi bi-bell text-white"></i>
                              </div>
                              <div>
                                <h6 className="mb-1">Notifications</h6>
                                <p className="text-muted small mb-0">Configure email and SMS preferences</p>
                              </div>
                            </div>
                            <button className="btn btn-outline-primary btn-sm">Edit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h6 className="mb-3" style={{ color: '#14432A' }}>Quick Actions</h6>
                        <div className="d-grid gap-2">
                          <Link href="/documents" className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-folder me-2"></i>View Documents
                          </Link>
                          <Link href="/schedule" className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-calendar me-2"></i>Schedule Meeting
                          </Link>
                          <Link href="/contact" className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-telephone me-2"></i>Contact Support
                          </Link>
                          <button className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-download me-2"></i>Export Data
                          </button>
                          <button className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-question-circle me-2"></i>Help & Support
                          </button>
                          <button className="btn btn-outline-danger btn-sm" onClick={handleSignOut}>
                            <i className="bi bi-box-arrow-right me-2"></i>Sign Out
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cloud Tab - YouTube Style Algorithm Builder */}
            {activeTab === 'cloud' && (
              <div>
                {/* Video Player Interface */}
                <div className="position-relative" style={{ backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden' }}>
                  {/* Video Player */}
                  <div className="position-relative" style={{ height: '400px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                    {/* Play Button Overlay */}
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <button className="btn btn-light btn-lg rounded-circle" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-play-fill fs-2 text-dark"></i>
                      </button>
                    </div>
                    
                    {/* Video Controls */}
                    <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                      <div className="d-flex align-items-center text-white">
                        <button className="btn btn-link text-white me-2">
                          <i className="bi bi-play-fill fs-4"></i>
                        </button>
                        <div className="flex-grow-1 me-3">
                          <div className="progress" style={{ height: '4px' }}>
                            <div className="progress-bar" style={{ width: '35%' }}></div>
                          </div>
                        </div>
                        <span className="me-3">2:45 / 7:32</span>
                        <button className="btn btn-link text-white me-2">
                          <i className="bi bi-volume-up fs-5"></i>
                        </button>
                        <button className="btn btn-link text-white me-2">
                          <i className="bi bi-arrows-fullscreen fs-5"></i>
                        </button>
                        <button className="btn btn-link text-white">
                          <i className="bi bi-gear fs-5"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4 bg-white">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="mb-2" style={{ color: '#14432A' }}>Insurance Risk Assessment Algorithm</h5>
                        <div className="d-flex align-items-center text-muted mb-2">
                          <span className="me-3">2.3K views</span>
                          <span className="me-3">2 hours ago</span>
                          <span className="badge bg-success">Active</span>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                          <i className="bi bi-heart me-1"></i>Like
                        </button>
                        <button className="btn btn-outline-secondary btn-sm">
                          <i className="bi bi-share me-1"></i>Share
                        </button>
                        <button className="btn btn-outline-secondary btn-sm">
                          <i className="bi bi-bookmark me-1"></i>Save
                        </button>
                      </div>
                    </div>

                    {/* Algorithm Description */}
                    <div className="mb-3">
                      <p className="text-muted mb-2">
                        This algorithm analyzes customer data to determine insurance risk levels and calculate appropriate premiums. 
                        It uses machine learning to process historical data and predict future risk patterns.
                      </p>
                      <div className="d-flex gap-3">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-cpu text-primary me-2"></i>
                          <small className="text-muted">AI Engine</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-graph-up text-success me-2"></i>
                          <small className="text-muted">98.5% Accuracy</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-clock text-warning me-2"></i>
                          <small className="text-muted">45ms Response</small>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="row g-3">
                      <div className="col-6 col-md-3">
                        <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                          <h6 className="text-primary mb-1">98.5%</h6>
                          <small className="text-muted">Accuracy</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                          <h6 className="text-success mb-1">2.3K</h6>
                          <small className="text-muted">Total Runs</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                          <h6 className="text-warning mb-1">45ms</h6>
                          <small className="text-muted">Avg Response</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                          <h6 className="text-info mb-1">+12%</h6>
                          <small className="text-muted">This Week</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Videos */}
                <div className="mt-4">
                  <h6 className="mb-3" style={{ color: '#14432A' }}>
                    <i className="bi bi-collection-play me-2"></i>Related Algorithms
                  </h6>
                  <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="card border-0 shadow-sm" style={{ borderRadius: '8px' }}>
                        <div className="position-relative" style={{ 
                          height: '120px',
                          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                          borderRadius: '8px 8px 0 0'
                        }}>
                          <div className="position-absolute top-0 end-0 m-2">
                            <span className="badge bg-warning">Testing</span>
                          </div>
                          <div className="position-absolute bottom-0 start-0 m-2">
                            <button className="btn btn-light btn-sm rounded-circle">
                              <i className="bi bi-play-fill text-dark"></i>
                            </button>
                          </div>
                        </div>
                        <div className="card-body p-3">
                          <h6 className="card-title mb-1">Claims Processing AI</h6>
                          <small className="text-muted">1.8K runs • 94.2% accuracy</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="card border-0 shadow-sm" style={{ borderRadius: '8px' }}>
                        <div className="position-relative" style={{ 
                          height: '120px',
                          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                          borderRadius: '8px 8px 0 0'
                        }}>
                          <div className="position-absolute top-0 end-0 m-2">
                            <span className="badge bg-info">Optimizing</span>
                          </div>
                          <div className="position-absolute bottom-0 start-0 m-2">
                            <button className="btn btn-light btn-sm rounded-circle">
                              <i className="bi bi-play-fill text-dark"></i>
                            </button>
                          </div>
                        </div>
                        <div className="card-body p-3">
                          <h6 className="card-title mb-1">Customer Segmentation</h6>
                          <small className="text-muted">3.1K runs • 87.3% accuracy</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="card border-0 shadow-sm" style={{ borderRadius: '8px' }}>
                        <div className="position-relative" style={{ 
                          height: '120px',
                          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                          borderRadius: '8px 8px 0 0'
                        }}>
                          <div className="position-absolute top-0 end-0 m-2">
                            <span className="badge bg-success">Active</span>
                          </div>
                          <div className="position-absolute bottom-0 start-0 m-2">
                            <button className="btn btn-light btn-sm rounded-circle">
                              <i className="bi bi-play-fill text-dark"></i>
                            </button>
                          </div>
                        </div>
                        <div className="card-body p-3">
                          <h6 className="card-title mb-1">Fraud Detection</h6>
                          <small className="text-muted">4.2K runs • 96.8% accuracy</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Wallet Tab - Coinbase Style */}
            {activeTab === 'wallet' && (
              <div>
                {/* Coinbase-style Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <h4 className="mb-0 me-3" style={{ color: '#14432A' }}>
                      <i className="bi bi-wallet2 me-2"></i>Wallet
                    </h4>
                    <span className="badge bg-success">Connected</span>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-qr-code"></i>
                    </button>
                    <button className="btn btn-primary btn-sm" style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}>
                      <i className="bi bi-plus me-1"></i>Add Funds
                    </button>
                  </div>
                </div>

                {/* Coinbase-style Portfolio Overview */}
                <div className="row g-3 mb-4">
                  <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-sm" style={{ 
                      background: 'linear-gradient(135deg, #14432A 0%, #2d5a3d 100%)',
                      color: 'white',
                      borderRadius: '15px'
                    }}>
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div>
                            <h6 className="opacity-75 mb-1">Total Balance</h6>
                            <h3 className="fw-bold mb-0">$2,847.50</h3>
                            <small className="opacity-75">+$127.30 (4.7%) today</small>
                          </div>
                          <div className="text-end">
                            <i className="bi bi-graph-up text-success" style={{ fontSize: '2rem' }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                      <div className="card-body p-4">
                        <div className="d-grid gap-2">
                          <Link href="/withdraw" className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-arrow-up-circle me-2"></i>Withdraw
                          </Link>
                          <Link href="/transactions" className="btn btn-outline-secondary btn-sm">
                            <i className="bi bi-clock-history me-2"></i>Transaction History
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            )}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {showEventModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: '#14432A' }}>
                  Add Event - {selectedDate?.toLocaleDateString()}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowEventModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Event Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    placeholder="Enter event title"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Time</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                    placeholder="e.g., 2:00 PM, Auto-pay, etc."
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Event Type</label>
                  <select
                    className="form-select"
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                  >
                    <option value="meeting">Meeting</option>
                    <option value="payment">Payment</option>
                    <option value="appointment">Appointment</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowEventModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}
                  onClick={handleAddEvent}
                >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .calendar-grid {
          border: none;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .calendar-day-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-right: 1px solid #dee2e6;
          border-bottom: 2px solid #14432A;
        }
        
        .calendar-day {
          min-height: 100px;
          border-right: 1px solid #e9ecef;
          border-bottom: 1px solid #e9ecef;
          transition: all 0.3s ease;
        }
        
        .calendar-day:last-child {
          border-right: none;
        }
        
        .calendar-day-cell {
          height: 100%;
          min-height: 100px;
          transition: all 0.3s ease;
          position: relative;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }
        
        .calendar-day-cell:hover {
          background: linear-gradient(135deg, #14432A 0%, #2d5a3d 100%);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(20, 67, 42, 0.3);
        }
        
        .calendar-day-cell.today {
          background: linear-gradient(135deg, #14432A 0%, #2d5a3d 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(20, 67, 42, 0.4);
        }
        
        .calendar-day-cell.today:hover {
          background: linear-gradient(135deg, #2d5a3d 0%, #14432A 100%);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(20, 67, 42, 0.5);
        }
        
        .event-indicator {
          transition: all 0.3s ease;
        }
        
        .calendar-day-cell:hover .event-indicator {
          opacity: 1;
          transform: scale(1.05);
        }
        
        .calendar-day-cell:hover .badge {
          background-color: white !important;
          color: #14432A !important;
        }
        
        .calendar-day-cell.today .badge {
          background-color: rgba(255,255,255,0.2) !important;
          color: white !important;
        }
        
        @media (max-width: 768px) {
          .calendar-day {
            min-height: 80px;
          }
          
          .calendar-day-cell {
            min-height: 80px;
          }
          
          .calendar-day-cell:hover {
            transform: none;
          }
        }
        
        @media (max-width: 576px) {
          .calendar-day {
            min-height: 70px;
          }
          
          .calendar-day-cell {
            min-height: 70px;
          }
        }
      `}</style>
    </div>
  )
}
