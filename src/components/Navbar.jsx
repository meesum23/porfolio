import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check for mobile screen
  const [anchorEl, setAnchorEl] = useState(null); // For mobile menu

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} href="#home">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} href="#about">About</MenuItem>
              <MenuItem onClick={handleMenuClose} href="#skills">Skills</MenuItem>
              <MenuItem onClick={handleMenuClose} href="#projects">Projects</MenuItem>
              <MenuItem onClick={handleMenuClose} href="#contact">Contact</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" href="#home">Home</Button>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#skills">Skills</Button>
            <Button color="inherit" href="#projects">Projects</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;