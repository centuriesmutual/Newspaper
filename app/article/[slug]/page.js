'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../../../components/Footer'

export default function ArticlePage({ params }) {
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  // Article data mapping
  const articles = {
    'centuries-mutual-bbb-rating': {
      title: 'Centuries Mutual Maintains BBB A Rating',
      author: 'Financial News Desk',
      publishDate: '2 hours ago',
      category: 'Business',
      content: `
        <p>Centuries Mutual has successfully maintained its A rating from the Better Business Bureau, reflecting the company's commitment to ethical business practices and customer satisfaction.</p>
        
        <p>The BBB rating is based on several factors including complaint history, transparency of business practices, and time in business. Centuries Mutual's consistent A rating demonstrates the company's dedication to maintaining high standards in the real estate and financial services sector.</p>
        
        <p>"This rating reflects our ongoing commitment to transparency and customer service excellence," said the company's CEO. "We're proud to maintain this standard as we continue to expand our digital real estate platform."</p>
        
        <p>The company's digital document management system and roommate matching platform have contributed to positive customer feedback, helping maintain the prestigious rating.</p>
      `,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'document-auditing-expansion': {
      title: 'Document Auditing Services Expand Nationwide',
      author: 'Business Reporter',
      publishDate: '4 hours ago',
      category: 'Technology',
      content: `
        <p>Centuries Mutual has announced the nationwide expansion of its document auditing services, bringing enhanced security and verification capabilities to users across the United States.</p>
        
        <p>The expansion includes new regional offices and partnerships with local real estate professionals to ensure comprehensive coverage of document verification services.</p>
        
        <p>"This expansion allows us to provide our document auditing services to a broader customer base while maintaining the high quality standards our users expect," explained the company's operations director.</p>
        
        <p>The service includes automated document verification, fraud detection, and compliance checking for lease agreements, roommate contracts, and property documentation.</p>
      `,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'community-standards-update': {
      title: 'Community Standards Update Enhances Safety',
      author: 'Community Affairs Reporter',
      publishDate: '6 hours ago',
      category: 'Community',
      content: `
        <p>Centuries Mutual has implemented comprehensive updates to its community standards, enhancing safety protocols and user protection across all platform services.</p>
        
        <p>The new standards include enhanced background verification processes, improved reporting mechanisms, and stricter enforcement of community guidelines.</p>
        
        <p>"User safety is our top priority," stated the company's community manager. "These updates ensure that our platform remains a secure environment for all users seeking roommate matches and property services."</p>
        
        <p>The updates also include new educational resources to help users understand their rights and responsibilities when using the platform.</p>
      `,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'real-estate-market-growth': {
      title: 'Real Estate Market Shows 8.5% Growth in Q4',
      author: 'Market Analysis Team',
      publishDate: '8 hours ago',
      category: 'Real Estate',
      content: `
        <p>The real estate market continues to show robust growth with rental prices increasing by 8.5% year-over-year in the fourth quarter, according to the latest market analysis.</p>
        
        <p>Analysts attribute this growth to increased demand for rental properties, particularly in urban areas where remote work has changed housing preferences.</p>
        
        <p>"The market is showing remarkable resilience," noted the lead market analyst. "We're seeing continued strength in both traditional rental markets and emerging digital platforms."</p>
        
        <p>Digital platforms like Centuries Mutual are contributing to this growth by streamlining the rental process and making property transactions more accessible to users.</p>
      `,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'credit-rating-5000-members': {
      title: 'Credit Rating System Reaches 5,000 Members',
      author: 'Technology Reporter',
      publishDate: '10 hours ago',
      category: 'Technology',
      content: `
        <p>The member credit rating system has reached a significant milestone with over 5,000 verified members and 2,100 successful matches in the first quarter.</p>
        
        <p>This achievement demonstrates the growing trust in digital verification systems and the effectiveness of the platform's matching algorithms.</p>
        
        <p>"Reaching 5,000 members is a testament to the value our credit rating system provides," said the platform's technology director. "Users are finding it increasingly valuable for making informed decisions about roommate matches."</p>
        
        <p>The system uses advanced algorithms to assess compatibility and provide users with detailed insights about potential roommates and property matches.</p>
      `,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'platform-million-documents': {
      title: 'Platform Reaches 1 Million Document Milestone',
      author: 'Business Reporter',
      publishDate: '3 days ago',
      category: 'Business',
      content: `
        <p>Centuries Mutual's document processing system has successfully handled over 1 million documents with a 99.8% accuracy rate, setting new industry standards for digital document management.</p>
        
        <p>This milestone represents a significant achievement in automated document processing and verification, demonstrating the platform's reliability and efficiency.</p>
        
        <p>"Processing 1 million documents with such high accuracy is a remarkable achievement," commented the company's operations manager. "It shows our commitment to providing reliable, efficient services to our users."</p>
        
        <p>The system handles various document types including lease agreements, roommate contracts, property documentation, and verification materials.</p>
      `,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  }

  useEffect(() => {
    const slug = params?.slug
    if (slug && articles[slug]) {
      setArticle(articles[slug])
    }
    setLoading(false)
  }, [params])

  if (loading) {
    return (
      <main style={{ background: '#ffffff', minHeight: '100vh' }}>
        <div className="container py-5">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading article...</p>
          </div>
        </div>
      </main>
    )
  }

  if (!article) {
    return (
      <main style={{ background: '#ffffff', minHeight: '100vh' }}>
        <div className="container py-5">
          <div className="text-center">
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Link href="/newspaper" className="btn btn-primary">Back to Newspaper</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* Google AdSense */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID" crossOrigin="anonymous"></script>
      
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }}
      />

      {/* Header */}
      <header style={{ 
        background: '#ffffff', 
        borderBottom: '1px solid #e2e2e2',
        padding: '1rem 0'
      }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/newspaper" className="text-decoration-none">
              <h1 style={{ 
                fontFamily: "'Times New Roman', serif",
                fontSize: '2rem',
                color: '#000000',
                fontWeight: 'bold',
                margin: 0
              }}>
                Centuries Mutual Times
              </h1>
            </Link>
            <Link href="/newspaper" className="btn btn-outline-dark btn-sm">
              Back to Newspaper
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8">
            {/* Article Header */}
            <div className="mb-4">
              <span className="badge bg-primary mb-2">{article.category}</span>
              <h1 className="fw-bold mb-3" style={{ 
                fontFamily: "'Times New Roman', serif",
                fontSize: '2.5rem',
                color: '#000000',
                lineHeight: '1.2'
              }}>
                {article.title}
              </h1>
              <div className="d-flex align-items-center mb-4">
                <div className="me-3">
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #14432A 0%, #1a5436 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}>
                    {article.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="mb-0 fw-bold" style={{ fontSize: '0.9rem' }}>{article.author}</p>
                  <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>{article.publishDate}</p>
                </div>
              </div>
            </div>

            {/* Article Image */}
            <div className="mb-4">
              <div style={{ 
                width: '100%',
                height: '400px',
                backgroundImage: `url("${article.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}></div>
            </div>

            {/* Google AdSense Banner */}
            <div className="mb-4 text-center">
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-YOUR_ADSENSE_ID"
                data-ad-slot="YOUR_AD_SLOT_ID"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            </div>

            {/* Article Content */}
            <div className="mb-5">
              <div 
                style={{ 
                  fontFamily: "'Times New Roman', serif",
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: '#000000'
                }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Google AdSense Rectangle */}
            <div className="mb-4 text-center">
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-YOUR_ADSENSE_ID"
                data-ad-slot="YOUR_RECTANGLE_AD_SLOT_ID"
                data-ad-format="rectangle"></ins>
            </div>

            {/* Share Buttons */}
            <div className="mb-5">
              <h5 className="mb-3">Share this article:</h5>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary btn-sm">Facebook</button>
                <button className="btn btn-outline-info btn-sm">Twitter</button>
                <button className="btn btn-outline-success btn-sm">LinkedIn</button>
                <button className="btn btn-outline-secondary btn-sm">Email</button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="ps-4">
              {/* Google AdSense Sidebar */}
              <div className="mb-4 text-center">
                <ins className="adsbygoogle"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-YOUR_ADSENSE_ID"
                  data-ad-slot="YOUR_SIDEBAR_AD_SLOT_ID"
                  data-ad-format="rectangle"></ins>
              </div>

              {/* Related Articles */}
              <div className="mb-4">
                <h4 className="fw-bold mb-3" style={{ 
                  fontFamily: "'Times New Roman', serif",
                  fontSize: '1.2rem',
                  color: '#000000'
                }}>
                  Related Articles
                </h4>
                
                {Object.entries(articles).slice(0, 3).map(([slug, relatedArticle]) => (
                  <div key={slug} className="mb-3 border-bottom pb-3">
                    <Link href={`/article/${slug}`} className="text-decoration-none">
                      <h6 className="fw-bold mb-1" style={{ 
                        fontFamily: "'Times New Roman', serif",
                        fontSize: '0.9rem',
                        color: '#000000',
                        lineHeight: '1.3'
                      }}>
                        {relatedArticle.title}
                      </h6>
                      <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>
                        {relatedArticle.publishDate}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
