import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <div className="App">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Connect2Learn Hub</span>
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#courses" className="nav-link" onClick={() => setIsMenuOpen(false)}>Courses</a>
            <a href="#webinars" className="nav-link" onClick={() => setIsMenuOpen(false)}>Webinars</a>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#team" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Team</a>
            <button className="contact-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
            <div className="user-icon" onClick={toggleLoginModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="nav-icons">
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {showLoginModal && (
        <div className="modal-overlay" onClick={toggleLoginModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Welcome Back</h3>
              <button className="close-btn" onClick={toggleLoginModal}>×</button>
            </div>
            <div className="auth-tabs">
              <button
                className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
            </div>
            <form className="auth-form">
              {activeTab === 'signup' && (
                <input type="text" placeholder="Full Name" className="auth-input" />
              )}
              <input type="email" placeholder="Email Address" className="auth-input" />
              <input type="password" placeholder="Password" className="auth-input" />
              {activeTab === 'signup' && (
                <input type="password" placeholder="Confirm Password" className="auth-input" />
              )}
              <button type="submit" className="auth-submit">
                {activeTab === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>
            <p className="auth-footer">
              {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
              <span className="auth-link" onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}>
                {activeTab === 'login' ? 'Sign up here' : 'Login here'}
              </span>
            </p>
          </div>
        </div>
      )}

      <section id="home" className="hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">Transform Your Future</div>
          <h1 className="hero-title">
            Unlock Academic and Personal Wellbeing with <span className="gradient-text">CONNECT2LEARNHUB</span>
          </h1>
          <p className="hero-subtitle">
            Your space for learning, growth, and well-being. From online tutoring, test preparation, short courses, and interactive webinars to psychological consultancy, speech therapy, and behavior therapy, we bring everything under one roof.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Start Learning
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">Explore Courses</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Instructors</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-header">
          <span className="section-badge">About Us</span>
          <h2 className="section-title">Vision Connect2Learn Hub</h2>
          <p className="section-subtitle">Transforming education through innovation and accessibility</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Students learning" />
              <div className="image-overlay"></div>
            </div>
          </div>
          <div className="about-text">
            <p>Our vision at Connect2Learn Hub is to create a world where education and well-being go hand in hand. We strive to make quality learning, skill development, and psychological support accessible and affordable for everyone, regardless of age or background.</p>
            <p>By connecting learners with expert educators, psychologists, and therapists, we aim to empower individuals to grow academically, emotionally, and personally, enabling them to achieve their fullest potential and succeed in every walk of life.</p>
            <div className="stats">
              <div className="stat">
                <h3>1,000+</h3>
                <p>Students Enrolled</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Expert Instructors</p>
              </div>
              <div className="stat">
                <h3>200+</h3>
                <p>Courses Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-header">
          <span className="section-badge">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive learning solutions for every need</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3>Online Courses</h3>
            <p>Self-paced learning with interactive content, assessments, and certifications</p>
          </div>
          <div className="service-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3>Live Tutoring</h3>
            <p>One-on-one sessions with expert tutors for personalized learning experiences</p>
          </div>
          <div className="service-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="17 2 12 7 7 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3>Webinars</h3>
            <p>Live interactive sessions with industry experts and thought leaders</p>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="section-header">
          <span className="section-badge">Meet Our Team</span>
          <h2 className="section-title">Our Team Expert</h2>
          <p className="section-subtitle">Passionate Educators & Industry Professionals</p>
        </div>
        <div className="team-grid">
          {[
            { name: 'Mr. Abdul Sami', role: 'Chief Executive Officer (CEO)',  img: '/1.jpg' },
            { name: 'Ms. Namood-e-Sahar', role: 'Founder & Platform Administration',  img: '/5.jpg' },
            { name: 'Mr. Ahmed Hasan Anis', role: 'Director Strategic Affairs', img: '/2.jpg'},
            { name: 'Ms. Fauzia Raazia', role: 'Senior Academic Advisor',  img: '/3.jpg' },
            { name: 'Ms Nabiha Hasan', role: 'Marketing & Communication Manager',  img: '/4.jpg'},
            { name: 'Ms. Hafiza Saba Batool', role: 'Advisor Islamic Studies',  img: '/5.jpg' },
          ].map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-wrapper">
                <img src={member.img} alt={member.name} />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href="#" className="team-social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                    <a href="#" className="team-social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="courses">
        <div className="section-header">
          <span className="section-badge">Learn & Grow</span>
          <h2 className="section-title">Short Courses</h2>
          <p className="section-subtitle">Quick, focused learning for immediate skill development</p>
        </div>
        <div className="courses-grid">
          {[
            { title: 'Mastering Physics Numerical', instructor: 'Ms. Zoha Fazeel', duration: '2 months', price: '3500 PKR', img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { title: 'Organic Chemistry Easy', instructor: 'Ms. Zoha Fazeel', duration: '2 months', price: '3500 PKR', img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { title: 'Human Body System Crash', instructor: 'Ms. Zoha Fazeel', duration: '1 month', price: '2000 PKR', img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { title: 'Child Behaviour Management', instructor: 'Ms. Syeda Abeeha Kanwal Abdi', duration: '1 month', price: '5000 PKR', img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { title: 'Data Analysis By SPSS - I', instructor: 'Ms. Namood-e-Sahar', duration: '2 months', price: '2000 PKR', img: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { title: 'Basic Of Research', instructor: 'Dr. Fazia Rasul', duration: '1 month', price: '1500 PKR', img: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400' },
          ].map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-image-wrapper">
                <img src={course.img} alt={course.title} />
                <div className="course-badge">Popular</div>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="course-instructor">{course.instructor}</p>
                <div className="course-meta">
                  <span className="duration">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {course.duration}
                  </span>
                  <span className="price">{course.price}</span>
                </div>
                <button className="btn-primary">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="webinars" className="webinars">
        <div className="section-header">
          <span className="section-badge">Join Live</span>
          <h2 className="section-title">Free Webinars</h2>
          <p className="section-subtitle">Free live sessions with industry experts</p>
        </div>
        <div className="webinars-grid">
          <div className="webinar-card">
            <div className="webinar-date">
              <span className="date">15</span>
              <span className="month">Jan</span>
            </div>
            <div className="webinar-content">
              <span className="webinar-badge">Upcoming</span>
              <h3>Future of AI in Education</h3>
              <p>Explore how artificial intelligence is reshaping learning experiences</p>
              <div className="webinar-meta">
                <span className="time">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  2:00 PM EST
                </span>
                <span className="speaker">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Engr. Zabit Kahlon
                </span>
              </div>
              <button className="btn-secondary">Register Now</button>
            </div>
          </div>
          <div className="webinar-card">
            <div className="webinar-date">
              <span className="date">22</span>
              <span className="month">Jan</span>
            </div>
            <div className="webinar-content">
              <span className="webinar-badge">Free</span>
              <h3>Effective Online Learning</h3>
              <p>Tips and techniques for maximizing your online learning success</p>
              <div className="webinar-meta">
                <span className="time">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  3:00 PM EST
                </span>
                <span className="speaker">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Dr. Namood e Sahar
                </span>
              </div>
              <button className="btn-secondary">Join For Free</button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-info-section">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Let's Start a Conversation</h2>
            <p className="contact-description">
              Have questions about our courses or services? We're here to help you on your learning journey. Reach out to us and let's discuss how we can support your educational goals.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4>Address</h4>
                  <p>Islamabad - Lahore, Pakistan</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>connect2learn.hub@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+92 303 0597021</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="contact-form-section">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" className="form-input" />
              </div>
              <div className="form-group">
                <select className="form-input" required>
                  <option value="">Select Subject</option>
                  <option value="courses">Course Inquiry</option>
                  <option value="webinar">Webinar Registration</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" className="form-input" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Connect2Learn Hub</h3>
            <p>Empowering learners worldwide with quality education and innovative learning experiences.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#courses">Courses</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#contact">Contact Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>connect2learn.hub@gmail.com</p>
              <p>+92 303 0597021</p>
              <p>Islamabad - Lahore, Pakistan</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Connect2Learn Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
