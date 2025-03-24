import './globals.css'
import Navbar from '../components/Navbar'
import Script from 'next/script'

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
      <body>
        <Navbar />
        {children}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
} 