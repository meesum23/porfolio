import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
        Hi, I'm Meesum Haider, a web developer with expertise in React, JavaScript, and modern web technologies.
        I love building user-friendly and responsive web applications. I'm passionate about learning new technologies and frameworks.
        <br />
        I am currently available for freelance work or hire for your project. Please don't hesitate to reach out! 
        I have experience of 6 months in web development and I have worked on multiple projects. I have a good understanding of React, JavaScript, HTML, CSS, Node.js, Vite, Git.
        <br />
        I have a good understanding of the latest web technologies and I am always eager to learn new things. I am a quick learner and I can adapt to new environments easily.
        I am also a creative and detail-oriented person, so I love to work on projects that require a strong visual design.

        </Typography>
      </Container>
    </Box>
  );
};

export default About;





