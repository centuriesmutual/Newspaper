'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  const teamMember = {
    name: 'John Carter Cothran',
    role: 'Software Engineer & Health Insurance Professional',
    description: 'A dynamic professional with 4 years of experience in finance, John combines his expertise in software engineering with deep knowledge of the health insurance industry to deliver innovative solutions for our clients.'
  }

  return (
    <div className="container py-5">
      <section className="mb-5">
        <motion.h1 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#14432A' }}
        >
          Our Story
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-center mb-4" style={{ fontSize: '1.1rem' }}>
            At Centuries Mutual, we are dedicated to providing exceptional financial services and insurance solutions to our clients.
            Our commitment to excellence and personalized approach sets us apart in the industry.
          </p>
          <p className="text-center" style={{ fontSize: '1.1rem' }}>
            We understand that each client has unique needs and goals. That's why we take the time to develop customized strategies
            that align with their objectives and help secure their financial future.
          </p>
        </motion.div>
      </section>

      <section className="mb-5">
        <motion.h2 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ color: '#14432A' }}
        >
          Our Leadership Team
        </motion.h2>
        <div className="row justify-content-center">
          <motion.div 
            className="col-md-6 col-lg-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="card h-100 border-0 shadow-sm">
              <div className="position-relative" style={{ height: '300px' }}>
                <Image
                  src="/me.jpeg"
                  alt={teamMember.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="card-img-top"
                />
              </div>
              <div className="card-body text-center">
                <h3 className="h4 mb-2" style={{ color: '#14432A' }}>{teamMember.name}</h3>
                <p className="text-muted mb-3">{teamMember.role}</p>
                <p className="card-text">{teamMember.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <motion.h2 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ color: '#14432A' }}
        >
          Our Values
        </motion.h2>
        <div className="row g-4">
          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-shield-check display-4 mb-3" style={{ color: '#14432A' }}></i>
                <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Integrity</h3>
                <p className="card-text">We uphold the highest standards of integrity in every interaction and decision.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-graph-up-arrow display-4 mb-3" style={{ color: '#14432A' }}></i>
                <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Excellence</h3>
                <p className="card-text">We strive for excellence in every service we provide to our clients.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-people display-4 mb-3" style={{ color: '#14432A' }}></i>
                <h3 className="h4 mb-3" style={{ color: '#14432A' }}>Client Focus</h3>
                <p className="card-text">Our clients' success and satisfaction are at the heart of everything we do.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 