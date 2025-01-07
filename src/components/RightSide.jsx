import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';

const Invite = () => {
  return (
    <Box
      data-w-id="6b37c036-931c-d490-861f-6b059f982253"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        transform: 'translate3d(19vh, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Invite Line */}
      <Box className="invite__line" style={{ opacity: 0 }}></Box>

      {/* Squad Section */}
      <Box className="invite__squad" display="flex" alignItems="center" mb={2}>
        <img
          src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
          loading="lazy"
          alt="Squad Icon"
          style={{ marginRight: '16px' }}
        />
        <Typography className="invite__squad-h" style={{ opacity: 0 }}>
          squad
        </Typography>

        {/* Join Button */}
        <Box
          data-w-id="6b37c036-931c-d490-861f-6b059f98225a"
          className="invite__join-w"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        >
          <IconButton
            className="invite__join-icon invite__join-icon--black"
            style={{ display: 'none' }}
            aria-label="Join Squad"
          >
            <img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg"
              loading="lazy"
              alt="Join Black"
            />
          </IconButton>
          <IconButton
            className="invite__join-icon invite__join-icon--default"
            aria-label="Join Squad"
          >
            <img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg"
              loading="lazy"
              alt="Join Default"
            />
          </IconButton>
          <Typography
            className="invite__join-h"
            style={{ opacity: 0, color: 'rgb(255, 255, 255)' }}
          >
            squad join
          </Typography>
        </Box>
      </Box>

      {/* Invite Line */}
      <Box className="invite__line" style={{ opacity: 0 }}></Box>

      {/* Online Section */}
      <Box className="invite__online" display="flex" alignItems="center" mb={2}>
        <img
          src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
          loading="lazy"
          alt="Online Icon"
          className="invite__online-icon"
          style={{ marginRight: '16px' }}
        />
        <Typography className="invite__online-h" style={{ opacity: 0 }}>
          online
        </Typography>

        {/* Friend Picture and Info */}
        <Box className="invite__online-friend" display="flex" alignItems="center">
          <Box className="invite__friend-picture-w" mr={2}>
            <Box className="invite__online-bar"></Box>
            <img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
              loading="lazy"
              alt="MaryJane"
              className="invite__friend-picture"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
          </Box>
          <Box className="invite__friend-info" style={{ opacity: 0 }}>
            <Typography className="invite__friend-name" style={{ color: 'rgb(255, 255, 255)' }}>
              MaryJane
            </Typography>
            <Typography
              className="invite__friend-status"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Online
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Invite Line */}
      <Box className="invite__line" style={{ opacity: 0 }}></Box>

      {/* Offline Section */}
      <Box className="invite__offline" display="flex" alignItems="center" mb={2}>
        <img
          src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
          loading="lazy"
          alt="Offline Icon"
          className="invite__offline-icon"
          style={{ marginRight: '16px' }}
        />
        <Typography className="invite__offline-h" style={{ opacity: 0 }}>
          offline
        </Typography>

        {/* Offline Friend Info */}
        <Box className="invite__offline-friend" display="flex" alignItems="center" opacity={0.4}>
          <Box className="invite__friend-picture-w" mr={2}>
            <Box className="invite__offline-bar"></Box>
            <img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png"
              loading="lazy"
              alt="420"
              className="invite__friend-picture"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
          </Box>
          <Box className="invite__friend-info" style={{ opacity: 0 }}>
            <Typography className="invite__friend-name" style={{ color: 'rgb(255, 255, 255)' }}>
              420
            </Typography>
            <Typography
              className="invite__friend-status"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Offline
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Invite;
