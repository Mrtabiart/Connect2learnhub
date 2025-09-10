import React, { useState } from 'react';
import sadafimg from "./assets/sadafimg.jpg";
import './Home.css';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Connect2Learn Hub</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
             <a href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Services</a>
            <a href="#team" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Team</a>
            <a href="#blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</a>
            <button className="contact-btn">Contact Us</button>
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

      {/* Login Modal */}
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Unlock Academic and Personal Wellbeing with <b>CONNECT2LEARNHUB</b></h1>
          <p className="hero-subtitle">Your space for learning, growth, and well-being. From online tutoring, test preparation, short courses, and interactive webinars to psychological consultancy,
            <br /> speech therapy, and behavior therapy, we bring everything under one roof. Our mission is simple: to make quality education and mental health support
            <br /> accessible, affordable, and impactful for everyone. At <b>Connect 2 Learn hub</b>, we connect you with experts who help you learn, grow, and succeed.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Learning</button>
            <button className="btn-secondary">Explore Courses</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="section-header">
          <h2 className="section-title">Vision Connect2Learn Hub</h2>
          <p className="section-subtitle">Transforming education through innovation and accessibility</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Students learning" />
          </div>
          <div className="about-text">
            <p>Our vision at Connect2Learn Hub is to create a world where education and well-being go hand in hand. We strive to make quality learning, skill development, and psychological support accessible and affordable for everyone, regardless of age or background. By connecting learners with expert educators, psychologists, and therapists, we aim to empower individuals to grow academically, emotionally, and personally, enabling them to achieve their fullest potential and succeed in every walk of life.</p>
            <div className="stats">
              <div className="stat">
                <h3>10,000+</h3>
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

      {/* Our Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive learning solutions for every need</p>
        </div>
        <div className="services-grid">
          <div className="service-card loading">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Online Courses</h3>
            <p>Self-paced learning with interactive content, assessments, and certifications</p>
          </div>
          <div className="service-card loading">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M15 10L19 14L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4V16C4 17.1046 4.89543 18 6 18H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Live Tutoring</h3>
            <p>One-on-one sessions with expert tutors for personalized learning experiences</p>
          </div>
          <div className="service-card loading">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polygon points="10,8 16,12 10,16" fill="currentColor"/>
              </svg>
            </div>
            <h3>Webinars</h3>
            <p>Live interactive sessions with industry experts and thought leaders</p>
          </div>
          <div className="service-card loading">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Certification</h3>
            <p>Industry-recognized certificates to boost your career prospects</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="team">
        <div className="section-header">
          <h2 className="section-title">Our Team Expert</h2>
          <p className="section-subtitle">Passionate Educators & Industry Professionals </p>
        </div>
        <div className="team-grid">
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dr. Sarah Johnson" />
            <h3>Mr. Abdul Sami</h3>
            <p className="team-role">Cheif Executive Officer (CEO)</p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Prof. Michael Chen" />
            <h3>Ms. Namood-e-Sahar</h3>
            <p className="team-role">Founder & Platform Administration</p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Maria Rodriguez" />
            <h3>Mr. Ahmed Hasan Anis</h3>
            <p className="team-role">Director Strategic Affairs</p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dr. James Wilson" />
            <h3>Ms. Fauzia Raazia</h3>
            <p className="team-role">Senior Academic Advisor</p>
          </div>
          <div className="team-card loading">
            <img   src={sadafimg} alt="Emily Parker" />
            <h3>Ms. Sadaf Mansoor</h3>
            <p className="team-role">Senior Financial Advisor</p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dr. Robert Kim" />
            <h3>Ms Nabiha Hasan</h3>
            <p className="team-role">Marketing & Communication Manager</p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Linda Thompson" />
            <h3>Ms. Hafiza Saba Batool</h3>
            <p className="team-role">Advisor Islamic Studies</p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dr. Ahmed Hassan" />
            <h3>Zabit Kahlon</h3>
            <p className="team-role">Manager Web Operations & Engineer</p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Jessica Davis" />
            <h3>Ms. Maria Saman</h3>
            <p className="team-role">Academic Coordinator  <br />(PAK)
            </p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dr. Carlos Martinez" />
            <h3>Ms. Shumaila Imtiaz</h3>
            <p className="team-role">Academic Coordinator  <br />(AUS) 
            </p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dr. Carlos Martinez" />
            <h3>Ms. Samina Jamil</h3>
            <p className="team-role">Academic Coordinator 
              <br />
              (UK)
            </p>
          </div>
          <div className="team-card loading">
            <img src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dr. Carlos Martinez" />
            <h3>Ms. Anooshay Kaleem</h3>
            <p className="team-role">Academic Coordinator   <br />
            (UAE)
            </p>
          </div>
        </div>
      </section>

      {/* Short Courses Section */}
      <section className="courses">
        <div className="section-header">
          <h2 className="section-title">Short Courses</h2>
          <p className="section-subtitle">Quick, focused learning for immediate skill development</p>
        </div>
        <div className="courses-grid">
          <div className="course-card loading">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Digital Marketing" />
            <div className="course-content">
              <h3>Mastering Physics Numerical</h3>
              <p>Ms. Zoha Fazeel</p>
              <div className="course-meta">
                <span className="duration">2 months</span>
                <span className="price">3500 PKR</span>
              </div>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
          <div className="course-card loading">
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Data Analysis" />
            <div className="course-content">
              <h3>Organic Chemistry Easy</h3>
              <p>Ms. Zoha Fazeel</p>
              <div className="course-meta">
                <span className="duration">2 months</span>
                <span className="price">3500 PKR</span>
              </div>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
          <div className="course-card loading">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Web Development" />
            <div className="course-content">
              <h3>Human Body System Crash</h3>
              <p>Ms. Zoha Fazeel</p>
              <div className="course-meta">
                <span className="duration">1 month</span>
                <span className="price">2000 PKR</span>
              </div>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
          <div className="course-card loading">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Web Development" />
            <div className="course-content">
              <h3>Child Behaviour Management</h3>
              <p>Ms. Syeda Abeeha Kanwal Abdi</p>
              <div className="course-meta">
                <span className="duration">1 month</span>
                <span className="price">5000 PKR</span>
              </div>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
          <div className="course-card loading">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Web Development" />
            <div className="course-content">
              <h3>Data Analysis By SPSS - I</h3>
              <p>Ms. Namood-e-Sahar</p>
              <div className="course-meta">
                <span className="duration">2 month</span>
                <span className="price">2000 PKR</span>
              </div>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
          <div className="course-card loading">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Web Development" />
            <div className="course-content">
              <h3>Data Analysis By SPSS - II</h3>
              <p>Ms. Namood-e-Sahar</p>
              <div className="course-meta">
                <span className="duration">2 month</span>
                <span className="price">3500 PKR</span>
              </div>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
          <div className="course-card loading">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Web Development" />
            <div className="course-content">
              <h3>Basic Of Research</h3>
              <p>Dr. Fazia Rasul</p>
              <div className="course-meta">
                <span className="duration">1 month</span>
                <span className="price">1500 PKR</span>
              </div>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
          <div className="course-card loading">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Web Development" />
            <div className="course-content">
              <h3>Article Writing & Publications</h3>
              <p>Ms. Namood-e-Sahar</p>
              <div className="course-meta">
                <span className="duration">1 month</span>
                <span className="price">1500 PKR</span>
              </div>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="webinars">
        <div className="section-header">
          <h2 className="section-title">Free Webinars</h2>
          <p className="section-subtitle">Free live sessions with industry experts</p>
        </div>
        <div className="webinars-grid">
          <div className="webinar-card loading">
            <div className="webinar-date">
              <span className="date">15</span>
              <span className="month">Jan</span>
            </div>
            <div className="webinar-content">
              <h3>Upcoming Webinar</h3>
              <p>Explore how artificial intelligence is reshaping learning experiences</p>
              <div className="webinar-meta">
                <span className="time">2:00 PM EST</span>
                <span className="speaker">Engr. Zabit Kahlon</span>
              </div>
              <button className="btn-secondary">Register Now</button>
            </div>
          </div>
          <div className="webinar-card loading">
            <div className="webinar-date">
              <span className="date">22</span>
              <span className="month">Jan</span>
            </div>
            <div className="webinar-content">
              <h3>Free Webinars</h3>
              <p>Tips and techniques for maximizing your online learning success</p>
              <div className="webinar-meta">
                <span className="time">3:00 PM EST</span>
                <span className="speaker">Dr. Namood e Sahar</span>
              </div>
              <button className="btn-secondary">Join For Free</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <a href="#" className="social-icon" title="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" title="YouTube">
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
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                <span>Email :</span>
                connect2learn.hub@gmail.com
              </p>
              <p>
                <span>Cell No .</span>
                +92 303 0597021
              </p>
              <p>
                <span>Address</span>
                Islamabad - Lahore , Pakistan
              </p>
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