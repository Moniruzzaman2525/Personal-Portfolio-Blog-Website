import ProjectsPage from '@/components/ProjectsPage';
import { getProjects } from '@/services/Projects';
import React from 'react';

const Projects = async () => {
    const projects = await getProjects()
    return (
        <div>
            <ProjectsPage projects={projects.data} />
        </div>
    );
};

export default Projects;
