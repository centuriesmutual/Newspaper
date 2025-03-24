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
              <a href="#" className="text-white text-decoration-none">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 mb-4 mb-lg-0">
            <h5 className="text-white mb-4 text-center text-lg-start">Company</h5>
            <ul className="list-unstyled mb-0 text-center text-lg-start">
              <li className="mb-2">
                <Link href="/about" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/documents" className="text-white text-decoration-none">Documents</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 mb-4 mb-lg-0">
            <h5 className="text-white mb-4 text-center text-lg-start">Services</h5>
            <ul className="list-unstyled mb-0 text-center text-lg-start">
              <li className="mb-2">
                <Link href="/lifeinsurance" className="text-white text-decoration-none">Life Insurance</Link>
              </li>
              <li className="mb-2">
                <Link href="/healthinsurance" className="text-white text-decoration-none">Health Insurance</Link>
              </li>
              <li className="mb-2">
                <Link href="/tax" className="text-white text-decoration-none">Tax Preparation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <h5 className="text-white mb-4 text-center text-lg-start">Contact Us</h5>
            <div className="text-center text-lg-start">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
                <i className="bi bi-geo-alt-fill me-2" style={{ color: '#14432A' }}></i>
                <p className="text-white mb-0 small">Dallas, TX 75201</p>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
                <i className="bi bi-telephone-fill me-2" style={{ color: '#14432A' }}></i>
                <a href="tel:8883246642" className="text-white text-decoration-none small">888-324-6642</a>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <i className="bi bi-envelope-fill me-2" style={{ color: '#14432A' }}></i>
                <a href="mailto:support@centuriesmutual.com" className="text-white text-decoration-none small">support@centuriesmutual.com</a>
              </div>
            </div>
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