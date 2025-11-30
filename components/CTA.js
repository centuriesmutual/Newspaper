'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { sectionAnimation, slideInLeft, slideInRight } from '../utils/animations'

export default function CTA() {
  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <motion.div className="col-lg-7" {...slideInLeft}>
            <h2 className="display-6 text-white mb-3">
              About Centuries Mutual
            </h2>
            <p className="lead text-white-50 mb-0" style={{ maxWidth: '100%' }}>
              We are a trusted financial services company dedicated to providing comprehensive solutions and building lasting relationships with our clients.
            </p>
          </motion.div>
          <motion.div className="col-lg-4 text-center text-lg-center mt-4 mt-lg-0" {...slideInRight}>
            <motion.a 
              href="/about" 
              className="btn btn-light btn-lg px-4"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
