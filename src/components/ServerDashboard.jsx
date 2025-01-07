import React, { useState, useEffect } from 'react';

const ServerDashboard = () => {
  
  const [data, setData] = useState({
    settings: [],
    rules: [],
    serverStats: {},
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all server settings, rules, and server stats in one API call
  useEffect(() => {
    fetch('http://localhost:5000/api/server-settings')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setData({
          settings: data.settings,
          rules: data.rules,
          serverStats: data.serverStats,
        });
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);  // If error occurs, show error message
        setLoading(false);
      });
  }, []);  // Empty dependency array ensures the request happens once

  if (loading) {
    return <div>Loading...</div>;  // Show loading while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;  // Display error if fetch fails
  }

  const { settings, rules, serverStats } = data;

  return (
    <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', lineHeight: '20px', marginBottom: '3vh' }}>
      {/* Server Settings and Rules Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2vw' }}>
        {/* Settings Section */}
        <div style={{ flex: 1 }}>
          <h6 style={{ marginBottom: '1vh' }}>Settings</h6>
          <div>
            {settings.slice(0, 5).map((setting, index) => (
              <div key={index} style={{ marginBottom: '0.5vh' }}>
                <span style={{ fontWeight: 'bold' }}>{setting.name}:</span> {setting.value}
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Section */}
        <div style={{ flex: 1 }}>
          <h6 style={{ marginBottom: '1vh' }}>Advanced</h6>
          <div>
            {settings.slice(5).map((setting, index) => (
              <div key={index} style={{ marginBottom: '0.5vh' }}>
                <span style={{ fontWeight: 'bold' }}>{setting.name}:</span> {setting.value}
              </div>
            ))}
          </div>
        </div>

        {/* Rules Section */}
        <div style={{ flex: 1 }}>
          <h6 style={{ marginBottom: '1vh' }}>Rules</h6>
          <div>
            {rules.map((rule, index) => (
              <div key={index} style={{ marginBottom: '0.5vh' }}>
                <span style={{ fontWeight: 'bold' }}>{rule.name}:</span> {rule.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Server Stats Section */}
      <div style={{ marginTop: '3vh' }}>
        <h6>Server Stats</h6>
        <div>
          <div style={{ marginBottom: '1vh' }}>
            <span style={{ fontWeight: 'bold' }}>Current Players:</span> {serverStats.players?.current} / {serverStats.players?.max}
          </div>
          <div style={{ marginBottom: '1vh' }}>
            <span style={{ fontWeight: 'bold' }}>Ping:</span> {serverStats.ping} ms
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Tick Rate:</span> {serverStats.tickRate} Hz
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerDashboard;
