import React from 'react';
import { Box, Tooltip } from '@mui/material';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image9 from './images/image9.png';

function SideMenu() {

  return (
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 2,
        
        width: 250,
        borderRadius: 0,
      }}
    >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <Tooltip title="Battlefield V" 
      arrow
      slotProps={{
        popper: {
          sx: {
            transform: 'translate(+5px, +129px) !important', // Shift left and up
          },
        },
      }}

      >
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <img
            src={image1}
            alt="Battlefield V"
            style={{
              width: '11%',
              objectFit: 'cover',
            }}
          />
        </a>
      </Tooltip>

      <Tooltip title="Battlefield 1" arrow
      
      slotProps={{
        popper: {
          sx: {
            transform: 'translate(+5px, +179px) !important', // Shift left and up
          },
        },
      }}>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bf1"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <img
            src={image2}
            alt="Battlefield 1"
            style={{
                width: '11%',
                objectFit: 'cover',
              }}
          />
        </a>
      </Tooltip>

      <Tooltip title="Battlefield 4" 
      arrow
      slotProps={{
        popper: {
          sx: {
            transform: 'translate(+5px, +230px) !important', // Shift left and up
          },
        },
      }}>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bf4"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <img
            src={image3}
            alt="Battlefield 4"
            style={{
                width: '11%',
                objectFit: 'cover',
              }}
          />
        </a>
      </Tooltip>

      <Tooltip title="Battlefield H" 
      arrow
      slotProps={{
        popper: {
          sx: {
            transform: 'translate(+5px, +280px) !important', // Shift left and up
          },
        },
      }}>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfh"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <img
            src={image4}
            alt="Battlefield Hardline"
            style={{
                width: '11%',
                objectFit: 'cover',
              }}
          />
        </a>
      </Tooltip>

      <Tooltip title="Career" 
      arrow
      slotProps={{
        popper: {
          sx: {
            transform: 'translate(+5px, +330px) !important', // Shift left and up
          },
        },
      }}>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-career"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <img
            src={image5}
            alt="Career"
            style={{
                width: '11%',
                objectFit: 'cover',
              }}
          />
        </a>
      </Tooltip>

      <Tooltip title="Watch" 
      arrow
      slotProps={{
        popper: {
          sx: {
            transform: 'translate(+5px, +380px) !important', // Shift left and up
          },
        },
      }}>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-watch"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <img
            src={image6}
            alt="Watch"
            style={{
                width: '11%',
                objectFit: 'cover',
              }}
          />
        </a>
      </Tooltip>

      <Tooltip title="News" 
      arrow
      slotProps={{
        popper: {
          sx: {
            transform: 'translate(+5px, +430px) !important', // Shift left and up
          },
        },
      }}>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-news"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <img
            src={image7}
            alt="News"
            style={{
                width: '11%',
                objectFit: 'cover',
              }}
          />
        </a>
      </Tooltip>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Tooltip title="Help" 
      arrow
      slotProps={{
        popper: {
          sx: {
            transform: 'translate(+5px, -10px) !important', // Shift left and up
          },
        },
      }}>
        <a
          component="a"
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-help"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <img
            src={image9}
            alt="News"
            style={{
                width: '11%',
                objectFit: 'cover',
              }}
          />
        </a>
      </Tooltip>
    </Box>
  );
}

export default SideMenu;
