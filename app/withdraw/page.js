'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Withdraw() {
  const [isConnected, setIsConnected] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleConnect = () => {
    setIsConnected(true)
  }

  const handleWithdraw = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Withdrawal request submitted successfully!')
    setIsProcessing(false)
    setWithdrawAmount('')
    setSelectedMethod('')
  }

  const withdrawMethods = [
    { id: 'bank', name: 'Bank Transfer', icon: 'bi-bank', description: 'Transfer to your bank account', fee: 'Free', time: '1-3 business days' },
    { id: 'paypal', name: 'PayPal', icon: 'bi-paypal', description: 'Withdraw to PayPal account', fee: '2.9%', time: 'Instant' },
    { id: 'venmo', name: 'Venmo', icon: 'bi-phone', description: 'Send to Venmo account', fee: '1.5%', time: 'Instant' },
    { id: 'crypto', name: 'Cryptocurrency', icon: 'bi-coin', description: 'Withdraw to crypto wallet', fee: '0.5%', time: '5-10 minutes' }
  ]

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Link href="/dashboard" className="btn btn-outline-secondary btn-sm me-3">
                <i className="bi bi-arrow-left me-1"></i>Back
              </Link>
              <div>
                <h4 className="mb-1" style={{ color: '#14432A' }}>
                  <i className="bi bi-arrow-up-circle me-2"></i>Withdraw Funds
                </h4>
                <p className="text-muted mb-0">Withdraw your available balance to your preferred method</p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary btn-sm">
                <i className="bi bi-clock-history me-1"></i>History
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-lg-8">
            {/* Connection Status */}
            {!isConnected ? (
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-wallet2 text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <h5 className="mb-3" style={{ color: '#14432A' }}>Connect Your Payment Method</h5>
                    <p className="text-muted mb-4">Connect a payment method to start withdrawing funds from your account</p>
                    <button 
                      className="btn btn-primary btn-lg" 
                      onClick={handleConnect}
                      style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}
                    >
                      <i className="bi bi-link-45deg me-2"></i>Connect Payment Method
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Balance Overview */}
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-4">
                    <h6 className="mb-3" style={{ color: '#14432A' }}>Available Balance</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h2 className="mb-1">$2,450.00</h2>
                        <small className="text-success">
                          <i className="bi bi-arrow-up me-1"></i>+$125.00 this month
                        </small>
                      </div>
                      <div className="text-end">
                        <small className="text-muted">Total Balance</small>
                        <br />
                        <small className="text-muted">$2,450.00</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Withdrawal Form */}
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0" style={{ color: '#14432A' }}>
                      <i className="bi bi-arrow-up-circle me-2"></i>Withdrawal Request
                    </h5>
                  </div>
                  <div className="card-body p-4">
                    <form onSubmit={handleWithdraw}>
                      <div className="mb-4">
                        <label className="form-label fw-bold">Withdrawal Amount</label>
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="0.00"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                            min="1"
                            max="2450"
                            step="0.01"
                            required
                          />
                        </div>
                        <small className="text-muted">Minimum: $1.00 | Maximum: $2,450.00</small>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-bold">Withdrawal Method</label>
                        <div className="row g-3">
                          {withdrawMethods.map((method) => (
                            <div key={method.id} className="col-12 col-md-6">
                              <div 
                                className={`card border-2 cursor-pointer ${selectedMethod === method.id ? 'border-primary' : 'border-light'}`}
                                style={{ borderRadius: '10px' }}
                                onClick={() => setSelectedMethod(method.id)}
                              >
                                <div className="card-body p-3">
                                  <div className="d-flex align-items-center">
                                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                      <i className={`bi ${method.icon} text-white`}></i>
                                    </div>
                                    <div className="flex-grow-1">
                                      <h6 className="mb-1">{method.name}</h6>
                                      <small className="text-muted">{method.description}</small>
                                    </div>
                                    <div className="text-end">
                                      <div className="fw-bold text-primary">{method.fee}</div>
                                      <small className="text-muted">{method.time}</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="d-grid">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg"
                          disabled={!withdrawAmount || !selectedMethod || isProcessing}
                          style={{ backgroundColor: '#14432A', borderColor: '#14432A' }}
                        >
                          {isProcessing ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Processing...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-arrow-up-circle me-2"></i>Submit Withdrawal Request
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="col-12 col-lg-4">
            {/* Recent Withdrawals */}
            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
              <div className="card-header bg-white border-0">
                <h6 className="mb-0" style={{ color: '#14432A' }}>
                  <i className="bi bi-clock-history me-2"></i>Recent Withdrawals
                </h6>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  <div className="list-group-item border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold">Bank Transfer</div>
                        <small className="text-muted">Feb 15, 2024</small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold text-danger">-$450.00</div>
                        <small className="text-success">Completed</small>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold">PayPal</div>
                        <small className="text-muted">Feb 10, 2024</small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold text-danger">-$125.00</div>
                        <small className="text-success">Completed</small>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold">Venmo</div>
                        <small className="text-muted">Feb 5, 2024</small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold text-danger">-$89.00</div>
                        <small className="text-warning">Processing</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Withdrawal Limits */}
            <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
              <div className="card-header bg-white border-0">
                <h6 className="mb-0" style={{ color: '#14432A' }}>
                  <i className="bi bi-shield-check me-2"></i>Withdrawal Limits
                </h6>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Daily Limit</span>
                    <span className="fw-bold">$5,000</span>
                  </div>
                  <div className="progress mt-1" style={{ height: '4px' }}>
                    <div className="progress-bar" style={{ width: '49%' }}></div>
                  </div>
                  <small className="text-muted">$2,450 remaining today</small>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Monthly Limit</span>
                    <span className="fw-bold">$25,000</span>
                  </div>
                  <div className="progress mt-1" style={{ height: '4px' }}>
                    <div className="progress-bar bg-success" style={{ width: '15%' }}></div>
                  </div>
                  <small className="text-muted">$22,550 remaining this month</small>
                </div>
                <div className="alert alert-info mb-0">
                  <small>
                    <i className="bi bi-info-circle me-1"></i>
                    Limits reset daily at midnight and monthly on the 1st
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
