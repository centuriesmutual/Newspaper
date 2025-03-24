import './globals.css'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Centuries Mutual',
  description: 'Providing institutional-grade investment solutions and comprehensive wealth management services.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
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
        <Footer />
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
} 