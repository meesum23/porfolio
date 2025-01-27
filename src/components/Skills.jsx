import React from 'react';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Vite', 'Git'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;