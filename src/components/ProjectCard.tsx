"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Eye, ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface Project {
    _id: string
    name: string
    description: string
    status: string
    startDate: string
    endDate: string | null
    owner: string
    liveLink: string
    image?: string // Added image field
    createdAt: string
    updatedAt: string
    __v: number
}

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [imageError, setImageError] = useState(false)

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.03,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    }

    // Format date to be more readable
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString("en-US", options)
    }

    // Remove HTML tags from description
    const stripHtml = (html: string) => {
        return html.replace(/<[^>]*>/g, '');
    };

    // Get status color
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-green-100 text-green-800"
            case "in-progress":
                return "bg-blue-100 text-blue-800"
            case "on-hold":
                return "bg-yellow-100 text-yellow-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <motion.div
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm h-full flex flex-col"
        >
            {/* Image Section */}
            <div className="relative w-full h-48 bg-gray-100">
                {project.image && !imageError ? (
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.name} project thumbnail`}
                        fill
                        className="object-cover"
                        onError={() => setImageError(true)}
                        unoptimized
                    />
                ) : (
                    <div className="flex items-center justify-center h-full w-full bg-purple-50">
                        <div className="flex flex-col items-center text-purple-300">
                            <ImageIcon className="h-12 w-12 mb-2" />
                            <span className="text-sm">No image available</span>
                        </div>
                    </div>
                )}

                {/* Overlay gradient on hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{project.name}</h3>
                    <Badge className={`${getStatusColor(project.status)} border-0 w-[30%]`}>{project.status}</Badge>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Started: {formatDate(project.startDate)}</span>
                </div>

                <div className="mb-6 flex-grow">
                    <p className="text-gray-600 line-clamp-3">{stripHtml(project.description)}</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex space-x-3 mt-auto"
                >
                    <Button asChild variant="outline" className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50">
                        <Link href={`/projects/${project._id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                        </Link>
                    </Button>

                    <Button asChild className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                        </a>
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ width: "0%" }}
                animate={isHovered ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.5 }}
                className="h-1 bg-gradient-to-r from-purple-400 to-purple-600"
            />
        </motion.div>
    )
}
