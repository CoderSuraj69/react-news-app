import React, { useState } from 'react';
import './NewsLandingPage.css';

const NewsLandingPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample news data
  const newsData = {
    general: [
      {
        id: 1,
        title: 'Global Summit Addresses Climate Change Concerns',
        excerpt: 'World leaders gather to discuss new policies to combat rising global temperatures.',
        date: 'May 15, 2023',
        category: 'Politics',
        image: 'https://via.placeholder.com/400x250?text=Climate+Summit'
      },
      {
        id: 2,
        title: 'New Study Reveals Benefits of Mediterranean Diet',
        excerpt: 'Research confirms significant health improvements for followers of this eating pattern.',
        date: 'May 14, 2023',
        category: 'Health',
        image: 'https://via.placeholder.com/400x250?text=Mediterranean+Diet'
      }
    ],
    technology: [
      {
        id: 3,
        title: 'Tech Giant Unveils Revolutionary AI Assistant',
        excerpt: 'The new system promises to transform how we interact with digital devices.',
        date: 'May 13, 2023',
        category: 'Technology',
        image: 'https://via.placeholder.com/400x250?text=AI+Assistant'
      },
      {
        id: 4,
        title: 'Quantum Computing Breakthrough Announced',
        excerpt: 'Scientists achieve stable quantum operations at room temperature.',
        date: 'May 12, 2023',
        category: 'Science',
        image: 'https://via.placeholder.com/400x250?text=Quantum+Computing'
      }
    ],
    sports: [
      {
        id: 5,
        title: 'Underdog Team Wins Championship Finals',
        excerpt: 'Against all odds, the team secured their first title in franchise history.',
        date: 'May 11, 2023',
        category: 'Sports',
        image: 'https://via.placeholder.com/400x250?text=Championship+Win'
      },
      {
        id: 6,
        title: 'Olympic Committee Announces New Host City',
        excerpt: 'The games will return to this location after 32 years.',
        date: 'May 10, 2023',
        category: 'Sports',
        image: 'https://via.placeholder.com/400x250?text=Olympics+2028'
      }
    ]
  };

  const featuredNews = {
    id: 0,
    title: 'Breaking: Major Economic Reform Package Passed',
    excerpt: 'The comprehensive legislation aims to address inflation and stimulate job growth across multiple sectors.',
    date: 'May 16, 2023',
    category: 'Economy',
    image: 'https://via.placeholder.com/800x450?text=Economic+Reform'
  };

  const filteredNews = newsData[activeCategory].filter(news => 
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="news-landing-page">
      {/* Header */}
      <header className="news-header">
        <div className="header-top">
          <div className="container">
            <div className="logo">NewsDaily</div>
            <div className="date-display">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search news..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
        
        <nav className="news-nav">
          <div className="container">
            <ul>
              <li><button onClick={() => setActiveCategory('general')} className={activeCategory === 'general' ? 'active' : ''}>Headlines</button></li>
              <li><button onClick={() => setActiveCategory('technology')} className={activeCategory === 'technology' ? 'active' : ''}>Technology</button></li>
              <li><button onClick={() => setActiveCategory('sports')} className={activeCategory === 'sports' ? 'active' : ''}>Sports</button></li>
              <li><button>Business</button></li>
              <li><button>Entertainment</button></li>
              <li><button>Health</button></li>
              <li><button>Science</button></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Featured News */}
      <section className="featured-news">
        <div className="container">
          <div className="featured-card">
            <div className="featured-image">
              <img src={featuredNews.image} alt={featuredNews.title} />
              <span className="category-badge">{featuredNews.category}</span>
            </div>
            <div className="featured-content">
              <h2>{featuredNews.title}</h2>
              <p>{featuredNews.excerpt}</p>
              <div className="news-meta">
                <span className="date">{featuredNews.date}</span>
                <button className="read-more">Read Full Story</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Category Section */}
      <section className="category-news">
        <div className="container">
          <h2 className="section-title">{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} News</h2>
          
          {filteredNews.length === 0 ? (
            <p className="no-results">No news articles found matching your search.</p>
          ) : (
            <div className="news-grid">
              {filteredNews.map(news => (
                <div className="news-card" key={news.id}>
                  <div className="news-image">
                    <img src={news.image} alt={news.title} />
                    <span className="category-badge">{news.category}</span>
                  </div>
                  <div className="news-content">
                    <h3>{news.title}</h3>
                    <p className="excerpt">{news.excerpt}</p>
                    <div className="news-meta">
                      <span className="date">{news.date}</span>
                      <button className="read-more">Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for daily news updates</p>
          <form>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="news-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>NewsDaily</h3>
              <p>Delivering accurate and timely news from around the world since 2005.</p>
            </div>
            <div className="footer-section">
              <h3>Categories</h3>
              <ul>
                <li>World</li>
                <li>Politics</li>
                <li>Business</li>
                <li>Technology</li>
                <li>Sports</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Advertise</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2023 NewsDaily. All rights reserved.</p>
            <div className="social-links">
              <span>Follow us:</span>
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#instagram">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsLandingPage;