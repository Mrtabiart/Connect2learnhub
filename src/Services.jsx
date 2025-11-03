import React, { useState } from 'react';
import Navbar from './Navbar';
import './Services.css';

function Services() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <div className="services-page">
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

      <section className="services-hero">
        <div className="hero-content-services">
          <h1>Unlock Your Potential. Connect to Learn.</h1>
          <p>Your hub for comprehensive online courses, expert-led webinars, and professional therapeutic services to support your growth.</p>
          <button className="cta-btn">Explore Our Courses</button>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission-box">
            <h3>OUR MISSION</h3>
            <h2>To bridge the gap between ambition and opportunity.</h2>
            <p>We believe that learning and personal well-being are fundamental rights, not privileges. Our mission is to break down the barriers of cost, location, and stigma, connecting you with the world's leading experts to unlock your full potential.</p>
          </div>
          <div className="vision-box">
            <h3>OUR VISION</h3>
            <h2>A world where everyone can thrive.</h2>
            <p>We envision a future where continuous growth is an integral part of life. A supportive global community where individuals are empowered with the knowledge and mental fortitude to achieve their goals and create a positive impact.</p>
          </div>
        </div>
      </section>

      <section className="core-values">
        <h2>Our Core Values</h2>
        <p className="core-values-subtitle">These principles are the foundation of our community and guide every decision we make.</p>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-universal-access"></i>
            </div>
            <h3>Accessibility</h3>
            <p>Creating inclusive learning experiences for all ages and backgrounds.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Impact</h3>
            <p>Focusing on practical skills and knowledge that create real world change.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Community</h3>
            <p>Fostering a supportive network of learners, educators, and experts.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Growth</h3>
            <p>Committing to continuous improvement and learning on our platform.</p>
          </div>
        </div>
      </section>

      <section className="our-story">
        <div className="story-container">
          <div className="story-image">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team collaboration" />
          </div>
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Connect to Learn Hub was born from a simple yet powerful idea: everyone deserves the chance to learn and grow, without limits. Our founders, a team of educators, technologists, and mental health advocates, saw a gap in the digital landscape. While online courses were plentiful, few platforms truly integrated holistic well-being with professional development.</p>
            <p>We started in a small co-working space, fueled by coffee and a shared passion for making a difference. Today, we are a thriving global community, but our core mission remains unchanged: to empower you with the tools you need for a successful career and a balanced life.</p>
          </div>
        </div>
      </section>

      <section className="comprehensive-services">
        <h2>Our Comprehensive Services</h2>

        <div className="services-grid-layout">
          <div className="service-box">
            <div className="service-icon-box">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Engaging Online Courses</h3>
            <p>Flexible, self-paced courses on a variety of topics.</p>
          </div>
          <div className="service-box">
            <div className="service-icon-box">
              <i className="fas fa-video"></i>
            </div>
            <h3>Live & On-Demand Webinars</h3>
            <p>Join live webinars or watch recordings from industry experts.</p>
          </div>
          <div className="service-box">
            <div className="service-icon-box">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Expert Psychological Consultancy</h3>
            <p>Confidential support to navigate life's challenges.</p>
          </div>
          <div className="service-box">
            <div className="service-icon-box">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Professional Speech Therapy</h3>
            <p>Personalized therapy to improve communication skills.</p>
          </div>
          <div className="service-box">
            <div className="service-icon-box">
              <i className="fas fa-user-friends"></i>
            </div>
            <h3>Supportive Behavior Therapy</h3>
            <p>Guidance and strategies to foster positive behaviors.</p>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="why-choose-container">
          <div className="why-image">
            <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Diverse team" />
          </div>
          <div className="why-content">
            <h2>Why Connect to Learn Hub?</h2>
            <p className="why-subtitle">We provide a unique, integrated approach to learning and personal development, designed for flexibility and taught by certified professionals.</p>

            <div className="why-features">
              <div className="why-feature">
                <h4>Expert Instructors</h4>
                <p>Learn from the best. Our instructors are vetted professionals and experts in their fields.</p>
              </div>
              <div className="why-feature">
                <h4>Flexible Learning</h4>
                <p>Access your courses and sessions anytime, anywhere, on any device. Learn at your own pace.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"The online courses are incredibly well-structured and easy to follow. The self-paced format has worked!"</p>
            <div className="testimonial-author">
              <strong>- Sarah J.</strong>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Access to expert psychologists has been a game-changer for our family. Highly recommend their services."</p>
            <div className="testimonial-author">
              <strong>- Michael P.</strong>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"The flexibility of the webinars allows me to learn new skills without disrupting my busy schedule. Fantastic platform!"</p>
            <div className="testimonial-author">
              <strong>- Emily R.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join our community today and gain access to a world of knowledge and support. Let's grow together.</p>
          <button className="cta-signup-btn">Sign Up Now</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Connect to Learn Hub</h3>
            <p>Empowering minds, one connection at a time.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/webinars">Webinars</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Psychological Consultancy</a></li>
              <li><a href="#">Speech Therapy</a></li>
              <li><a href="#">Behavior Therapy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Connect to Learn Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Services;
