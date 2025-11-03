import React, { useState } from 'react';
import Navbar from './Navbar';
import './Webinars.css';

function Webinars() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const upcomingWebinars = [
    {
      date: 'Oct 25, 2024',
      topic: 'Cyber Security Essentials',
      speaker: 'Dr. Evelyn Reed',
      time: '2:00 PM EST'
    },
    {
      date: 'Nov 02, 2024',
      topic: 'Drug Awareness & Prevention',
      speaker: 'Mark Chen',
      time: '3:00 PM EST'
    },
    {
      date: 'Nov 15, 2024',
      topic: 'Mental Wellness in the Workplace',
      speaker: 'Dr. Anya Sharma',
      time: '1:00 PM EST'
    },
    {
      date: 'Nov 28, 2024',
      topic: 'IELTS Orientation Session',
      speaker: 'Prof. Leo Carter',
      time: '4:00 PM EST'
    }
  ];

  const workshops = [
    {
      title: 'Amazon Virtual Assistant Guided Training',
      description: 'A comprehensive, hands-on workshop to master the skills needed to become a successful Amazon VA.',
      link: '#'
    },
    {
      title: 'Video Editing for YouTube',
      description: 'Learn the fundamentals of video editing to create engaging content for your YouTube channel.',
      link: '#'
    }
  ];

  const categories = ['All', 'Cyber Security', 'Wellness', 'Professional Skills'];

  return (
    <div className="webinars-page">
      <Navbar toggleLoginModal={toggleLoginModal} />

      {showLoginModal && (
        <div className="modal-overlay" onClick={toggleLoginModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Welcome Back</h3>
              <button className="close-btn" onClick={toggleLoginModal}>×</button>
            </div>
            <div className="auth-tabs">
              <button className="auth-tab active">Login</button>
              <button className="auth-tab">Sign Up</button>
            </div>
            <form className="auth-form">
              <input type="email" placeholder="Email Address" className="auth-input" />
              <input type="password" placeholder="Password" className="auth-input" />
              <button type="submit" className="auth-submit">Sign In</button>
            </form>
            <p className="auth-footer">Don't have an account? <span className="auth-link">Sign up here</span></p>
          </div>
        </div>
      )}

      <div className="webinars-container">
        <div className="webinars-header">
          <h1>Webinars & Workshops</h1>
          <p>Explore our live and recorded sessions to expand your knowledge.</p>
        </div>

        <div className="webinars-search-filters">
          <div className="search-bar-webinar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search by topic or speaker"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="category-filter">
            <label>Category:</label>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="quick-filters">
            <button className="filter-btn">Cyber Security</button>
            <button className="filter-btn">Wellness</button>
            <button className="filter-btn">Professional Skills</button>
          </div>
        </div>

        <div className="webinars-tabs">
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Webinars
          </button>
          <button
            className={`tab-btn ${activeTab === 'recorded' ? 'active' : ''}`}
            onClick={() => setActiveTab('recorded')}
          >
            Recorded Webinars
          </button>
        </div>

        {activeTab === 'upcoming' && (
          <div className="webinars-table-container">
            <table className="webinars-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>TOPIC</th>
                  <th>SPEAKER(S)</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {upcomingWebinars.map((webinar, index) => (
                  <tr key={index}>
                    <td>{webinar.date}</td>
                    <td><strong>{webinar.topic}</strong></td>
                    <td>{webinar.speaker}</td>
                    <td>
                      <button className="register-btn">Register Now</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="workshops-section">
          <h2>Training Workshops</h2>
          <p className="workshops-subtitle">Dive deeper with our multi-session guided training workshops.</p>

          <div className="workshops-grid">
            {workshops.map((workshop, index) => (
              <div key={index} className="workshop-card">
                <h3>{workshop.title}</h3>
                <p>{workshop.description}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination">
          <button className="page-btn">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="page-dots">...</span>
          <button className="page-btn">8</button>
          <button className="page-btn">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Webinars;
