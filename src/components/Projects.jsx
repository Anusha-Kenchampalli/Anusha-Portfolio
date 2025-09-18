import React from 'react';

const Projects = () => {
   
    const projectData = [
        {
            title: 'NxtMart',
            image: "https://res.cloudinary.com/dzpcirnqq/image/upload/v1758179243/Screenshot_2025-09-18_123203_qw3mfm.png",
            description: 'An e-commerce platform built with React, featuring user authentication and payment integration.',
            liveLink: 'https://nxt-mart-nine.vercel.app/login',
            repoLink: 'https://github.com/Anusha-Kenchampalli/NxtMart',
            technologies: ['React.js', 'Tailwind CSS', 'API Integration', 'Authentication'],
        },
        {
            title: 'Book Hub',
            image: "https://res.cloudinary.com/dzpcirnqq/image/upload/v1758179284/Screenshot_2025-09-18_123745_hw3yce.png",
            description: 'A book review application using reactjs and API integration to fetch book data.',
            liveLink: 'https://book-hub-online.netlify.app/bookshelves',
            repoLink: 'https://github.com/Anusha-Kenchampalli/Book-Hub',
            technologies: ['React.js', 'Tailwind CSS', 'API Integration', 'Routing'],
        },
        {
            title: 'Krishi AI',
            image: "https://res.cloudinary.com/dzpcirnqq/image/upload/v1758179387/Screenshot_2025-09-18_123921_t4j7b7.png",
            description: 'A farming assistant app that provides crop recommendations and weather updates using AI.',
            liveLink: 'https://kisan-sathi-ai-07.lovable.app/',
            repoLink: 'https://github.com/Anusha-Kenchampalli/kisan-sathi-ai-07',
            technologies: ['Generative AI', 'Firebase', 'Lovable AI']
        },
        {
            title: "Task Manager",
            image: "https://res.cloudinary.com/dzpcirnqq/image/upload/v1758066032/Screenshot_2025-09-17_050921_ulnrln.png",
            description: `Task Manager (MERN Stack): A full-stack task management app with secure authentication and 
            role-based access. Features interactive dashboards with Pie & Bar chart for task insights and tabular views for easy tracking.
             Built using MongoDB, Express.js, React.js, Node.js, and Tailwind CSS.`,
            liveLink: 'https://taskmanagerhub.netlify.app/',
            repoLink: 'https://github.com/Anusha-Kenchampalli/TaskManager-Frontend',
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js"]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Projects</h2>
                    <p className="mt-4 text-lg text-slate-400">
                        A selection of projects showcasing my skills and experience. Each project demonstrates my ability to build robust, user-friendly applications using modern technologies such as React, API integration, authentication, and AI-powered features.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectData.map((project, index) => (
                        <div key={index} className="bg-slate-800 rounded-lg overflow-hidden shadow-xl group">
                            <div className="relative h-56">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                                    <div className="space-x-4">
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-bold">Live Demo</a>
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-bold">GitHub</a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-slate-200 mb-4">{project.description}</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-slate-700 text-slate-300 text-sm px-2 py-1 rounded-full">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;