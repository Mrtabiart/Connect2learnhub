import React, { useState } from 'react';
import Navbar from './Navbar';
import './Courses.css';

function Courses() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Newest');

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const categories = [
    'All Categories',
    'Health & Medicine',
    'Parenting & Child Development',
    'Academic & Professional Skills',
    'STEM'
  ];

  const courses = [
    {
      id: 1,
      title: 'Human Body Systems',
      category: 'Health & Medicine',
      instructor: 'Dr. Alan Grant',
      description: 'A comprehensive overview of the major organ systems in the human body.',
      price: 200,
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Child Behavior Management',
      category: 'Parenting & Child Development',
      instructor: 'Dr. Emily Carter',
      description: 'Learn effective strategies to manage child behavior and foster a positive environment.',
      price: 150,
      image: 'https://images.pexels.com/photos/1834400/pexels-photo-1834400.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Basics of Research',
      category: 'Academic & Professional Skills',
      instructor: 'Prof. Samuel Chen',
      description: 'Understand the fundamentals of research methodology, design, and ethics.',
      price: 120,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Data Analysis by SPSS - I',
      category: 'Academic & Professional Skills',
      instructor: 'Dr. Isabella Rossi',
      description: 'Navigate the SPSS interface, perform descriptive analysis, and create charts.',
      price: 250,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: 5,
      title: 'Mastering Physics Numericals',
      category: 'STEM',
      instructor: 'Dr. Ben Carter',
      description: 'Develop problem-solving skills for complex physics numericals and equations.',
      price: 180,
      image: 'https://images.pexels.com/photos/8326743/pexels-photo-8326743.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'IELTS Preparation Course',
      category: 'Academic & Professional Skills',
      instructor: 'Maria Garcia',
      description: 'Comprehensive training for all four modules: Listening, Reading, Writing, and Speaking.',
      price: 300,
      image: 'https://images.pexels.com/photos/5428001/pexels-photo-5428001.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Organic Chemistry Made Easy',
      category: 'STEM',
      instructor: 'Dr. Richard Chen',
      description: 'Simplify complex concepts in organic chemistry with intuitive explanations.',
      price: 220,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'All Categories' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="courses-page">
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

      <div className="courses-container">
        <div className="courses-header">
          <h1>Explore Our Courses</h1>
          <p>Find the perfect course to advance your skills and knowledge.</p>
        </div>

        <div className="courses-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search for courses (e.g., 'SPSS', 'Physics')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="sort-dropdown">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className={`course-card-item ${course.featured ? 'featured' : ''}`}>
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-info">
                <span className="course-category">{course.category}</span>
                <h3>{course.title}</h3>
                <div className="instructor-info">
                  <div className="instructor-avatar"></div>
                  <span>{course.instructor}</span>
                </div>
                <p>{course.description}</p>
                <div className="course-footer">
                  <span className="course-price">${course.price}</span>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-results">
            <p>No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
