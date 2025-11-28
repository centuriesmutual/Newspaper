'use client'

import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { useState } from 'react'
import { 
  MapPinIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function Rooms() {
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
      title: 'Private Room in Downtown Seattle',
      location: 'Downtown Seattle, WA',
      price: '$1,200',
      roomType: 'Private Room',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 285,
      available: 'Available Now'
    },
    {
      id: 2,
      title: 'Cozy Studio Apartment - Capitol Hill',
      location: 'Capitol Hill, Seattle, WA',
      price: '$1,500',
      roomType: 'Studio',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 275,
      available: 'Available in 2 weeks'
    },
    {
      id: 3,
      title: 'Shared Room in Fremont',
      location: 'Fremont, Seattle, WA',
      price: '$800',
      roomType: 'Shared Room',
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 268,
      available: 'Available Now'
    },
    {
      id: 4,
      title: '1 Bedroom in Ballard',
      location: 'Ballard, Seattle, WA',
      price: '$1,400',
      roomType: '1 Bedroom',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 290,
      available: 'Available in 1 month'
    },
    {
      id: 5,
      title: 'Private Room in Queen Anne',
      location: 'Queen Anne, Seattle, WA',
      price: '$1,100',
      roomType: 'Private Room',
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 280,
      available: 'Available Now'
    },
    {
      id: 6,
      title: 'Shared Room in Green Lake',
      location: 'Green Lake, Seattle, WA',
      price: '$750',
      roomType: 'Shared Room',
      rating: 4.5,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      trustScore: 272,
      available: 'Available in 3 weeks'
    }
  ]

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '20px' }}>
        <div className="container-fluid px-4">
          {/* Header with Search */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="fw-bold mb-2" style={{ color: '#222222', fontSize: '1.75rem', fontWeight: '600' }}>Stays</h1>
                <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Find your perfect living space</p>
              </div>
            </div>

            {/* Search Bar - Airbnb Style */}
            <div className="card border shadow-sm mb-4" style={{ borderRadius: '40px', borderColor: '#dddddd' }}>
              <div className="card-body p-2">
                <div className="row g-2 align-items-center">
                  <div className="col-md-4">
                    <div className="d-flex align-items-center px-3 py-2" style={{ cursor: 'pointer' }}>
                      <div className="border-end pe-3 me-3" style={{ borderColor: '#dddddd !important' }}>
                        <small className="fw-bold d-block" style={{ fontSize: '0.75rem', color: '#222222' }}>Location</small>
                        <input
                          type="text"
                          className="border-0 p-0"
                          placeholder="Where are you going?"
                          value={filters.location}
                          onChange={(e) => setFilters({...filters, location: e.target.value})}
                          style={{ fontSize: '0.875rem', color: '#717171', outline: 'none', width: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center px-3 py-2">
                      <div className="border-end pe-3 me-3" style={{ borderColor: '#dddddd !important' }}>
                        <small className="fw-bold d-block" style={{ fontSize: '0.75rem', color: '#222222' }}>Check in</small>
                        <span style={{ fontSize: '0.875rem', color: '#717171' }}>Add dates</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center px-3 py-2">
                      <div className="border-end pe-3 me-3" style={{ borderColor: '#dddddd !important' }}>
                        <small className="fw-bold d-block" style={{ fontSize: '0.75rem', color: '#222222' }}>Check out</small>
                        <span style={{ fontSize: '0.875rem', color: '#717171' }}>Add dates</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="d-flex align-items-center justify-content-between px-3 py-2">
                      <div>
                        <small className="fw-bold d-block" style={{ fontSize: '0.75rem', color: '#222222' }}>Guests</small>
                        <span style={{ fontSize: '0.875rem', color: '#717171' }}>Add guests</span>
                      </div>
                      <button className="btn rounded-circle d-flex align-items-center justify-content-center" style={{ 
                        backgroundColor: '#FF385C', 
                        width: '48px', 
                        height: '48px',
                        border: 'none',
                        color: 'white'
                      }}>
                        <MagnifyingGlassIcon style={{ width: '16px', height: '16px' }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-4 d-flex gap-3 flex-wrap align-items-center">
            <button className="btn border rounded-pill px-4 py-2" style={{ fontSize: '0.875rem', color: '#222222', borderColor: '#dddddd' }}>
              <FunnelIcon style={{ width: '16px', height: '16px', display: 'inline', marginRight: '8px' }} />
              Filters
            </button>
            <button className="btn border rounded-pill px-4 py-2" style={{ fontSize: '0.875rem', color: '#222222', borderColor: '#dddddd' }}>
              Price
            </button>
            <button className="btn border rounded-pill px-4 py-2" style={{ fontSize: '0.875rem', color: '#222222', borderColor: '#dddddd' }}>
              Room type
            </button>
            <button className="btn border rounded-pill px-4 py-2" style={{ fontSize: '0.875rem', color: '#222222', borderColor: '#dddddd' }}>
              Trust Score
            </button>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>
              <strong>{rooms.length}</strong> {rooms.length === 1 ? 'stay' : 'stays'} available
            </p>
          </div>

          {/* Room Grid - Airbnb Style */}
          <div className="row g-4">
            {rooms.map((room) => (
              <div key={room.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div style={{ cursor: 'pointer' }}>
                  {/* Image */}
                  <div style={{
                    width: '100%',
                    height: '300px',
                    backgroundImage: `url(${room.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '12px',
                    position: 'relative',
                    marginBottom: '12px'
                  }}>
                    <button className="btn position-absolute top-0 end-0 m-2 p-2 rounded-circle" style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      width: '32px',
                      height: '32px'
                    }}>
                      <HeartIcon style={{ width: '16px', height: '16px', color: '#222222' }} />
                    </button>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <div className="flex-grow-1">
                        <h3 className="fw-bold mb-1" style={{ 
                          color: '#222222', 
                          fontSize: '1rem', 
                          fontWeight: '600',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {room.title}
                        </h3>
                        <div className="d-flex align-items-center mb-1" style={{ fontSize: '0.875rem', color: '#717171' }}>
                          <MapPinIcon style={{ width: '14px', height: '14px', marginRight: '4px' }} />
                          <span>{room.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-2" style={{ fontSize: '0.875rem' }}>
                      <StarIcon style={{ width: '14px', height: '14px', color: '#FF385C', marginRight: '4px', fill: '#FF385C' }} />
                      <span className="fw-bold me-1" style={{ color: '#222222' }}>{room.rating}</span>
                      <span className="text-muted">({room.reviews})</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold" style={{ color: '#222222', fontSize: '0.9375rem' }}>{room.price}</span>
                        <span className="text-muted" style={{ fontSize: '0.875rem' }}> /month</span>
                      </div>
                      <span className="badge" style={{ 
                        background: 'rgba(20, 67, 42, 0.1)',
                        color: '#14432A',
                        padding: '4px 8px',
                        fontSize: '0.75rem',
                        borderRadius: '4px'
                      }}>
                        Trust: {room.trustScore}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-5 mb-5">
            <button className="btn border rounded-pill px-5 py-2" style={{ 
              borderColor: '#222222', 
              color: '#222222',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              Show more
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

