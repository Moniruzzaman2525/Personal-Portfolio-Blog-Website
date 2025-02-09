"use client"; // Ensure animations work in Next.js App Router

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js and Tailwind CSS.",
        image: "/projects/portfolio.jpg", // Make sure images exist in /public/projects
        id: "1",
    },
    {
        title: "E-Commerce App",
        description: "An e-commerce platform with a beautiful UI and API integration.",
        image: "/projects/ecommerce.jpg",
        id: "2",
    },
    {
        title: "AI Chatbot",
        description: "A smart AI-powered chatbot using Next.js and OpenAI API.",
        image: "/projects/ai-chatbot.jpg",
        id: "3",
    },
    {
        title: "Task Management App",
        description: "A full-stack task manager with user authentication and real-time updates.",
        image: "/projects/task-manager.jpg",
        id: "4",
    },
    {
        title: "Finance Dashboard",
        description: "A data visualization dashboard for tracking financial statistics.",
        image: "/projects/finance-dashboard.jpg",
        id: "5",
    },
    {
        title: "Social Media App",
        description: "A React-based social media platform with real-time messaging.",
        image: "/projects/social-media.jpg",
        id: "6",
    },
    {
        title: "Weather App",
        description: "A dynamic weather app with API integration for real-time updates.",
        image: "/projects/weather-app.jpg",
        id: "7",
    },
    {
        title: "Booking System",
        description: "An online booking system for hotel reservations.",
        image: "/projects/booking.jpg",
        id: "8",
    },
];

const ProjectsPage = () => {
    return (
        <section className="relative w-full bg-[#fbfbfe] py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-extrabold text-gray-900 text-center"
                >
                    My Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-600 text-lg text-center mt-4"
                >
                    A showcase of my best projects, built with modern web technologies.
                </motion.p>

                {/* Projects Grid (4 Cards in a Row) */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative w-full h-40">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-xl"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                <p className="text-gray-600 mt-2 flex-grow">{project.description}</p>
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="mt-4 inline-block text-[#1e16df] font-medium hover:underline"
                                >
                                    View Project →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
