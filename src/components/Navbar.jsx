import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" href="#home">Home</Button>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#skills">Skills</Button>
        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;