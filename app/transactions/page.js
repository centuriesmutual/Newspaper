'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Transactions() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const transactions = [
    { id: 1, type: 'Payment', amount: '$450.00', date: '2024-02-15', status: 'Completed', description: 'Health Insurance Premium' },
    { id: 2, type: 'Payment', amount: '$1,250.00', date: '2024-02-14', status: 'Completed', description: 'Mortgage Payment' },
    { id: 3, type: 'Refund', amount: '$89.00', date: '2024-02-13', status: 'Completed', description: 'Auto Insurance Refund' },
    { id: 4, type: 'Payment', amount: '$89.00', date: '2024-02-12', status: 'Completed', description: 'Auto Insurance Premium' },
    { id: 5, type: 'Claim', amount: '$1,200.00', date: '2024-02-11', status: 'Processing', description: 'Health Insurance Claim' },
    { id: 6, type: 'Payment', amount: '$450.00', date: '2024-02-10', status: 'Completed', description: 'Health Insurance Premium' },
    { id: 7, type: 'Refund', amount: '$25.00', date: '2024-02-09', status: 'Completed', description: 'Overpayment Refund' },
    { id: 8, type: 'Payment', amount: '$1,250.00', date: '2024-02-08', status: 'Completed', description: 'Mortgage Payment' },
    { id: 9, type: 'Claim', amount: '$800.00', date: '2024-02-07', status: 'Approved', description: 'Auto Insurance Claim' },
    { id: 10, type: 'Payment', amount: '$89.00', date: '2024-02-06', status: 'Completed', description: 'Auto Insurance Premium' },
    { id: 11, type: 'Payment', amount: '$450.00', date: '2024-02-05', status: 'Completed', description: 'Health Insurance Premium' },
    { id: 12, type: 'Refund', amount: '$50.00', date: '2024-02-04', status: 'Completed', description: 'Policy Adjustment Refund' },
    { id: 13, type: 'Payment', amount: '$1,250.00', date: '2024-02-03', status: 'Completed', description: 'Mortgage Payment' },
    { id: 14, type: 'Claim', amount: '$2,500.00', date: '2024-02-02', status: 'Processing', description: 'Health Insurance Major Claim' },
    { id: 15, type: 'Payment', amount: '$89.00', date: '2024-02-01', status: 'Completed', description: 'Auto Insurance Premium' },
    { id: 16, type: 'Payment', amount: '$450.00', date: '2024-01-31', status: 'Completed', description: 'Health Insurance Premium' },
    { id: 17, type: 'Refund', amount: '$15.00', date: '2024-01-30', status: 'Completed', description: 'Service Fee Refund' },
    { id: 18, type: 'Payment', amount: '$1,250.00', date: '2024-01-29', status: 'Completed', description: 'Mortgage Payment' },
    { id: 19, type: 'Claim', amount: '$500.00', date: '2024-01-28', status: 'Approved', description: 'Auto Insurance Claim' },
    { id: 20, type: 'Payment', amount: '$89.00', date: '2024-01-27', status: 'Completed', description: 'Auto Insurance Premium' },
    { id: 21, type: 'Payment', amount: '$450.00', date: '2024-01-26', status: 'Completed', description: 'Health Insurance Premium' },
    { id: 22, type: 'Refund', amount: '$75.00', date: '2024-01-25', status: 'Completed', description: 'Premium Adjustment' },
    { id: 23, type: 'Payment', amount: '$1,250.00', date: '2024-01-24', status: 'Completed', description: 'Mortgage Payment' },
    { id: 24, type: 'Claim', amount: '$1,500.00', date: '2024-01-23', status: 'Processing', description: 'Health Insurance Claim' },
    { id: 25, type: 'Payment', amount: '$89.00', date: '2024-01-22', status: 'Completed', description: 'Auto Insurance Premium' }
  ]

  const totalPages = Math.ceil(transactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTransactions = transactions.slice(startIndex, endIndex)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success'
      case 'Processing': return 'warning'
      case 'Approved': return 'info'
      default: return 'secondary'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Payment': return 'bi-arrow-down-circle text-danger'
      case 'Refund': return 'bi-arrow-up-circle text-success'
      case 'Claim': return 'bi-file-text text-primary'
      default: return 'bi-circle text-secondary'
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const renderPagination = () => {
    const pages = []
    const maxVisiblePages = 5
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Previous button
    pages.push(
      <li key="prev" className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button 
          className="page-link" 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
      </li>
    )

    // First page if not visible
    if (startPage > 1) {
      pages.push(
        <li key={1} className="page-item">
          <button className="page-link" onClick={() => handlePageChange(1)}>1</button>
        </li>
      )
      if (startPage > 2) {
        pages.push(
          <li key="ellipsis1" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      )
    }

    // Last page if not visible
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <li key="ellipsis2" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )
      }
      pages.push(
        <li key={totalPages} className="page-item">
          <button className="page-link" onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        </li>
      )
    }

    // Next button
    pages.push(
      <li key="next" className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <button 
          className="page-link" 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </li>
    )

    return pages
  }

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
                  <i className="bi bi-clock-history me-2"></i>Transaction History
                </h4>
                <p className="text-muted mb-0">View all your payment and claim transactions</p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary btn-sm">
                <i className="bi bi-download me-1"></i>Export
              </button>
              <button className="btn btn-outline-primary btn-sm">
                <i className="bi bi-funnel me-1"></i>Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-4">
        {/* Summary Cards */}
        <div className="row g-3 mb-4">
          <div className="col-6 col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-arrow-down-circle text-danger fs-1 mb-2"></i>
                <h6 className="card-title">Total Payments</h6>
                <h4 className="text-danger">$4,250</h4>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-arrow-up-circle text-success fs-1 mb-2"></i>
                <h6 className="card-title">Total Refunds</h6>
                <h4 className="text-success">$254</h4>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-file-text text-primary fs-1 mb-2"></i>
                <h6 className="card-title">Total Claims</h6>
                <h4 className="text-primary">$6,000</h4>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-graph-up text-info fs-1 mb-2"></i>
                <h6 className="card-title">Net Balance</h6>
                <h4 className="text-info">-$1,996</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white border-0">
            <h5 className="mb-0" style={{ color: '#14432A' }}>
              Recent Transactions
            </h5>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <i className={`bi ${getTypeIcon(transaction.type)} me-2`}></i>
                          <span className="fw-bold">{transaction.type}</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="fw-bold">{transaction.description}</div>
                          <small className="text-muted">Transaction #{transaction.id}</small>
                        </div>
                      </td>
                      <td>
                        <span className={`fw-bold ${
                          transaction.type === 'Payment' ? 'text-danger' : 
                          transaction.type === 'Refund' ? 'text-success' : 'text-primary'
                        }`}>
                          {transaction.amount}
                        </span>
                      </td>
                      <td>
                        <div>
                          <div>{new Date(transaction.date).toLocaleDateString()}</div>
                          <small className="text-muted">{new Date(transaction.date).toLocaleTimeString()}</small>
                        </div>
                      </td>
                      <td>
                        <span className={`badge bg-${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-1">
                          <button className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-eye"></i>
                          </button>
                          <button className="btn btn-outline-secondary btn-sm">
                            <i className="bi bi-download"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="text-muted">
            Showing {startIndex + 1} to {Math.min(endIndex, transactions.length)} of {transactions.length} transactions
          </div>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              {renderPagination()}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
