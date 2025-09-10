import React, { useState } from "react";
import "./About.css"; 
import Navbar from './Navbar';
import aboutImg from "./assets/about.png";

function About() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar toggleLoginModal={toggleLoginModal} />

      {/* About Section */}
      <section className="about-sec">
        <div className="main-container">
          <div className="grid">
            <div className="before-content">
              <div className="content">
                <h1 className="first-h1">About us</h1>
                <p>
                  Become an instructor and change
                  <br />- lives including your own
                </p>
                <div className="hero-btn">
                  <button className="neu-button">Get Start</button>
                </div>
              </div>
            </div>
            <div className="img-1">
              <img
                src={aboutImg}
                alt="about-section-pic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="about-section">
        <div className="main-container">
          {/* Top heading */}
          <div className="para">
            <p className="f-para">
              <i className="fas fa-layer-group icon"></i>
              Categories
            </p>
          </div>
          <div className="h1">
            <h1 className="heading">Explore categories</h1>
          </div>

          {/* First grid (3 cards) */}
          <div className="container">
            <div className="main-card">
              <div className="card">
                <div className="card-1">
                  <div className="icon">📢</div>
                  <p className="para1">4 Course</p>
                </div>
                <h2 className="h2">Digital Marketing</h2>
                <p className="h2-p">
                  Facebook/Instagram ad setup highly valuable for business & freelance
                </p>
              </div>

              <div className="card">
                <div className="card-1">
                  <div className="icon">💻</div>
                  <p className="para1">6 Course</p>
                </div>
                <h2 className="h2">Web Development</h2>
                <p className="h2-p">
                  Learn to build modern, responsive, and high-performing websites from scratch using industry-standard technologies — HTML, CSS, JavaScript, React, and more.
                </p>
              </div>

              <div className="card">
                <div className="card-1">
                  <div className="icon">🎨</div>
                  <p className="para1">7 Course</p>
                </div>
                <h2 className="h2">Web Designing</h2>
                <p className="h2-p">
                  Design beautiful, user-focused websites using modern tools and trends.
                </p>
              </div>
            </div>
          </div>

          {/* Second grid (3 cards) */}
          <div className="container">
            <div className="main-card">
              <div className="card">
                <div className="card-1">
                  <div className="icon">🅰️</div>
                  <p className="para1">8 Course</p>
                </div>
                <h2 className="h2">Spoken English</h2>
                <p className="h2-p">
                  Learn to speak English clearly, confidently, and effectively in real-life situations through practical lessons, live practice, and expert guidance.
                </p>
              </div>

              <div className="card">
                <div className="card-1">
                  <div className="icon">🎬</div>
                  <p className="para1">2 Course</p>
                </div>
                <h2 className="h2">Video Editing</h2>
                <p className="h2-p">
                  Learn how to edit professional-quality videos using industry-standard tools and techniques — from basic cuts to cinematic effects.
                </p>
              </div>

              <div className="card">
                <div className="card-1">
                  <div className="icon">📑</div>
                  <p className="para1">3 Course</p>
                </div>
                <h2 className="h2">Business Negotiation</h2>
                <p className="h2-p">
                  Learn how to negotiate confidently, close deals effectively, and build long-term business relationships with strategic communication techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
