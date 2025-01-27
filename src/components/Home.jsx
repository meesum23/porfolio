import React from 'react';
import { Container, Typography, Button, Box, Avatar } from '@mui/material';
import pic from '../assets/cvpic.jpg'


const Home = () => {
  return (
    <Box id="home" sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {/* Picture */}
          <Avatar
            src={pic}
            alt="My Picture"
            sx={{ width: 150, height: 150, border: '4px solid white' }}
          />
          {/* Introduction */}
          <Box>
            <Typography variant="h2" gutterBottom>
              Hello, I'm Meesum Haider
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