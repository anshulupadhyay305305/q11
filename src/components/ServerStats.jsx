import React, { useState, useEffect } from 'react';

function ServerStats() {
  

  return (
    <div className="server__current-stats-w" style={{ display: 'flex', color: 'white' }}>
      <div className="server__current-stats">
        <div className="server__current-stats-h">PLAYERS</div>
        <div className="server__current-stats-i-w" style={{ display: 'flex', fontSize: '20px' }}>
          <div className="server__current-stats-i">60</div>
          <div className="server__current-stats-iline">/</div>
          <div className="server__current-stats-i">64</div>
        </div>
      </div>
      <div className="server__current-stats">
        <div className="server__current-stats-h" style={{ fontsize: '10px' }}>PING</div>
        <div className="server__current-stats-i-w" style={{ display: 'flex', fontSize: '20px' }}>
          <div className="server__current-stats-i">104</div>
          <div className="server__current-stats-ping">ms</div>
        </div>
      </div>
      <div className="server__current-stats">
        <div className="server__current-stats-h">TICKRATE</div>
        <div className="server__current-stats-i-w" style={{ display: 'flex', fontSize: '20px' }}>
          <div className="server__current-stats-i">60 </div>
          <div className="server__current-stats-hz">Hz</div>
        </div>
      </div>
    </div>
  );
}

export default ServerStats;
