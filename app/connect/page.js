'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Connect() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-4" style={{ color: '#14432A' }}>
                  Connect with an Advisor
                </h1>
                <p className="lead mb-4">
                  Take the first step towards your financial goals with personalized guidance from our expert advisors.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="position-relative"
                style={{ height: '400px' }}
              >
                <Image
                  src="/mountians.jpeg"
                  alt="Connect with Advisor"
                  fill
                  className="rounded-4"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card border-0 shadow-sm"
              >
                <div className="card-body p-4 p-md-5">
                  <h2 className="text-center mb-4" style={{ color: '#14432A' }}>Get in Touch</h2>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                          <label htmlFor="firstName">First Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                          <label htmlFor="lastName">Last Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" placeholder="Email" />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                          <label htmlFor="phone">Phone</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select className="form-select" id="service" aria-label="Service">
                            <option selected>Select a Service</option>
                            <option value="1">Life Insurance</option>
                            <option value="2">Health Insurance</option>
                            <option value="3">Tax Preparation</option>
                            <option value="4">Wealth Management</option>
                          </select>
                          <label htmlFor="service">Service of Interest</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control" id="message" placeholder="Message" style={{ height: '100px' }}></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg w-100">Submit Request</button>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="mb-4" style={{ color: '#14432A' }}>Need Immediate Assistance?</h2>
                <p className="lead mb-4">
                  Contact us directly for immediate support.
                </p>
                <div className="d-flex justify-content-center gap-4">
                  <div>
                    <i className="bi bi-telephone-fill fs-4 mb-2" style={{ color: '#14432A' }}></i>
                    <p className="mb-0">888-324-6642</p>
                  </div>
                  <div>
                    <i className="bi bi-envelope-fill fs-4 mb-2" style={{ color: '#14432A' }}></i>
                    <p className="mb-0">support@centuriesmutual.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 