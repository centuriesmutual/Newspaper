'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Logo and Company Info */}
          <div className="col-lg-4">
            <div className="mb-4 d-flex align-items-center">
              <Image 
                src="/cmlogotreesmall-removebg-preview.png"
                alt="Centuries Mutual"
                width={120}
                height={60}
                style={{ 
                  filter: 'brightness(0) invert(1)', // Makes the logo white
                  objectFit: 'contain'
                }}
              />
              <span style={{ 
                color: 'white',
                marginLeft: '10px',
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}>
                Centuries Mutual
              </span>
            </div>
            <p className="mb-4">
              Providing comprehensive financial solutions with integrity and expertise since 2024.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/about" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none">Services</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white text-decoration-none">Contact</Link>
              </li>
              <li className="mb-2">
                <Link href="/login" className="text-white text-decoration-none">Client Login</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Tax Preparation</li>
              <li className="mb-2">Health Insurance</li>
              <li className="mb-2">Life Insurance</li>
              <li className="mb-2">Wealth Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3">
            <h5 className="mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                123 Financial District, Suite 100<br />
                New York, NY 10004
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                (555) 123-4567
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@centuriesmutual.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary mt-5 pt-4 text-center">
          <small>© 2025 Centuries Mutual. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
} 