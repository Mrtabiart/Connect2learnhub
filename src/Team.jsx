import React, { useState } from 'react';
import Navbar from './Navbar';
import './Team.css';

function Team() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const boardMembers = [
    {
      name: 'Mr. Abdul Sami',
      role: 'Director',
      email: 'mailto:sami@connect2learnhub.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Namood-e-Sahar',
      role: 'Director',
      email: 'mailto:sahar@connect2learnhub.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mr. Ahmed Hasan Anis',
      role: 'Director',
      email: 'mailto:ahmed@connect2learnhub.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Fauzia Raazia',
      role: 'Director',
      email: 'mailto:fauzia@connect2learnhub.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Sadaf Mansoor',
      role: 'Director',
      email: 'mailto:sadaf@connect2learnhub.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const coordinators = [
    {
      name: 'Ms. Nabiha Hasan',
      role: 'Academic Coordinator',
      email: 'mailto:nabiha@connect2learnhub.com',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Hafiza Saba Batool',
      role: 'Academic Coordinator',
      email: 'mailto:saba@connect2learnhub.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mr. Zabit Kahloon',
      role: 'Academic Coordinator',
      email: 'mailto:zabit@connect2learnhub.com',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Maira Saman',
      role: 'Academic Coordinator',
      email: 'mailto:maira@connect2learnhub.com',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Shumaila Imtiaz',
      role: 'Academic Coordinator',
      email: 'mailto:shumaila@connect2learnhub.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Saming Jamil',
      role: 'Academic Coordinator',
      email: 'mailto:saming@connect2learnhub.com',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Anooshay Kaleem',
      role: 'Academic Coordinator',
      email: 'mailto:anooshay@connect2learnhub.com',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="team-page">
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

      <div className="team-container">
        <div className="team-header">
          <h1>Meet Our Team</h1>
          <p>Get to know the dedicated professionals behind Connect to Learn Hub.</p>
        </div>

        <section className="board-section">
          <h2>Board of Directors</h2>

          <div className="board-grid">
            {boardMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <div className="member-contact">
                    <a href={member.email} className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </a>
                    {member.linkedin && (
                      <a href={member.linkedin} className="contact-icon">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="coordinators-section">
          <h2>Our Academic Coordinators</h2>

          <div className="coordinators-grid">
            {coordinators.map((coordinator, index) => (
              <div key={index} className="team-member-card">
                <div className="member-image">
                  <img src={coordinator.image} alt={coordinator.name} />
                </div>
                <div className="member-info">
                  <h3>{coordinator.name}</h3>
                  <p className="member-role">{coordinator.role}</p>
                  <div className="member-contact">
                    <a href={coordinator.email} className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </a>
                    {coordinator.linkedin && (
                      <a href={coordinator.linkedin} className="contact-icon">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;
