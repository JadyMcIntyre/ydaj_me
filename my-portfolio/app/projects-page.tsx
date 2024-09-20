import React from 'react';
import Card from '../components/ui/card-component';

const ProjectsPage = () => {
  const projects = [
    { title: 'Project 1', description: 'Description 1', image: '/path/to/image1.jpg' },
    { title: 'Project 2', description: 'Description 2', image: '/path/to/image2.jpg' },
    // Add more projects as needed
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;