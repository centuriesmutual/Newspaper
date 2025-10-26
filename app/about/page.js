'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function About() {
  const teamMember = {
    name: 'John Carter Cothran',
    role: 'Software Engineer & Health Insurance Professional',
    description: 'A dynamic professional with 4 years of experience in finance, John combines his expertise in software engineering with deep knowledge of the health insurance industry to deliver innovative solutions for our clients.'
  }

  return (
    <div className="container py-5">
      {/* Back to Home Button */}
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="btn btn-outline-secondary">
          <i className="bi bi-arrow-left me-2"></i>Back to Home
        </Link>
      </motion.div>

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
          <div className="position-relative mb-5" style={{ 
            height: '800px',
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa'
          }}>
            <Image
              src="/deer.jpeg"
              alt="Legacy and Tradition"
              fill
              priority
              quality={100}
              className="rounded-3"
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                padding: '20px'
              }}
            />
          </div>
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
              <div className="position-relative mx-auto" style={{ 
                width: '280px', 
                height: '280px', 
                marginTop: '20px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #14432A'
              }}>
                <Image
                  src="/me.jpeg"
                  alt={teamMember.name}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
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

      {/* Contact Information */}
      <section className="mt-5">
        <motion.h2 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          style={{ color: '#14432A' }}
        >
          Contact Information
        </motion.h2>
        <div className="row g-4 justify-content-center">
          <motion.div 
            className="col-lg-4 col-md-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <div className="bg-white p-4 rounded-3 shadow-sm h-100 text-center">
              <div className="d-flex justify-content-center mb-3">
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#14432A15',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="bi bi-briefcase text-primary" style={{ fontSize: '1.8rem' }}></i>
                </div>
              </div>
              <h3 className="h5 mb-3" style={{ color: '#14432A' }}>Join Our Team</h3>
              <p className="text-muted mb-4">
                Explore career opportunities and join our growing team of financial professionals.
              </p>
              <Link href="/careers" className="btn btn-primary">
                <i className="bi bi-arrow-right me-2"></i>View Careers
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-lg-4 col-md-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            <div className="bg-white p-4 rounded-3 shadow-sm h-100 text-center">
              <div className="d-flex justify-content-center mb-3">
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#14432A15',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="bi bi-house text-primary" style={{ fontSize: '1.8rem' }}></i>
                </div>
              </div>
              <h3 className="h5 mb-3" style={{ color: '#14432A' }}>Contact Us</h3>
              <p className="text-muted mb-0">
                Main Office: 888-324-6642<br />
                Dallas, Texas
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 