'use client'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { useState } from 'react'
import { 
  MapPinIcon, 
  HomeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function BrowseRooms() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    maxPrice: '',
    location: '',
    roomType: ''
  })

  // Sample room listings
  const rooms = [
    {
      id: 1,
      title: 'Private Room in Downtown Seattle - $1,200/month',
      location: 'Downtown Seattle, WA',
      price: '$1,200',
      roomType: 'Private Room',
      description: 'Spacious private room in modern 2BR apartment. Shared kitchen and bathroom. Close to public transit, restaurants, and shopping.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 285,
      posted: '2 hours ago',
      available: 'Available Now'
    },
    {
      id: 2,
      title: 'Cozy Studio Apartment - Capitol Hill - $1,500/month',
      location: 'Capitol Hill, Seattle, WA',
      price: '$1,500',
      roomType: 'Studio',
      description: 'Beautiful studio apartment with full kitchen and bathroom. Perfect for one person. Pet-friendly building.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 275,
      posted: '5 hours ago',
      available: 'Available in 2 weeks'
    },
    {
      id: 3,
      title: 'Shared Room in Fremont - $800/month',
      location: 'Fremont, Seattle, WA',
      price: '$800',
      roomType: 'Shared Room',
      description: 'Large shared room in friendly house. Looking for one roommate. Close to Fremont Sunday Market and restaurants.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 268,
      posted: '1 day ago',
      available: 'Available Now'
    },
    {
      id: 4,
      title: '1 Bedroom in Ballard - $1,400/month',
      location: 'Ballard, Seattle, WA',
      price: '$1,400',
      roomType: '1 Bedroom',
      description: 'Comfortable 1BR apartment with balcony. Quiet neighborhood, close to parks and Ballard Locks.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 290,
      posted: '2 days ago',
      available: 'Available in 1 month'
    },
    {
      id: 5,
      title: 'Private Room in Queen Anne - $1,100/month',
      location: 'Queen Anne, Seattle, WA',
      price: '$1,100',
      roomType: 'Private Room',
      description: 'Private room with shared bathroom. Modern building with gym and rooftop access. Great views of the city.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 280,
      posted: '3 days ago',
      available: 'Available Now'
    },
    {
      id: 6,
      title: 'Shared Room in Green Lake - $750/month',
      location: 'Green Lake, Seattle, WA',
      price: '$750',
      roomType: 'Shared Room',
      description: 'Shared room in house near Green Lake. Perfect for students or young professionals. Close to park and trails.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 272,
      posted: '4 days ago',
      available: 'Available in 3 weeks'
    }
  ]

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
        <div className="container py-4">
          {/* Header */}
          <div className="mb-4">
            <h1 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '2rem' }}>Browse Rooms</h1>
            <p className="text-muted">Find your perfect living space</p>
          </div>

          {/* Search and Filter Bar */}
          <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '12px' }}>
            <div className="card-body p-3">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-0">
                      <MagnifyingGlassIcon style={{ width: '20px', height: '20px', color: '#6c757d' }} />
                    </span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search by location or keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max Price"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                  />
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={filters.roomType}
                    onChange={(e) => setFilters({...filters, roomType: e.target.value})}
                  >
                    <option value="">All Room Types</option>
                    <option value="Private Room">Private Room</option>
                    <option value="Shared Room">Shared Room</option>
                    <option value="Studio">Studio</option>
                    <option value="1 Bedroom">1 Bedroom</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary w-100" style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-3">
            <p className="text-muted mb-0">
              Found <strong>{rooms.length}</strong> {rooms.length === 1 ? 'listing' : 'listings'}
            </p>
          </div>

          {/* Room Listings */}
          <div className="row g-3">
            {rooms.map((room) => (
              <div key={room.id} className="col-12">
                <div className="card border-0 shadow-sm" style={{ borderRadius: '12px', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                >
                  <div className="card-body p-0">
                    <div className="row g-0">
                      {/* Image */}
                      <div className="col-md-3">
                        <div style={{
                          width: '100%',
                          height: '200px',
                          backgroundImage: `url(${room.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          borderRadius: '12px 0 0 12px'
                        }}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="col-md-9">
                        <div className="p-4">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div className="flex-grow-1">
                              <h3 className="fw-bold mb-2" style={{ color: '#14432A', fontSize: '1.3rem', cursor: 'pointer' }}>
                                {room.title}
                              </h3>
                              <div className="d-flex align-items-center mb-2">
                                <MapPinIcon style={{ width: '16px', height: '16px', color: '#6c757d', marginRight: '6px' }} />
                                <span className="text-muted small">{room.location}</span>
                              </div>
                            </div>
                            <div className="text-end">
                              <div className="fw-bold mb-1" style={{ color: '#14432A', fontSize: '1.5rem' }}>{room.price}</div>
                              <div className="text-muted small">/month</div>
                            </div>
                          </div>

                          <p className="text-muted mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                            {room.description}
                          </p>

                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex gap-3 align-items-center">
                              <span className="badge" style={{ 
                                background: 'rgba(20, 67, 42, 0.1)',
                                color: '#14432A',
                                padding: '6px 12px'
                              }}>
                                {room.roomType}
                              </span>
                              <div className="d-flex align-items-center">
                                <ShieldCheckIcon style={{ width: '16px', height: '16px', color: '#14432A', marginRight: '4px' }} />
                                <span className="small fw-bold" style={{ color: '#14432A' }}>Trust Score: {room.trustScore}</span>
                              </div>
                              <span className="text-muted small">{room.posted}</span>
                            </div>
                            <div>
                              <span className="badge bg-success me-2">{room.available}</span>
                              <button className="btn btn-sm btn-primary" style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}>
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-4">
            <button className="btn btn-outline-primary" style={{ borderColor: '#14432A', color: '#14432A' }}>
              Load More Listings
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

