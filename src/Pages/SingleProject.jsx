import react from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import Wedloc from '../Photos/wedloc.png'
import TaskTitan from '../Photos/taskTitan2.png'
import Header from '../Components/Header';
import { projects } from '../assets/data/projects';
import ProjectDropdowns from '../Components/ProjectDropdown';

export default function SingleProject() {

    
    const { name } = useParams(); // Get the project name from URL parameter
    const project = projects.find(p => p.name === name);

    if (!project) {
        <>
            <Header></Header>
            return <div>Project not found</div>;
        </>
    }

    return (
        <>
            <Header></Header>
            <section className="svProject">
                <img src={project.img} className="svPhoto"></img>
                <div className="svProjectInfo">
                    <h3 className="svProjectTitle">{project.name}</h3>
                    <h4 className='svType'>({project.type})</h4>
                    <p className='svDescription'> {project.description}</p>
                    <div className="svButtonGroup">
                        <button id="appButton">APP</button>
                        <button id="gitButton">GIT</button>
                    </div>
                </div>
            </section>
            <ProjectDropdowns></ProjectDropdowns>
        </>
    )
}