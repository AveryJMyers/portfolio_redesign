import Wedloc from '../../Photos/wedloc.png'
import TaskTitan from '../../Photos/taskTitan2.png'


export const projects = [
  {
    name: 'WEDLOC',
    description: "Wedloc is a MERN stack-based wedding photo and video sharing app, featuring a user-friendly interface with customizable themes, real-time updates, and interactive options like uploads, comments, and live chats. It utilizes GraphQL, NoSQL, and WebSocket for efficient data handling and real-time communication. Key features include personalized wedding pages, interactive timelines, editing tools, AI-powered sorting, engagement tools, event analytics, and robust security, offering a unique, engaging experience for wedding guests and hosts.",
    techUsed: ['nodeIcon.png', 'graphqlIcon.png', 'cloudinaryIcon.png', 'tailwindIcon.png'],
    type: 'Full Stack',
    deployedUrl: 'https://wedloc-84c89e3ae29d.herokuapp.com/',
    githubUrl: 'https://github.com/markthos/wedloc',
    img: Wedloc, // Assuming 'Wedloc' is a variable holding the image, if it's a string, it should have quotes.
    overview: [
      {
        Purpose: 'To create a dynamic and interactive platform for sharing and engaging with media content during weddings.',
        Target: 'Wedding guests, hosts, and event organizers.'
      }
    ],
    technologyStack: [
      {
        frontend: 'React.js for a responsive UI, CSS Frameworks like Bootstrap or Tailwind CSS, WebSocket for real-time data transfer',
        backend: 'Node.js and Express.js for server-side, GraphQL for data retrieval',
        database: 'MongoDB for data storage, Cloud Storage like AWS S3 for media files',
        authentication: 'JWT for secure access'
      }
    ],
    keyFeatures: [
      {
        userInterface: 'Customizable themes, Intuitive layout and controls',
        userInteraction: 'Photo and video uploads, Real-time chat, comments, likes',
        realTimeCommunication: 'Live updates, Notification system',
        personalization: 'Dedicated pages for each event, Timeline view',
        mediaManagement: 'In-app editing tools, AI for photo categorization',
        engagementAndAnalytics: 'Interactive elements like polls, Analytics dashboard',
        securityAndPrivacy: 'Robust authentication, Customizable privacy settings'
      }
    ]
  }
];


/* {
  name: 'Task Titan',
  description: " Wedloc is a MERN stack-based wedding photo and video sharing app, featuring a user-friendly interface with customizable themes, real-time updates, and interactive options like uploads, comments, and live chats. It utilizes GraphQL, NoSQL, and WebSocket for efficient data handling and real-time communication. Key features include personalized wedding pages, interactive timelines, editing tools, AI-powered sorting, engagement tools, event analytics, and robust security, offering a unique, engaging experience for wedding guests and hosts.",
  techsUsed: ['Node', 'Express', 'MySQL', 'Handlebars'],
  type: 'Full Stack',
  deployedUrl: 'https://task-titan-bec51c55ebe5.herokuapp.com/',
  githubUrl: 'https://github.com/markthos/Task-Titan',
  img: TaskTitan,
  overview: [
    purpose: 'To create a dynamic and interactive platform for sharing and engaging with media content during weddings.',
  ] 
},
*/