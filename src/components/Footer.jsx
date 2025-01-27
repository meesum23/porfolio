import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      id="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 4,
        mt: 'auto', // Footer ko page ke neeche rakhe
      }}
    >
      <Container>
        {/* Social Media Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <IconButton
            color="inherit"
            href="linkedin.com/in/meesum-haider-018553325 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="inherit"
            href="mailto: meesumhaider590@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2 }}>
          <Link href="#home" color="inherit" underline="hover">
            Home
          </Link>
          <Link href="#about" color="inherit" underline="hover">
            About
          </Link>
          <Link href="#skills" color="inherit" underline="hover">
            Skills
          </Link>
          <Link href="#projects" color="inherit" underline="hover">
            Projects
          </Link>
          <Link href="#contact" color="inherit" underline="hover">
            Contact
          </Link>
        </Box>

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Meesum Haider. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;