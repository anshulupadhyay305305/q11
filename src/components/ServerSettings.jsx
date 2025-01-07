import React, { useState, useEffect } from 'react';

const ServerSettings = () => {
  
  const [settings1, setSettings] = useState([]);
  const [rules1, setRules] = useState([]);
  
  const [loading, setLoading] = useState(true);

  // Fetch all server settings, rules, and server stats in one API call
  useEffect(() => {
    fetch('http://localhost:5000/api/server-settings')
      .then((response) => response.json())
      .then((data) => {
        setSettings(data.settings);
        setRules(data.rules);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching server settings:', error);
        setLoading(false);
      });
  }, []);


  const settings = [
    { name: 'region', value: 'europe - de' },
    { name: 'punkbaster', value: 'on' },
    { name: 'fairfight', value: 'on' },
    { name: 'password', value: 'off' },
    { name: 'preset', value: 'normal' },
    { name: 'minimap', value: 'on' },
    { name: 'only squad leader spawn', value: 'off' },
    { name: 'vehicles', value: 'on' },
    { name: 'team balance', value: 'on' },
    { name: 'minimap spotting', value: 'on' },
    { name: 'hud', value: 'on' },
    { name: '3p vehicle cam', value: 'on' },
    { name: 'regenerative health', value: 'on' },
    { name: 'kill cam', value: 'on' },
    { name: 'friendly fire', value: 'off' },
    { name: '3d spotting', value: 'on' },
    { name: 'enemy name tags', value: 'on' },
  ];

  const rules = [
    { name: 'tickets', value: '400' },
    { name: 'vehicle spawn delay', value: '25' },
    { name: 'bullet damage', value: '100' },
    { name: 'kick after team kills', value: '5' },
    { name: 'player health', value: '100' },
    { name: 'player respawn time', value: '100' },
    { name: 'kick after idle', value: '300' },
    { name: 'ban after kicks', value: '3' },
  ];

  return (
    <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', lineHeight: '20px', marginBottom: '3vh', textTransform: 'uppercase',color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2vw' }}>
        {/* Settings Section */}
        <div style={{ flex: 1 }}>
          <h6 style={{ marginBottom: '1vh' }}>SETTINGS</h6>
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
          <h6 style={{ marginBottom: '1vh' }}>ADVANCED</h6>
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
          <h6 style={{ marginBottom: '1vh' }}>RULES</h6>
          <div>
            {rules.map((rule, index) => (
              <div key={index} style={{ marginBottom: '0.5vh' }}>
                <span style={{ fontWeight: 'bold' }}>{rule.name}:</span> {rule.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerSettings;


