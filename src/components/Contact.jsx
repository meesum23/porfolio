import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
          <TextField fullWidth label="Your Name" margin="normal" required />
          <TextField fullWidth label="Your Email" margin="normal" required />
          <TextField fullWidth label="Your Message" margin="normal" multiline rows={4} required />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;