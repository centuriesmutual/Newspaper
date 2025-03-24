'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Documents() {
  const documentCategories = [
    {
      title: 'Tax Documents',
      description: 'Access common tax forms and documentation',
      items: [
        { name: 'W-9 Form', link: '/documents/w9.pdf' },
        { name: 'Tax Preparation Checklist', link: '/documents/tax-checklist.pdf' },
        { name: 'Tax Planning Guide', link: '/documents/tax-planning.pdf' }
      ]
    },
    {
      title: 'Health Insurance',
      description: 'Essential health insurance forms and information',
      items: [
        { name: 'Health Insurance Application', link: '/documents/health-application.pdf' },
        { name: 'Benefits Overview', link: '/documents/health-benefits.pdf' },
        { name: 'Claims Forms', link: '/documents/health-claims.pdf' }
      ]
    },
    {
      title: 'Life Insurance',
      description: 'Important life insurance documentation',
      items: [
        { name: 'Life Insurance Application', link: '/documents/life-application.pdf' },
        { name: 'Policy Change Form', link: '/documents/life-policy-change.pdf' },
        { name: 'Beneficiary Form', link: '/documents/beneficiary.pdf' }
      ]
    }
  ]

  return (
    <div className="container py-5">
      <motion.h1 
        className="text-center mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: '#14432A' }}
      >
        Common Documents
      </motion.h1>

      <div className="row g-4">
        {documentCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title h4 mb-3" style={{ color: '#14432A' }}>{category.title}</h3>
                <p className="card-text text-muted mb-4">{category.description}</p>
                <ul className="list-unstyled">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">
                      <Link 
                        href={item.link}
                        className="text-decoration-none d-flex align-items-center"
                        style={{ color: '#14432A' }}
                      >
                        <i className="bi bi-file-earmark-text me-2"></i>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-muted">
          Need assistance with these documents? Contact our support team.
        </p>
        <Link 
          href="/contact" 
          className="btn btn-primary px-4 py-2"
          style={{ 
            backgroundColor: '#14432A',
            borderColor: '#14432A'
          }}
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  )
} 