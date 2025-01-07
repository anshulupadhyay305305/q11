import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

function ServerMaps() {
  const mapsData = [
    {
      imgSrc: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png",
      mode: "conquest large",
      mapName: "dawnbreaker",
    },
    {
      imgSrc: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png",
      mode: "conquest large",
      mapName: "propaganda",
    },
    {
      imgSrc: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png",
      mode: "conquest large",
      mapName: "operation locker",
    },
    {
      imgSrc: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png",
      mode: "conquest large",
      mapName: "lancang dam",
    },
    {
      imgSrc: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png",
      mode: "conquest large",
      mapName: "siege of shanghai",
    },
    // Add more map objects as needed
  ];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {mapsData.map((map, index) => (
        <Card key={index} sx={{ maxWidth: 200, maxHeight: 250, backgroundColor: 'rgba(16, 16, 16, 0.5)', boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="140"
            image={map.imgSrc}
            alt={map.mapName}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              {map.mode}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#fff' }}>
              {map.mapName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ServerMaps;
