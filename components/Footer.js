'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  
  if (pathname !== '/') {
    return null
  }

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">Centuries Mutual</h5>
            <p className="mb-0">
              Providing institutional-grade investment solutions and comprehensive wealth management services.
            </p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-white">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/documents" className="text-white text-decoration-none">Documents</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-3">Contact Us</h5>
            <p className="mb-0">
              Email: info@centuriesmutual.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-top border-secondary pt-4 mt-4">
          <p className="text-center mb-0">
            © {new Date().getFullYear()} Centuries Mutual. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 