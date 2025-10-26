export const metadata = {
  title: 'Centuries Mutual',
  description: 'Your Community Brokerage: Providing a secure network for digital payments and travel services powered by blockchain technology.',
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
      "description": "Your Community Brokerage: Providing a secure network for digital payments and travel services powered by blockchain technology.",
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