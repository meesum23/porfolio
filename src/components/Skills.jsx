import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js','MongoDB','Material UI',
                  'Problem Solving','Express JS','MySQL','Bootstrap','Socket.io'];

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} color="primary" />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;