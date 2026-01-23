import "../styles/dashboard.css"
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to the Calculator Dashboard</h1>
      </header>
      <nav className="dashboard-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
      <main className="dashboard-main">
        <div className="widget">
          <h2>A simple Calculator</h2>
          <p>Preform simple Addition, Subtraction, Division and Mitliplications</p>
        </div>
        <div className="widget">
          <h2>Widget 2: User Statistics</h2>
          <p>Display user data here.</p>
        </div>
        <div className="widget">
          <h2>Widget 3: Activity Feed</h2>
          <p>Display recent activities here.</p>
        </div>
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2026 mycalculator</p>
      </footer>
    </div>
  );
};

export default Dashboard;