export const metadata = {
  title: 'Centuries Mutual',
  description: 'Centuries Mutual® | Your Community Brokerage - Connecting individuals with secure real estate solutions, digital document management, and community-driven roommate matching to simplify property transactions and enhance living experiences.',
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Centuries Mutual",
      "url": "https://centuriesmutual.com",
      "logo": "https://centuriesmutual.com/cmlogotreesmall-removebg-preview.png",
      "description": "Connecting individuals with secure real estate solutions, digital document management, and community-driven roommate matching to simplify property transactions and enhance living experiences.",
      "sameAs": [
        "https://centuriesmutual.com/newspaper",
        "https://centuriesmutual.com/learnmore",
        "https://centuriesmutual.com/login",
        "https://centuriesmutual.com/signup",
        "https://centuriesmutual.com/community"
      ],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://centuriesmutual.com/community?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })
  }
} 