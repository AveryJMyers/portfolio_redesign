import React from "react";

import Wedloc from '../Photos/wedloc.png'
import TaskTitan from '../Photos/taskTitan2.png'


export default function MyWork() {

    const projects = [
        {
          name: 'Wedloc',
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
        // {
        //   name: 'Loot Vault',
        //   description: 'Loot Vault is a site for gamers to find the best deals on their favorite games. Users can search for games and see the best deals from multiple sites.',
        //   techsUsed: ['HTML', 'CSS', 'Javascript', 'Bulma CSS', 'APIs '],
        //   type: 'Front End',
        //   img: LootVault
        // },
        // {
        //   name: 'Tech Blog',
        //   description: 'A blog thats allows developers post, comment, and like posts.',
        //   techsUsed: ['Node.js', 'Express.js', 'MySQL', 'Handlebars.js', 'Sequlize'],
        //   type: 'Full Stack',
        //   deployedUrl: 'https://torvec.github.io/project_1_Loot_Vault/',
        //   githubUrl: 'https://github.com/Torvec/project_1_Loot_Vault',
        //   img: TechBlog
        // },
        // {
        //   name: 'Employee Directory',
        //   description: 'A command line application to manage a company\'s employee database, using Node.js, Inquirer, and MySQL.',
        //   techsUsed: ['Node.js', 'MySQL', ],
        //   type: 'Back End',
        //   img: 'photo'
        // },
        // {
        //   name: 'Weather Dashboard',
        //   description: 'A weather dashboard that allows users to search for a city and see the current weather and 5 day forecast.',
        //   techsUsed: ['HTML ', 'CSS', 'JavaScript', 'APIs '],
        //   type: 'Front End', 
        // },
        // {
        //   name: 'Javascript Quiz',
        //   description: 'A timed quiz that tests the users knowledge of javascript and tracks their high scores.',
        //   techsUsed: ['HTML', 'CSS', 'Javascript'],
        //   techUsed: ['htmlIcon.png', 'cssIcon.png', 'javascriptIcon.png'],
        //   type: 'Front End',
        // }

      ];



    return <>
        <section>
            <h2 className="workHeading">
                My Work
            </h2>
            <section className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.img} alt={project.name} className="projectImg"></img>
                    </div>
                ))}
            </section>

        </section>
    </>
    
}