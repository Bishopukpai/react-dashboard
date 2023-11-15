import React from 'react';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <header className="home-page-header">
        <h1>Welcome to Our Application</h1>
      </header>
      <main className="home-page-content">
        <section className="featured-section">
          <h2>Featured Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            ultricies neque. Sed sit amet felis in velit suscipit cursus. Nulla
            facilisi.
          </p>
          <a href="/dashboard" className="cta-button">
            Explore More
          </a>
        </section>
        <section className="about-section">
          <h2>About Us</h2>
          <p>
            We are a leading application provider dedicated to delivering
            exceptional user experiences and innovative solutions.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage