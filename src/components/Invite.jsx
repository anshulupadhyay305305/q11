import React from 'react';
import { Box, Typography, Link, IconButton, Avatar, Divider } from '@mui/material';

const FriendStatus = ({ name, status, pictureUrl, isOnline }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', opacity: isOnline ? 1 : 0.4 }}>
    <Avatar src={pictureUrl} sx={{ width: 40, height: 40 }} />
    <Box sx={{ marginLeft: 2 }}>
      <Typography variant="body1" sx={{ color: 'white' }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
        {status}
      </Typography>
    </Box>
  </Box>
);

const Invite = () => {
  return (
    <Box sx={{ backgroundColor: 'transparent', padding: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
            alt="squad"
            style={{ marginRight: 8 }}
          />
          <Typography sx={{ opacity: 0 }}>squad</Typography>
        </Box>
        <Divider sx={{ flex: 1, marginX: 1 }} />
        <Link href="#" sx={{ textDecoration: 'none', opacity: 0 }}>
          squad join
        </Link>
      </Box>

      <Divider sx={{ marginY: 1 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0 }}>
        <img
          src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
          alt="online"
          style={{ marginRight: 8 }}
        />
        <Typography sx={{ opacity: 0 }}>online</Typography>
      </Box>
      <FriendStatus
        name="MaryJane"
        status="Online"
        pictureUrl="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
        isOnline={true}
      />

      <Divider sx={{ marginY: 1 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0 }}>
        <img
          src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
          alt="offline"
          style={{ marginRight: 8 }}
        />
        <Typography sx={{ opacity: 0 }}>offline</Typography>
      </Box>
      <FriendStatus
        name="420"
        status="Offline"
        pictureUrl="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png"
        isOnline={false}
      />
    </Box>
  );
};

export default Invite;
