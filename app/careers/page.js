'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleViewDetails = (position) => {
    setSelectedPosition(position)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedPosition(null)
  }

  const positions = [
    {
      title: "Financial Broker",
      location: "Remote",
      type: "Full-time",
      description: "Comprehensive financial services broker providing insurance solutions, investment planning, and tax preparation services.",
      requirements: [
        "Bachelor's degree in Finance, Economics, or related field",
        "2+ years of financial services experience",
        "Insurance license and Series 7/66 licenses preferred",
        "Strong communication and relationship-building skills"
      ],
      detailedDescription: "Lead comprehensive financial services operations as a senior broker, managing high-net-worth client portfolios, developing strategic investment strategies, and overseeing complex insurance and tax planning solutions. This role requires deep expertise in financial markets, regulatory compliance, and client relationship management to deliver exceptional results for enterprise-level clients.",
      detailedRequirements: [
        "Master's degree in Finance, Economics, or MBA with CFA/CFP certification",
        "8+ years of progressive experience in financial services or wealth management",
        "Series 7, 63, and 65 licenses required; CFP or CFA preferred",
        "Proven track record managing $50M+ in client assets",
        "Expert knowledge of investment products, insurance solutions, and tax strategies",
        "Strong analytical skills with proficiency in financial modeling and risk assessment",
        "Exceptional client relationship management and business development capabilities",
        "Experience with CRM systems (Salesforce, HubSpot) and financial planning software",
        "Knowledge of SEC, FINRA, and state insurance regulations",
        "Excellent communication skills for presenting complex financial concepts to clients"
      ],
      responsibilities: [
        "Manage high-net-worth client portfolios worth $50M+ in assets",
        "Develop and implement comprehensive financial strategies for enterprise clients",
        "Oversee complex insurance and tax planning solutions",
        "Maintain compliance with SEC, FINRA, and state insurance regulations",
        "Build and maintain strong client relationships through exceptional service",
        "Collaborate with internal teams to deliver integrated financial solutions"
      ],
      benefits: [
        "Competitive base salary plus performance bonuses",
        "Comprehensive health, dental, and vision insurance",
        "401(k) matching and retirement planning assistance",
        "Professional development and certification support",
        "Flexible remote work arrangements",
        "Generous paid time off and holidays"
      ]
    },
    {
      title: "Marketing Associate",
      location: "Remote",
      type: "Full-time",
      description: "Develop and execute marketing strategies, create compelling visual content, and produce engaging videos.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2+ years of marketing experience with graphic and video design",
        "Proficiency in Adobe Creative Suite",
        "Strong digital marketing skills"
      ],
      detailedDescription: "Lead enterprise-level marketing operations, developing comprehensive digital marketing strategies, creating high-impact visual content, and producing professional video campaigns to drive brand awareness and client acquisition. This senior role requires expertise in marketing automation, data analytics, and multi-channel campaign management for a growing financial services organization.",
      detailedRequirements: [
        "Master's degree in Marketing, Communications, or MBA with marketing concentration",
        "5+ years of progressive marketing experience in financial services or B2B industries",
        "Expert proficiency in Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects)",
        "Advanced video production skills including motion graphics, animation, and post-production",
        "Strong digital marketing expertise with Google Analytics, Facebook Ads Manager, LinkedIn Campaign Manager",
        "Experience with marketing automation platforms (HubSpot, Marketo, Pardot)",
        "Proven track record of managing $500K+ annual marketing budgets",
        "Advanced knowledge of SEO/SEM, content marketing, and social media strategy",
        "Experience with A/B testing, conversion optimization, and marketing analytics",
        "Strong project management skills with ability to manage multiple campaigns simultaneously",
        "Excellent written and verbal communication skills for executive presentations"
      ],
      responsibilities: [
        "Develop and execute comprehensive digital marketing strategies across multiple channels",
        "Create high-impact visual content and professional video campaigns",
        "Manage $500K+ annual marketing budgets and ROI optimization",
        "Lead marketing automation initiatives and campaign management",
        "Analyze marketing data and provide strategic insights to leadership",
        "Collaborate with cross-functional teams to align marketing with business objectives"
      ],
      benefits: [
        "Competitive salary with performance-based bonuses",
        "Comprehensive health, dental, and vision insurance",
        "Professional development and conference attendance support",
        "Flexible remote work arrangements",
        "Creative freedom and cutting-edge technology access",
        "Generous paid time off and holidays"
      ]
    },
    {
      title: "Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain web applications and digital tools to enhance our client experience.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of full-stack development experience",
        "Proficiency in React, Node.js, and databases",
        "Experience with cloud platforms"
      ],
      detailedDescription: "Lead enterprise-level software development initiatives, architecting scalable web applications, and implementing cutting-edge digital solutions to enhance client experience and streamline business operations. This senior role requires expertise in modern development frameworks, cloud infrastructure, and security best practices for a growing financial services organization.",
      detailedRequirements: [
        "Master's degree in Computer Science, Software Engineering, or related technical field",
        "6+ years of progressive full-stack development experience in enterprise environments",
        "Expert proficiency in React, Node.js, TypeScript, and modern JavaScript frameworks",
        "Advanced database design and optimization skills (PostgreSQL, MongoDB, Redis)",
        "Comprehensive cloud platform experience (AWS, Azure, GCP) with containerization (Docker, Kubernetes)",
        "Strong DevOps and CI/CD pipeline experience (GitHub Actions, Jenkins, GitLab CI)",
        "Experience with microservices architecture and API design (REST, GraphQL)",
        "Advanced security knowledge including OAuth, JWT, encryption, and compliance standards",
        "Proven experience with testing frameworks (Jest, Cypress, Selenium) and code quality tools",
        "Strong understanding of financial services regulations and data privacy requirements",
        "Excellent problem-solving skills and ability to mentor junior developers"
      ],
      responsibilities: [
        "Architect and develop scalable web applications using modern frameworks",
        "Implement and maintain cloud infrastructure and DevOps practices",
        "Design and optimize database systems for high-performance applications",
        "Ensure compliance with financial services regulations and security standards",
        "Mentor junior developers and lead technical initiatives",
        "Collaborate with cross-functional teams to deliver integrated solutions"
      ],
      benefits: [
        "Competitive salary with equity participation",
        "Comprehensive health, dental, and vision insurance",
        "Professional development and conference attendance support",
        "Flexible remote work arrangements with home office stipend",
        "Cutting-edge technology and development tools",
        "Generous paid time off and holidays"
      ]
    },
    {
      title: "Human Resources Associate",
      location: "Remote",
      type: "Full-time",
      description: "Support HR operations including recruitment, employee relations, and benefits administration.",
      requirements: [
        "Bachelor's degree in Human Resources or related field",
        "2+ years of HR experience",
        "Knowledge of employment laws and regulations",
        "Strong interpersonal and communication skills"
      ],
      detailedDescription: "Lead comprehensive human resources operations for a growing financial services organization, overseeing talent acquisition, employee relations, benefits administration, and strategic HR initiatives. This senior role requires expertise in HR best practices, compliance management, and organizational development to support our expanding team and maintain a world-class workplace culture.",
      detailedRequirements: [
        "Master's degree in Human Resources, Business Administration, or MBA with HR concentration",
        "5+ years of progressive HR experience in professional services or financial industries",
        "PHR, SHRM-CP, or SHRM-SCP certification required",
        "Expert knowledge of federal and state employment laws (FLSA, FMLA, ADA, EEO)",
        "Advanced experience with HRIS systems (Workday, BambooHR, ADP Workforce Now)",
        "Proven track record in talent acquisition and recruitment for specialized roles",
        "Strong experience in employee relations, performance management, and conflict resolution",
        "Advanced benefits administration and compensation analysis experience",
        "Experience with HR analytics, reporting, and data-driven decision making",
        "Strong project management skills and ability to manage multiple HR initiatives",
        "Excellent communication skills for executive presentations and employee communications"
      ],
      responsibilities: [
        "Lead talent acquisition and recruitment for specialized financial services roles",
        "Oversee employee relations, performance management, and conflict resolution",
        "Manage comprehensive benefits administration and compensation analysis",
        "Ensure compliance with federal and state employment laws and regulations",
        "Develop and implement strategic HR initiatives and organizational development programs",
        "Analyze HR data and provide strategic insights to leadership"
      ],
      benefits: [
        "Competitive salary with performance-based bonuses",
        "Comprehensive health, dental, and vision insurance",
        "Professional development and certification support",
        "Flexible remote work arrangements",
        "HR conference attendance and networking opportunities",
        "Generous paid time off and holidays"
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
    <>
      <Navbar />
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
                          <div className="d-flex gap-2 justify-content-center">
                            <button 
                              className="btn btn-outline-primary btn-sm"
                              onClick={() => handleViewDetails(position)}
                              style={{ minWidth: '100px' }}
                            >
                              View Details
                            </button>
                            <a 
                              href="/apply" 
                              className="btn btn-primary btn-sm"
                              style={{ minWidth: '100px' }}
                            >
                              Apply
                            </a>
                          </div>
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

      {/* Job Details Modal */}
      {showModal && selectedPosition && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: '#14432A' }}>
                  {selectedPosition.title}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mb-4">
                  <div className="col-md-6">
                    <strong>Location:</strong> {selectedPosition.location}
                  </div>
                  <div className="col-md-6">
                    <strong>Type:</strong> {selectedPosition.type}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6 style={{ color: '#14432A' }}>Overview</h6>
                  <p className="text-muted">{selectedPosition.description}</p>
                </div>

                <div className="mb-4">
                  <h6 style={{ color: '#14432A' }}>Detailed Description</h6>
                  <p>{selectedPosition.detailedDescription}</p>
                </div>

                <div className="mb-4">
                  <h6 style={{ color: '#14432A' }}>Key Responsibilities</h6>
                  <ul className="list-unstyled">
                    {selectedPosition.responsibilities.map((resp, index) => (
                      <li key={index} className="mb-2">
                        <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h6 style={{ color: '#14432A' }}>Requirements & Qualifications</h6>
                  <ul className="list-unstyled">
                    {selectedPosition.detailedRequirements.map((req, index) => (
                      <li key={index} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h6 style={{ color: '#14432A' }}>Compensation & Benefits</h6>
                  <ul className="list-unstyled">
                    {selectedPosition.benefits.map((benefit, index) => (
                      <li key={index} className="mb-2">
                        <i className="bi bi-star-fill text-warning me-2"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <a href="/apply" className="btn btn-primary">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>
    </>
  )
}
