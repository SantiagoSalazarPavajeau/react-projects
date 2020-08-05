import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

 
const ProjectsList = ({ projects, editProject, deleteProject }) => {
  const renderProjects = projects.map((project, index )=>
     <ProjectCard key={index} title={project.title} started={project.started} description={project.description} id={project.id} editProject={editProject} deleteProject={deleteProject}/>
    // <Link key={project.id} to={`/projects/${project.id}`}>{projects[index].title}</Link>
  );
 
  return (
    <div>
      {renderProjects}
    {console.log(projects[0])}
    </div>
  );
};
 
export default ProjectsList;