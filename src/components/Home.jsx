import React from 'react';
import { Container, Typography, Button, Box, Avatar, useMediaQuery } from '@mui/material';
import myPicture from '../assets/cvpic.jpg';

const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box id="home" sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: 4,
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <Avatar
            src={myPicture}
            alt="My Picture"
            sx={{ width: 150, height: 150, border: '4px solid white' }}
          />
          <Box>
            <Typography variant="h2" gutterBottom>
              Hello, I'm [Your Name]
            </Typography>
            <Typography variant="h5" gutterBottom>
              A passionate developer building amazing web applications.
            </Typography>
            <Button variant="contained" color="secondary" href="#about">
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;