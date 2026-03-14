'use client'

import { useState } from 'react'
import './page.css'

export default function Home() {
  const [activeTab, setActiveTab] = useState('feed')

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1 className="logo">PUMP 💪</h1>
            <nav className="nav">
              <button className="nav-btn">Profile</button>
              <button className="nav-btn">Settings</button>
              <button className="nav-btn btn-secondary">Sign Out</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          <div className="layout">
            {/* Sidebar */}
            <aside className="sidebar">
              <div className="card user-card">
                <div className="user-avatar">JD</div>
                <h3>John Doe</h3>
                <p className="user-stats">
                  <strong>2,450</strong> cal today<br />
                  <strong>1,850</strong> cal burned
                </p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '75%' }}></div>
                </div>
                <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Log Meal
                </button>
              </div>

              <div className="card">
                <h4>Quick Stats</h4>
                <div className="stat-item">
                  <span>Streak</span>
                  <strong>14 days</strong>
                </div>
                <div className="stat-item">
                  <span>Friends</span>
                  <strong>23</strong>
                </div>
                <div className="stat-item">
                  <span>Total Workouts</span>
                  <strong>87</strong>
                </div>
              </div>
            </aside>

            {/* Feed */}
            <section className="feed">
              {/* Tab Navigation */}
              <div className="tabs">
                <button
                  className={`tab ${activeTab === 'feed' ? 'active' : ''}`}
                  onClick={() => setActiveTab('feed')}
                >
                  Feed
                </button>
                <button
                  className={`tab ${activeTab === 'following' ? 'active' : ''}`}
                  onClick={() => setActiveTab('following')}
                >
                  Following
                </button>
                <button
                  className={`tab ${activeTab === 'workouts' ? 'active' : ''}`}
                  onClick={() => setActiveTab('workouts')}
                >
                  My Workouts
                </button>
              </div>

              {/* Feed Posts */}
              {activeTab === 'feed' && (
                <div className="posts">
                  <div className="card post">
                    <div className="post-header">
                      <div className="post-user">
                        <div className="avatar">SD</div>
                        <div>
                          <strong>Sarah Davis</strong>
                          <p className="timestamp">2 hours ago</p>
                        </div>
                      </div>
                      <button className="btn-follow btn-primary">Follow</button>
                    </div>
                    <p className="post-text">
                      Just crushed a 45-minute HIIT session! 🔥 Logged 850 calories. 
                      Current intake: 2,100/2,500 cal. Feeling amazing!
                    </p>
                    <div className="post-stats">
                      <span>❤️ 42 Likes</span>
                      <span>💬 8 Comments</span>
                    </div>
                  </div>

                  <div className="card post">
                    <div className="post-header">
                      <div className="post-user">
                        <div className="avatar">MC</div>
                        <div>
                          <strong>Mike Chen</strong>
                          <p className="timestamp">4 hours ago</p>
                        </div>
                      </div>
                      <button className="btn-follow btn-secondary">Following</button>
                    </div>
                    <p className="post-text">
                      Meal prep Sunday completed! 🥗 Prepped chicken, brown rice, and 
                      veggies for the whole week. Let's get it! 💪
                    </p>
                    <div className="post-stats">
                      <span>❤️ 67 Likes</span>
                      <span>💬 15 Comments</span>
                    </div>
                  </div>

                  <div className="card post">
                    <div className="post-header">
                      <div className="post-user">
                        <div className="avatar">AJ</div>
                        <div>
                          <strong>Alex Johnson</strong>
                          <p className="timestamp">6 hours ago</p>
                        </div>
                      </div>
                      <button className="btn-follow btn-primary">Follow</button>
                    </div>
                    <p className="post-text">
                      New personal record! Hit 5 consecutive 10k runs. 🏃‍♂️ 
                      Feeling stronger every day. Who else is in their fitness journey?
                    </p>
                    <div className="post-stats">
                      <span>❤️ 89 Likes</span>
                      <span>💬 23 Comments</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Following Tab */}
              {activeTab === 'following' && (
                <div className="following-grid">
                  {['Sarah Davis', 'Mike Chen', 'Alex Johnson', 'Emma Wilson', 'James Park', 'Lisa Anderson'].map((name, i) => (
                    <div key={i} className="card following-card">
                      <div className="avatar large">{name.split(' ')[0][0]}{name.split(' ')[1][0]}</div>
                      <h4>{name}</h4>
                      <p>2,150 / 2,500 cal</p>
                      <div className="progress-bar small">
                        <div className="progress-fill" style={{ width: '86%' }}></div>
                      </div>
                      <button className="btn-secondary" style={{ width: '100%', marginTop: '0.5rem' }}>
                        Unfollow
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Workouts Tab */}
              {activeTab === 'workouts' && (
                <div className="workouts">
                  <div className="card workout">
                    <h4>Monday Strength Training</h4>
                    <p className="timestamp">March 3, 2025</p>
                    <div className="workout-details">
                      <div className="detail-item">
                        <span>Duration</span>
                        <strong>60 mins</strong>
                      </div>
                      <div className="detail-item">
                        <span>Calories Burned</span>
                        <strong>420 cal</strong>
                      </div>
                      <div className="detail-item">
                        <span>Intensity</span>
                        <strong>High</strong>
                      </div>
                    </div>
                  </div>

                  <div className="card workout">
                    <h4>Sunday Run</h4>
                    <p className="timestamp">March 2, 2025</p>
                    <div className="workout-details">
                      <div className="detail-item">
                        <span>Duration</span>
                        <strong>45 mins</strong>
                      </div>
                      <div className="detail-item">
                        <span>Distance</span>
                        <strong>8.5 km</strong>
                      </div>
                      <div className="detail-item">
                        <span>Calories Burned</span>
                        <strong>580 cal</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
