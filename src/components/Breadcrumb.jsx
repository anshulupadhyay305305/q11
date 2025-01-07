import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';



const Breadcrumb = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, color: 'white' }}>
        <IconButton
          component="a"
          href="/server-browser"
          color="primary"
          sx={{ padding: 0 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Link href="http://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-multiplayer" sx={{ textDecoration: 'none', color: 'white', }}>
          MULTIPLAYER
        </Link>
        <Typography sx={{ marginX: 1 }}>/</Typography>
        <Link href="/server-browser" sx={{ textDecoration: 'none', color: 'white',  }}>
          SERVER BROWSER
        </Link>
        <Typography sx={{ marginX: 1 }}>/</Typography>
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
        SERVER INFO
      </Typography>
    </Box>
  );
};

export default Breadcrumb;
