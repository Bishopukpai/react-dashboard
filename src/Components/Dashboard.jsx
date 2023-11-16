import React, { useState } from 'react';
import '../App.css';

const Dashboard = () => {
 
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
      </header>
      <main className="dashboard-content">
        <section className="dashboard-section">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            <li>Task 1 completed</li>
            <li>Task 2 in progress</li>
            <li>Meeting at 2:00 PM</li>
          </ul>
        </section>
        <section className="dashboard-section">
          <h2>Your Stats</h2>
          <div className="stats">
            <div className="stat">
              <h3>Total Orders</h3>
              <p>25</p>
            </div>
            <div className="stat">
              <h3>Revenue</h3>
              <p>$1,500</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;