import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';

const Projects = () => {
  const projects = [
        { title: 'HRM Attendance Module', 
          Tools: 'MUI, Typescript, Javacscript , Node, MongoDB, Express, React',
          description: 'Worked on the HRM Attendance module, implementing features like file uploads, date filters, and record filters. Developed graphs for visualizing attendance data and improving user experience', 
          duration: 'Dec 2024 – Jan 2025'
         },
        { title: 'Social App', 
          Tools:'MongoDB, Express, React, Node, JavaScript',
          description: 'Developed a MERN-stack social media app with features like sign-up, login, profile ,management, post creation, liking and interactions. Designed RESTful APIs with Node.js, Express, and used MongoDB for efficient data storage', 
           duration: 'Nov 2024 '
        },
        { title: 'Speedo Bus Route System', 
          Tools: 'HTML, CSS, DOM, JavaScript',
          description: 'Worked on a project where users input their required stops to get the corresponding Speedo bus number and routes. The project was highly useful for providing accurate and real-time bus route information',
          duration: 'Sep 2024 '
        },
  ];

  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {projects.map((project, index) => (
            <Card key={index} sx={{ minWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;









