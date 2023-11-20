import react from 'react';
import { useParams } from 'react-router-dom';

import Wedloc from '../Photos/wedloc.png'
import TaskTitan from '../Photos/taskTitan2.png'

export default function SingleProject() {

    const projects = [
        {
          name: 'WEDLOC',
          description: 'Wedloc is a photo/video sharing app for wedding guests. Guests can upload photos/videos, add comments, like, and even livechat.',
          techsUsed: ['React', 'Node', 'MongoDB', 'GraphQL', 'Cloudinary', 'Socket.io', 'TailwindCSS', '+ more'],
          techUsed: [ 'nodeIcon.png', 'graphqlIcon.png', 'cloudinaryIcon.png', 'tailwindIcon.png'],
          type: 'Full Stack',
          deployedUrl: 'https://wedloc-84c89e3ae29d.herokuapp.com/',
          githubUrl: 'https://github.com/markthos/wedloc',
          img: Wedloc 
        },
        {
          name: 'Task Titan',
          description: 'Task Titan is a three level task management app. Project admins can add users and assign task. Workers may view taks and comment on them. Clients may see the progress of their projects.',
          techsUsed: ['Node', 'Express', 'MySQL', 'Handlebars'],
          type: 'Full Stack',
          deployedUrl: 'https://task-titan-bec51c55ebe5.herokuapp.com/',
          githubUrl: 'https://github.com/markthos/Task-Titan',
          img: TaskTitan
        },
    ]

    const { name } = useParams(); // Get the project name from URL parameter
    const project = projects.find(p => p.name === name);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-details">
            <h1>{project.name}</h1>
        </div>
    );
}