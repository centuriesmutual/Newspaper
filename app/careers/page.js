'use client'

import { motion } from 'framer-motion'

export default function Careers() {
  const positions = [
    {
      title: "Financial Broker",
      location: "Remote",
      type: "Full-time",
      description: "Comprehensive financial services broker providing insurance solutions, investment planning, and tax preparation services to help clients achieve their financial goals and protect their families.",
      requirements: [
        "Bachelor's degree in Finance, Economics, or related field",
        "2+ years of financial services experience",
        "Insurance license and Series 7/66 licenses preferred",
        "Tax preparation certification or experience",
        "Strong communication and relationship-building skills",
        "Customer service oriented with attention to detail"
      ]
    },
    {
      title: "Marketing Associate",
      location: "Remote",
      type: "Full-time",
      description: "Develop and execute marketing strategies, create compelling visual content, and produce engaging videos to promote our financial services and build brand awareness in the community.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, Graphic Design, or related field",
        "2+ years of marketing experience with graphic and video design",
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro)",
        "Experience with video editing and motion graphics",
        "Strong digital marketing skills and social media management",
        "Creative thinking and analytical abilities"
      ]
    },
    {
      title: "Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain web applications and digital tools to enhance our client experience and streamline operations.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of full-stack development experience",
        "Proficiency in React, Node.js, and databases",
        "Experience with cloud platforms (AWS/Azure)"
      ]
    }
  ]

  const benefits = [
    {
      icon: "bi-heart-pulse",
      title: "Health Insurance",
      description: "Comprehensive health, dental, and vision coverage for you and your family"
    },
    {
      icon: "bi-piggy-bank",
      title: "Equity & Ownership",
      description: "Employee stock options and equity participation in company growth"
    },
    {
      icon: "bi-calendar-check",
      title: "Paid Time Off",
      description: "Generous vacation and sick leave policies"
    },
    {
      icon: "bi-book",
      title: "Professional Development",
      description: "Continuing education and certification support"
    },
    {
      icon: "bi-people",
      title: "Team Environment",
      description: "Collaborative and supportive workplace culture"
    },
    {
      icon: "bi-graph-up",
      title: "Growth Opportunities",
      description: "Clear career advancement paths and mentorship"
    }
  ]

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <div className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.h1 
                className="display-4 fw-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ color: '#14432A' }}
              >
                Join Our Team
              </motion.h1>
              <motion.p 
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Build your career with Centuries Mutual and help families secure their financial future. 
                We're looking for passionate professionals who share our commitment to excellence and client service.
              </motion.p>
              <motion.div 
                className="d-flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a href="/submit-resume" className="btn btn-primary btn-lg">Submit Resume</a>
                <a href="/benefits" className="btn btn-outline-primary btn-lg">Our Benefits</a>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-primary rounded-3 p-5 text-white">
                  <i className="bi bi-people display-1 mb-3"></i>
                  <h3 className="mb-2">Why Work With Us?</h3>
                  <p className="mb-0">Join a team that values integrity, excellence, and making a difference in our community.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <section id="positions" className="py-5">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-3" style={{ color: '#14432A' }}>Open Positions</h2>
            <p className="text-muted">Explore current career opportunities at Centuries Mutual</p>
          </motion.div>

          {/* Positions Table */}
          <motion.div 
            className="card border-0 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th className="border-0 py-3 px-4">Position</th>
                      <th className="border-0 py-3 px-4">Location</th>
                      <th className="border-0 py-3 px-4">Type</th>
                      <th className="border-0 py-3 px-4">Description</th>
                      <th className="border-0 py-3 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {positions.map((position, index) => (
                      <motion.tr 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border-bottom"
                      >
                        <td className="py-4 px-4">
                          <h6 className="mb-1 fw-bold" style={{ color: '#14432A' }}>{position.title}</h6>
                        </td>
                        <td className="py-4 px-4">
                          <span className="badge bg-primary">{position.location}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="badge bg-secondary">{position.type}</span>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted mb-0 small">{position.description}</p>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <a href="/apply" className="btn btn-primary btn-sm">Apply</a>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Detailed Cards (Hidden by default, can be toggled) */}
          <div className="row g-4 mt-4 d-none">
            {positions.map((position, index) => (
              <motion.div 
                key={index}
                className="col-lg-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h4 className="mb-1" style={{ color: '#14432A' }}>{position.title}</h4>
                        <div className="d-flex gap-3 mb-2">
                          <span className="badge bg-primary">{position.location}</span>
                          <span className="badge bg-secondary">{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mb-3">{position.description}</p>
                    <h6 className="mb-2" style={{ color: '#14432A' }}>Requirements:</h6>
                    <ul className="list-unstyled">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="mb-1">
                          <i className="bi bi-check-circle text-success me-2"></i>
                          {req}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3">
                      <a href="/apply" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
