'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { metadata } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <html lang="en">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet"
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        {isHomePage && <Footer />}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
} 