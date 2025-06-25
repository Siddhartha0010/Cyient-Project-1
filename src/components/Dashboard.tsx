"use client"

import type React from "react"
import { useState } from "react"
import "./Dashboard.scss"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Agent {
  id: number
  name: string
  interactions: string
  users: string
  growth: string
  likes: string
  dislikes: string
  views: string
  icon: string
}

const Dashboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const agents: Agent[] = [
    {
      id: 1,
      name: "Manufacturing Agent",
      interactions: "7,840",
      users: "980",
      growth: "In last 30 Days",
      likes: "1029",
      dislikes: "12",
      views: "1248",
      icon: "🏭",
    },
    {
      id: 2,
      name: "Plant Agent",
      interactions: "6,994",
      users: "962",
      growth: "In last 30 Days",
      likes: "1100",
      dislikes: "16",
      views: "1080",
      icon: "🏢",
    },
    {
      id: 3,
      name: "Reliability Engineers",
      interactions: "6,760",
      users: "900",
      growth: "In last 30 Days",
      likes: "1000",
      dislikes: "00",
      views: "998",
      icon: "⚡",
    },
    {
      id: 4,
      name: "Health-Med Advisor",
      interactions: "6,128",
      users: "890",
      growth: "In last 30 Days",
      likes: "980",
      dislikes: "08",
      views: "1402",
      icon: "🏥",
    },
    {
      id: 5,
      name: "Plant Operators",
      interactions: "5,980",
      users: "864",
      growth: "In last 30 Days",
      likes: "932",
      dislikes: "05",
      views: "1205",
      icon: "⚙️",
    },
  ]

  const newAgents = [
    {
      name: "Cloud-Data Agent",
      launchInfo: "This agent has launch 1 day ago, and currently it have 0 users.",
      icon: "☁️",
    },
    {
      name: "Pathology Agent",
      launchInfo: "This agent has launch 2 day ago, and currently it have 8 users.",
      icon: "🔬",
    },
    {
      name: "Solution Tech Agent",
      launchInfo: "This agent has launch 4 day ago, and currently it have 24 users.",
      icon: "💡",
    },
  ]

  const menuItems = [
    { icon: "📊", label: "Dashboard", active: true },
    { icon: "👥", label: "Agents" },
    { icon: "📈", label: "Analytics" },
    { icon: "⚙️", label: "Settings" },
    { icon: "❓", label: "Help" },
  ]

  const cardsPerPage = 3
  const totalPages = Math.ceil(agents.length / cardsPerPage)

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const getCurrentAgents = () => {
    const startIndex = currentIndex * cardsPerPage
    const endIndex = startIndex + cardsPerPage
    return agents.slice(startIndex, endIndex)
  }

  const showRightArrow = currentIndex === 0 && totalPages > 1
  const showLeftArrow = currentIndex > 0

  return (
    <div className="dashboard-wrapper">
      {/* Menu Sidebar */}
      <div className="menu-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-navigation">
          {menuItems.map((item, index) => (
            <div key={index} className={`nav-item ${item.active ? "active" : ""}`}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content-area">
        {/* Header Section */}
        <div className="content-header">
          <div className="header-left">
            <h1 className="welcome-message">
              Hello Samrat, <span className="welcome-subtitle">Welcome to the admin dashboard.</span>
            </h1>
          </div>
          <div className="header-right">
            <div className="notification-bell">
              <span className="bell-icon">🔔</span>
            </div>
          </div>
        </div>

        {/* Main Content Body */}
        <div className="content-main">
          {/* Top Section - Agents */}
          <div className="agents-container">
            {/* Popular Agents Section */}
            <div className="popular-agents-section">
              <div className="section-title">
                <h2>Popular Agents 🔥</h2>
                <p>Top 5 - Agents used most frequently in the last 30 days</p>
              </div>

              <div className="agents-carousel">
                <div className="agents-cards-container">
                  {getCurrentAgents().map((agent, index) => (
                    <div key={`${agent.id}-${currentIndex}-${index}`} className="agent-card">
                      <div className="card-header">
                        <div className="agent-avatar">{agent.icon}</div>
                        <div className="agent-details">
                          <span className="agent-tag">Popular Agent - {agent.id}</span>
                          <h3 className="agent-title">{agent.name}</h3>
                        </div>
                      </div>

                      <div className="card-content">
                        <div className="interaction-stats">
                          <span className="stats-label">User Interaction</span>
                          <span className="stats-description">Number of time users intact with Agent</span>
                          <div className="interaction-number">{agent.interactions}</div>
                          <span className="growth-badge">{agent.growth}</span>
                        </div>

                        <div className="users-stats">
                          <span className="users-count">{agent.users}</span>
                          <span className="users-text">People used this agent</span>
                        </div>

                        <div className="bottom-stats">
                          <div className="stat-item">
                            <span className="stat-icon">👤</span>
                            <span className="stat-number">{agent.likes}</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-icon">👎</span>
                            <span className="stat-number">{agent.dislikes}</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-icon">👍</span>
                            <span className="stat-number">{agent.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {showRightArrow && (
                  <div className="navigation-arrow right-arrow">
                    <button className="arrow-button" onClick={handleNext}>
                      →
                    </button>
                  </div>
                )}

                {showLeftArrow && (
                  <div className="navigation-arrow left-arrow">
                    <button className="arrow-button" onClick={handlePrev}>
                      ←
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Newly Launch Agents Section */}
            <div className="newly-launch-section">
              <div className="section-title">
                <h2>Newly Launch Agents ✨</h2>
                <p>Some newly launch agents which has been recently published</p>
              </div>

              <div className="new-agents-list">
                {newAgents.map((agent, index) => (
                  <div key={index} className="new-agent-card">
                    <div className="new-agent-icon">{agent.icon}</div>
                    <div className="new-agent-info">
                      <h4 className="new-agent-name">{agent.name}</h4>
                      <p className="new-agent-description">{agent.launchInfo}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="see-all-container">
                <button className="see-all-button">See All Agents</button>
              </div>
            </div>
          </div>

          {/* Bottom Section - Charts */}
          <div className="charts-container">
            <div className="charts-top-row">
              {/* Growth Performance Chart */}
              <div className="chart-section">
                <div className="chart-title">
                  <h3>Agents Growth Performance 📈</h3>
                  <p>Agent has been created by the trainers over the time</p>
                </div>
                <div className="chart-controls">
                  <span className="chart-legend">Agents Created - Against Time</span>
                  <select className="year-dropdown">
                           <option value="2022">2022</option>
                           <option value="2023">2023</option>
                           <option value="2024" selected>2024</option>
                           <option value="2025">2025</option>
</select>

                </div>
                <div className="chart-area">
                  <HighchartsReact
                         highcharts={Highcharts}
                               options={{
                                   chart: {
                                   type: 'column',
                                   backgroundColor: 'transparent',
                                           },
                                    title: { text: '' },
                                    xAxis: {
                                    categories: [
                                                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                                                ],
                                    crosshair: true,
                                    title: { text: 'Month' },
                                    },
                                    yAxis: {
                                          min: 0,
                                          title: { text: 'Total number of agents' },
                                           },
                                    tooltip: {
                                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                    pointFormat:
                                    '<tr><td style="padding:0">Agents created: </td>' +
                                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
                                    footerFormat: '</table>',
                                    shared: true,
                                    useHTML: true,
                                    },
                                   plotOptions: {
                                            column: {
                                                       borderRadius: 5,
                                                       pointPadding: 0.05,
                                                       borderWidth: 0,
                                                       color: '#3498db',
                                                    },
                                                 },
                                     series: [
                         {
                            name: 'Agents Created',
                             data: [43, 35, 19, 36, 11, 48, 30, 9, 26, 21, 34, 17],
                             type: 'column',
                          },
                                             ],
                                                         }}
                                                                />

                </div>
              </div>

              {/* User Statistics */}
              <div className="stats-section">
                <div className="stats-title">
                  <h3>Number of User / Trainer 👥</h3>
                  <p>Total number of user & trainers accounts registered over the time</p>
                </div>
                <div className="stats-grid">
                  <div className="stat-card blue-card">
                    <div className="card-icon">👥</div>
                    <div className="card-number">2084</div>
                    <div className="card-label">Total Users</div>
                    <div className="card-description">Total number of users are register till now.</div>
                  </div>
                  <div className="stat-card gray-card">
                    <div className="card-icon">👥</div>
                    <div className="card-number">24</div>
                    <div className="card-label">Inactive Users</div>
                    <div className="card-description">Total number of inactive users account has been deleted.</div>
                  </div>
                  <div className="stat-card teal-card">
                    <div className="card-icon">👥</div>
                    <div className="card-number">1912</div>
                    <div className="card-label">Active Users</div>
                    <div className="card-description">Total number of active users are available.</div>
                  </div>
                  <div className="stat-card yellow-card">
                    <div className="card-icon">👥</div>
                    <div className="card-number">148</div>
                    <div className="card-label">Active Trainers</div>
                    <div className="card-description">Total number of active trainers are available.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Circular Charts */}
            <div className="charts-bottom-row">
              <div className="circular-chart-item">
                <h4>All Agents</h4>
                <div className="circular-chart-wrapper">
                  <div className="circular-progress">
                    <svg className="progress-ring" width="120" height="120">
                      <circle
                        className="progress-ring-background"
                        stroke="#707070"
                        strokeWidth="12"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                      />
                      <circle
                        className="progress-ring-progress"
                        stroke="#3498db"
                        strokeWidth="12"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                        strokeDasharray="314.16"
                        strokeDashoffset="62.83"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="chart-center-content">
                      <div className="circle-number">240</div>
                      <div className="circle-label">Agents</div>
                    </div>
                  </div>
                </div>
                <p>Total number of available agents, among the number of users</p>
                <div className="circle-stats">
                  <span className="users-info">
                    <span className="users-icon">👥</span>
                    <span className="users-text">Users</span>
                    <span className="users-number">1912</span>
                  </span>
                </div>
              </div>

              <div className="circular-chart-item">
                <h4 id="active">Active Agents</h4>
                <div className="circular-chart-wrapper">
                  <div className="circular-progress">
                    <svg className="progress-ring" width="120" height="120">
                      <circle
                        className="progress-ring-background"
                        stroke="#707070"
                        strokeWidth="12"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                      />
                      <circle
                        className="progress-ring-progress"
                        stroke="#1597A6"
                        strokeWidth="12"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                        strokeDasharray="314.16"
                        strokeDashoffset="94.25"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="chart-center-content">
                      <div className="circle-number">180</div>
                      <div className="circle-label">Agents</div>
                    </div>
                  </div>
                </div>
                <p>Total number of active agents, among the number of users</p>
                <div className="circle-stats">
                  <span className="users-info">
                    <span className="users-icon">👥</span>
                    <span className="users-text">Users</span>
                    <span className="users-number">1912</span>
                  </span>
                </div>
              </div>

              <div className="circular-chart-item">
                <h4>Inactive Agents</h4>
                <div className="circular-chart-wrapper">
                  <div className="circular-progress">
                    <svg className="progress-ring" width="120" height="120">
                      <circle
                        className="progress-ring-background"
                        stroke="#707070"
                        strokeWidth="12"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                      />
                      <circle
                        className="progress-ring-progress"
                        stroke="#707070"
                        strokeWidth="12"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                        strokeDasharray="314.16"
                        strokeDashoffset="235.62"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="chart-center-content">
                      <div className="circle-number">60</div>
                      <div className="circle-label">Agents</div>
                    </div>
                  </div>
                </div>
                <p>Total number of inactive agents, among the number of users</p>
                <div className="circle-stats">
                  <span className="users-info">
                    <span className="users-icon">👥</span>
                    <span className="users-text">Users</span>
                    <span className="users-number">136</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
