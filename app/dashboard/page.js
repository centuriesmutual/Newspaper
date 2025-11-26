'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { 
  MagnifyingGlassIcon,
  UserGroupIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  MapPinIcon,
  FunnelIcon,
  HeartIcon,
  XMarkIcon,
  CheckCircleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('browse') // 'browse', 'matches', 'messages', 'profile'
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    maxRent: '',
    location: '',
    ageRange: '',
    lifestyle: '',
    trustScore: ''
  })
  const [selectedProfile, setSelectedProfile] = useState(null)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  // Sample roommate profiles
  const roommateProfiles = [
    {
      id: 1,
      name: 'Alex Martinez',
      age: 28,
      location: 'Downtown Seattle',
      rentBudget: '$1,200 - $1,500',
      trustScore: 285,
      rating: 4.9,
      bio: 'Software engineer working remotely. Love hiking, cooking, and keeping a clean space. Looking for a respectful roommate who values communication.',
      lifestyle: ['Non-smoker', 'Pet-friendly', 'Quiet evenings'],
      interests: ['Hiking', 'Cooking', 'Tech', 'Reading'],
      verified: true,
      image: null,
      availability: 'Available Now'
    },
    {
      id: 2,
      name: 'Jordan Kim',
      age: 25,
      location: 'Capitol Hill',
      rentBudget: '$1,000 - $1,300',
      trustScore: 275,
      rating: 4.8,
      bio: 'Grad student at UW. Prefer quiet study environment but love weekend adventures. Very organized and respectful of shared spaces.',
      lifestyle: ['Non-smoker', 'No pets', 'Quiet hours'],
      interests: ['Studying', 'Coffee', 'Yoga', 'Travel'],
      verified: true,
      image: null,
      availability: 'Available in 2 weeks'
    },
    {
      id: 3,
      name: 'Sam Taylor',
      age: 30,
      location: 'Fremont',
      rentBudget: '$1,400 - $1,700',
      trustScore: 290,
      rating: 5.0,
      bio: 'Marketing professional with flexible schedule. Enjoy socializing but also value personal space. Looking for someone compatible with similar lifestyle.',
      lifestyle: ['Non-smoker', 'Pet-friendly', 'Social'],
      interests: ['Networking', 'Fitness', 'Music', 'Food'],
      verified: true,
      image: null,
      availability: 'Available Now'
    },
    {
      id: 4,
      name: 'Morgan Chen',
      age: 27,
      location: 'Ballard',
      rentBudget: '$1,100 - $1,400',
      trustScore: 268,
      rating: 4.7,
      bio: 'Nurse working night shifts. Need a quiet environment during the day. Very clean and organized, looking for someone respectful of my schedule.',
      lifestyle: ['Non-smoker', 'No pets', 'Quiet daytime'],
      interests: ['Healthcare', 'Reading', 'Gardening', 'Meditation'],
      verified: true,
      image: null,
      availability: 'Available in 1 month'
    },
    {
      id: 5,
      name: 'Casey Williams',
      age: 26,
      location: 'Queen Anne',
      rentBudget: '$1,300 - $1,600',
      trustScore: 280,
      rating: 4.9,
      bio: 'Designer working from home. Creative space is important. Love hosting small gatherings and cooking together. Looking for a friendly, compatible roommate.',
      lifestyle: ['Non-smoker', 'Pet-friendly', 'Social'],
      interests: ['Design', 'Art', 'Cooking', 'Entertaining'],
      verified: true,
      image: null,
      availability: 'Available Now'
    },
    {
      id: 6,
      name: 'Riley Johnson',
      age: 29,
      location: 'Green Lake',
      rentBudget: '$1,200 - $1,500',
      trustScore: 272,
      rating: 4.8,
      bio: 'Teacher with regular schedule. Prefer organized living space and good communication. Enjoy outdoor activities and weekend brunches.',
      lifestyle: ['Non-smoker', 'Pet-friendly', 'Organized'],
      interests: ['Education', 'Outdoors', 'Brunch', 'Books'],
      verified: true,
      image: null,
      availability: 'Available in 3 weeks'
    }
  ]

  const matches = roommateProfiles.slice(0, 3)
  const messages = [
    { id: 1, name: 'Alex Martinez', lastMessage: 'Hey! Interested in connecting?', timestamp: '2 hours ago', unread: 1 },
    { id: 2, name: 'Sam Taylor', lastMessage: 'Thanks for the message!', timestamp: '1 day ago', unread: 0 },
    { id: 3, name: 'Casey Williams', lastMessage: 'Would love to chat more', timestamp: '2 days ago', unread: 0 }
  ]

  const filteredProfiles = roommateProfiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.bio.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesRent = !filters.maxRent || parseInt(profile.rentBudget.split('-')[1].replace(/[^0-9]/g, '')) <= parseInt(filters.maxRent)
    const matchesLocation = !filters.location || profile.location.toLowerCase().includes(filters.location.toLowerCase())
    const matchesTrustScore = !filters.trustScore || profile.trustScore >= parseInt(filters.trustScore)

    return matchesSearch && matchesRent && matchesLocation && matchesTrustScore
  })

  if (!user) {
    return null // Will redirect
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        {/* Header */}
        <div style={{ 
          background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
          color: 'white',
          padding: '2rem 0'
        }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1 className="display-5 fw-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Find Your Perfect Roommate
                </h1>
                <p className="lead mb-0" style={{ opacity: 0.95 }}>
                  Connect with verified roommates based on compatibility and trust scores
                </p>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'inline-block'
                }}>
                  <div className="small mb-1" style={{ opacity: 0.9 }}>Your Trust Score</div>
                  <div className="h3 mb-0 fw-bold">275</div>
                  <div className="small" style={{ opacity: 0.9 }}>Excellent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ background: 'white', borderBottom: '2px solid #e9ecef' }}>
          <div className="container">
            <div className="d-flex gap-3 overflow-x-auto" style={{ padding: '1rem 0' }}>
              <button
                onClick={() => setActiveTab('browse')}
                className={`btn ${activeTab === 'browse' ? 'btn-primary' : 'btn-outline-primary'} border-0`}
                style={{ 
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                  backgroundColor: activeTab === 'browse' ? '#14432A' : 'transparent',
                  color: activeTab === 'browse' ? 'white' : '#14432A'
                }}
              >
                <UserGroupIcon style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }} />
                Browse Roommates
              </button>
              <button
                onClick={() => setActiveTab('matches')}
                className={`btn ${activeTab === 'matches' ? 'btn-primary' : 'btn-outline-primary'} border-0`}
                style={{ 
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                  backgroundColor: activeTab === 'matches' ? '#14432A' : 'transparent',
                  color: activeTab === 'matches' ? 'white' : '#14432A'
                }}
              >
                <HeartIcon style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }} />
                Matches ({matches.length})
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`btn ${activeTab === 'messages' ? 'btn-primary' : 'btn-outline-primary'} border-0`}
                style={{ 
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                  backgroundColor: activeTab === 'messages' ? '#14432A' : 'transparent',
                  color: activeTab === 'messages' ? 'white' : '#14432A'
                }}
              >
                <ChatBubbleLeftRightIcon style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }} />
                Messages {messages.filter(m => m.unread > 0).length > 0 && `(${messages.filter(m => m.unread > 0).length})`}
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-outline-primary'} border-0`}
                style={{ 
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                  backgroundColor: activeTab === 'profile' ? '#14432A' : 'transparent',
                  color: activeTab === 'profile' ? 'white' : '#14432A'
                }}
              >
                <UserGroupIcon style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }} />
                My Profile
              </button>
            </div>
          </div>
        </div>

        <div className="container py-4">
          {/* Browse Roommates Tab */}
          {activeTab === 'browse' && (
            <div className="row">
              {/* Filters Sidebar */}
              <div className="col-lg-3 mb-4 mb-lg-0">
                <div className="card border-0 shadow-sm" style={{ borderRadius: '16px', position: 'sticky', top: '20px' }}>
                  <div className="card-header bg-white border-0 p-4">
                    <h5 className="fw-bold mb-0" style={{ color: '#14432A' }}>
                      <FunnelIcon style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }} />
                      Filters
                    </h5>
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Max Rent Budget</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="$1,500"
                        value={filters.maxRent}
                        onChange={(e) => setFilters({...filters, maxRent: e.target.value})}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Seattle, WA"
                        value={filters.location}
                        onChange={(e) => setFilters({...filters, location: e.target.value})}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Min Trust Score</label>
                      <select
                        className="form-select"
                        value={filters.trustScore}
                        onChange={(e) => setFilters({...filters, trustScore: e.target.value})}
                      >
                        <option value="">Any</option>
                        <option value="250">250+ (Excellent)</option>
                        <option value="200">200+ (Good)</option>
                        <option value="150">150+ (Fair)</option>
                      </select>
                    </div>
                    <button
                      className="btn btn-outline-secondary w-100"
                      onClick={() => setFilters({ maxRent: '', location: '', ageRange: '', lifestyle: '', trustScore: '' })}
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Search and Results */}
              <div className="col-lg-9">
                {/* Search Bar */}
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-3">
                    <div className="input-group">
                      <span className="input-group-text bg-white border-0">
                        <MagnifyingGlassIcon style={{ width: '20px', height: '20px', color: '#6c757d' }} />
                      </span>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Search by name, location, or interests..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ fontSize: '1rem' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mb-3">
                  <p className="text-muted mb-0">
                    Found <strong>{filteredProfiles.length}</strong> {filteredProfiles.length === 1 ? 'roommate' : 'roommates'}
                  </p>
                </div>

                {/* Roommate Cards */}
                <div className="row g-4">
                  {filteredProfiles.map((profile) => (
                    <div key={profile.id} className="col-md-6">
                      <div 
                        className="card border-0 shadow-sm h-100" 
                        style={{ 
                          borderRadius: '16px',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)'
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
                        }}
                        onClick={() => setSelectedProfile(profile)}
                      >
                        <div className="card-body p-4">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="d-flex align-items-center">
                              <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginRight: '16px'
                              }}>
                                {profile.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <h5 className="fw-bold mb-1" style={{ color: '#14432A' }}>
                                  {profile.name}
                                  {profile.verified && (
                                    <CheckCircleIcon style={{ width: '20px', height: '20px', color: '#10b981', display: 'inline', marginLeft: '8px' }} />
                                  )}
                                </h5>
                                <div className="d-flex align-items-center mb-2">
                                  <MapPinIcon style={{ width: '16px', height: '16px', color: '#6c757d', marginRight: '4px' }} />
                                  <small className="text-muted">{profile.location}</small>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                  <div className="d-flex align-items-center">
                                    <StarIcon style={{ width: '16px', height: '16px', color: '#fbbf24', marginRight: '4px' }} />
                                    <small className="fw-bold">{profile.rating}</small>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <ShieldCheckIcon style={{ width: '16px', height: '16px', color: '#14432A', marginRight: '4px' }} />
                                    <small className="fw-bold" style={{ color: '#14432A' }}>{profile.trustScore}</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
                            {profile.bio}
                          </p>

                          <div className="mb-3">
                            <div className="d-flex flex-wrap gap-2">
                              {profile.lifestyle.slice(0, 3).map((item, idx) => (
                                <span key={idx} className="badge" style={{ 
                                  background: 'rgba(20, 67, 42, 0.1)',
                                  color: '#14432A',
                                  fontSize: '0.75rem'
                                }}>
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                            <div>
                              <small className="text-muted d-block">Rent Budget</small>
                              <strong style={{ color: '#14432A' }}>{profile.rentBudget}</strong>
                            </div>
                            <div className="text-end">
                              <small className="text-muted d-block">Availability</small>
                              <strong style={{ color: '#10b981' }}>{profile.availability}</strong>
                            </div>
                          </div>

                          <div className="mt-3 d-flex gap-2">
                            <button 
                              className="btn btn-primary btn-sm flex-grow-1"
                              style={{ borderRadius: '8px' }}
                              onClick={(e) => {
                                e.stopPropagation()
                                setActiveTab('messages')
                              }}
                            >
                              Message
                            </button>
                            <button 
                              className="btn btn-outline-primary btn-sm"
                              style={{ borderRadius: '8px' }}
                              onClick={(e) => {
                                e.stopPropagation()
                                // Add to matches
                              }}
                            >
                              <HeartIcon style={{ width: '16px', height: '16px' }} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Matches Tab */}
          {activeTab === 'matches' && (
            <div>
              <h3 className="fw-bold mb-4" style={{ color: '#14432A' }}>Your Matches</h3>
              <div className="row g-4">
                {matches.map((profile) => (
                  <div key={profile.id} className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                      <div className="card-body p-4">
                        <div className="text-center mb-3">
                          <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            margin: '0 auto'
                          }}>
                            {profile.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <h5 className="fw-bold mt-3 mb-1" style={{ color: '#14432A' }}>
                            {profile.name}
                          </h5>
                          <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
                            <div className="d-flex align-items-center">
                              <StarIcon style={{ width: '16px', height: '16px', color: '#fbbf24', marginRight: '4px' }} />
                              <small className="fw-bold">{profile.rating}</small>
                            </div>
                            <div className="d-flex align-items-center">
                              <ShieldCheckIcon style={{ width: '16px', height: '16px', color: '#14432A', marginRight: '4px' }} />
                              <small className="fw-bold" style={{ color: '#14432A' }}>{profile.trustScore}</small>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted small text-center mb-3">{profile.bio.substring(0, 100)}...</p>
                        <div className="d-flex gap-2">
                          <button 
                            className="btn btn-primary btn-sm flex-grow-1"
                            onClick={() => setActiveTab('messages')}
                          >
                            Message
                          </button>
                          <button className="btn btn-outline-danger btn-sm">
                            <XMarkIcon style={{ width: '16px', height: '16px' }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div>
              <h3 className="fw-bold mb-4" style={{ color: '#14432A' }}>Messages</h3>
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                    <div className="card-body p-0">
                      <div className="p-3 border-bottom">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Search messages..."
                        />
                      </div>
                      <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                        {messages.map((msg) => (
                          <div 
                            key={msg.id}
                            className="p-3 border-bottom"
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="d-flex align-items-center">
                              <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                marginRight: '12px'
                              }}>
                                {msg.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 fw-bold">{msg.name}</h6>
                                <p className="text-muted small mb-1">{msg.lastMessage}</p>
                                <small className="text-muted">{msg.timestamp}</small>
                              </div>
                              {msg.unread > 0 && (
                                <span className="badge bg-danger">{msg.unread}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card border-0 shadow-sm" style={{ borderRadius: '16px', minHeight: '600px' }}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                      <div className="text-center">
                        <ChatBubbleLeftRightIcon style={{ width: '64px', height: '64px', color: '#dee2e6', marginBottom: '16px' }} />
                        <p className="text-muted">Select a conversation to start messaging</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              <h3 className="fw-bold mb-4" style={{ color: '#14432A' }}>My Profile</h3>
              <div className="row">
                <div className="col-md-8">
                  <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px' }}>
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-4" style={{ color: '#14432A' }}>Profile Information</h5>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label small fw-bold">Full Name</label>
                          <input type="text" className="form-control" defaultValue="Your Name" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label small fw-bold">Age</label>
                          <input type="number" className="form-control" defaultValue="28" />
                        </div>
                        <div className="col-12">
                          <label className="form-label small fw-bold">Bio</label>
                          <textarea className="form-control" rows="4" defaultValue="Tell potential roommates about yourself..." />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label small fw-bold">Location</label>
                          <input type="text" className="form-control" defaultValue="Seattle, WA" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label small fw-bold">Rent Budget</label>
                          <input type="text" className="form-control" defaultValue="$1,200 - $1,500" />
                        </div>
                      </div>
                      <button className="btn btn-primary mt-3">Save Changes</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                    <div className="card-body p-4 text-center">
                      <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        margin: '0 auto 20px'
                      }}>
                        YN
                      </div>
                      <h5 className="fw-bold mb-3" style={{ color: '#14432A' }}>Your Trust Score</h5>
                      <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        border: '4px solid white',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}>
                        <div className="text-center">
                          <div className="h2 mb-0 text-white fw-bold">275</div>
                        </div>
                      </div>
                      <p className="text-muted small mb-0">Excellent Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile Detail Modal */}
        {selectedProfile && (
          <div 
            className="modal show d-block" 
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => setSelectedProfile(null)}
          >
            <div 
              className="modal-dialog modal-lg modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content border-0" style={{ borderRadius: '20px' }}>
                <div className="modal-header border-0 p-4" style={{ background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)', color: 'white' }}>
                  <h4 className="modal-title fw-bold">{selectedProfile.name}'s Profile</h4>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={() => setSelectedProfile(null)}
                  ></button>
                </div>
                <div className="modal-body p-4">
                  <div className="text-center mb-4">
                    <div style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      margin: '0 auto'
                    }}>
                      {selectedProfile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="fw-bold mt-3 mb-2" style={{ color: '#14432A' }}>
                      {selectedProfile.name}
                      {selectedProfile.verified && (
                        <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#10b981', display: 'inline', marginLeft: '8px' }} />
                      )}
                    </h4>
                    <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
                      <div className="d-flex align-items-center">
                        <StarIcon style={{ width: '20px', height: '20px', color: '#fbbf24', marginRight: '4px' }} />
                        <strong>{selectedProfile.rating}</strong>
                      </div>
                      <div className="d-flex align-items-center">
                        <ShieldCheckIcon style={{ width: '20px', height: '20px', color: '#14432A', marginRight: '4px' }} />
                        <strong style={{ color: '#14432A' }}>Trust Score: {selectedProfile.trustScore}</strong>
                      </div>
                    </div>
                    <p className="text-muted mb-0">
                      <MapPinIcon style={{ width: '16px', height: '16px', display: 'inline', marginRight: '4px' }} />
                      {selectedProfile.location}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>About</h6>
                    <p className="text-muted">{selectedProfile.bio}</p>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Lifestyle</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedProfile.lifestyle.map((item, idx) => (
                          <span key={idx} className="badge" style={{ 
                            background: 'rgba(20, 67, 42, 0.1)',
                            color: '#14432A',
                            fontSize: '0.85rem',
                            padding: '6px 12px'
                          }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Interests</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedProfile.interests.map((item, idx) => (
                          <span key={idx} className="badge" style={{ 
                            background: 'rgba(20, 67, 42, 0.1)',
                            color: '#14432A',
                            fontSize: '0.85rem',
                            padding: '6px 12px'
                          }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Rent Budget</h6>
                      <p className="mb-0">{selectedProfile.rentBudget}</p>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold mb-2" style={{ color: '#14432A' }}>Availability</h6>
                      <p className="mb-0" style={{ color: '#10b981' }}>{selectedProfile.availability}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0 p-4">
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setSelectedProfile(null)}
                  >
                    Close
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setSelectedProfile(null)
                      setActiveTab('messages')
                    }}
                  >
                    Send Message
                  </button>
                  <button className="btn btn-outline-primary">
                    <HeartIcon style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }} />
                    Add to Matches
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
