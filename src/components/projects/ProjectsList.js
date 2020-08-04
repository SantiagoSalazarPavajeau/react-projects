import React from 'react';
import { Link } from 'react-router-dom';
 
const ProjectsList = ({ projects }) => {
  const renderProjects = projects.map(project =>
    <Link key={project.id} to={`/projects/${project.id}`}>{projects[project.id].title}</Link>
  );
 
  return (
    <div>
      {renderProjects}
    </div>
  );
};
 
export default ProjectsList;