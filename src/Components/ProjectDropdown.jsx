import React from 'react';
import { useState } from 'react';
import { projects } from '../assets/data/projects';

import Collapsible from './Collapsible'; 


export default function ProjectDropdowns() {
    return (
        <div>
            {projects.map((project, index) => (
            <div key={index}>
                <Collapsible title="Overview">
                    {Object.entries(project.overview[0]).map(([key, value]) => (
                        <p key={key}><strong>{key}</strong>: {value}</p>
                    ))}
                </Collapsible>
                <Collapsible title="Key Features">
                {Object.entries(project.keyFeatures[0]).map(([key, value]) => (
                        <p key={key}><strong>{key}</strong>: {value}</p>
                    ))}
                </Collapsible>
                <Collapsible title="Technology Stack">
                {Object.entries(project.technologyStack[0]).map(([key, value]) => (
                        <p key={key}><strong>{key}</strong>: {value}</p>
                    ))}
                </Collapsible>
            </div>
            ))}
        </div>
    );
};
    