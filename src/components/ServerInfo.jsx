import React from 'react';
import { Box, Typography } from '@mui/material';

const ServerInfo = () => {
  return (
     
     <Box sx={{ padding: 2, }}>
      <Typography 
        sx={{
          '-webkit-text-size-adjust': '100%',
          cursor: 'none',
          boxSizing: 'border-box',
          width: '80vh',
          color: 'rgba(255, 255, 255, .8)',
          letterSpacing: '.08vh',
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: '2.5vh',
          fontWeight: 600,
          lineHeight: '1.8vh'
        }}
      >
        <div className="server__name">! RC3-BASEMAPS</div>
        <br/>
        <div className="server__info" style={{ display: 'flex' }}>
          <img 
            alt="America Flag" 
            loading="lazy" 
            src="https://cdn.prod.website-files.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg" 
            className="server__flag" 
            style={{marginTop: '4px',marginLeft: '-10px', marginRight: '-5px', width: '40px', height: '12px' }}
          />

          <div className="server__mode" style={{fontSize: '1.5vh', marginTop: '+4px' }}>CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ</div>
          <br/>
          <br/>
        </div>
      </Typography>
      <Typography 
        sx={{
          '-webkit-text-size-adjust': '100%',
          cursor: 'none',
          boxSizing: 'border-box',
          width: '80vh',
          color: 'rgba(255, 255, 255, .8)',
          letterSpacing: '.08vh',
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: '1.5vh',
          fontWeight: 600,
          lineHeight: '1.8vh'
        }}
      >
        <div className="server__desc">
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d
        </div>
      </Typography>
      <br/>
      <div className="server__buttons">
    <button>JOIN</button>
    <button>SPECTATE</button>
    <button>JOIN AS COMMANDER</button>
    </div>
    </Box>
  
  
  );
};

export default ServerInfo;
