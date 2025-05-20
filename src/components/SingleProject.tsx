"use client"

import type { TSingleProjectProps } from "@/types/props.type"
import { motion } from "framer-motion"
import { ExternalLink, ArrowLeft, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SingleProject = ({ project }: TSingleProjectProps) => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    // Format dates
    const formatDate = (dateString: string) => {
        if (!dateString) return "N/A"
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative w-full h-80 md:h-[500px] overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        priority
                        className="object-cover brightness-75"
                        unoptimized
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center max-w-4xl"
                    >
                        {project.name}
                    </motion.h1>

                    {project.status && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-6"
                        >
                            <Badge variant="secondary" className="text-sm px-3 py-1">
                                <CheckCircle size={14} className="mr-1" />
                                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                            </Badge>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                    {/* Project Info */}
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6 md:p-8">
                            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground mb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span className="text-sm">Published: {formatDate(project.createdAt)}</span>
                                </div>

                                {project.startDate && (
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span className="text-sm">Start Date: {formatDate(project.startDate)}</span>
                                    </div>
                                )}
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
                                <div
                                    className="text-base md:text-lg leading-relaxed text-muted-foreground"
                                    dangerouslySetInnerHTML={{ __html: project.description }}
                                />
                            </motion.div>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
                        <Button variant="outline" size="lg" asChild className="group">
                            <Link href="/projects">
                                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Projects
                            </Link>
                        </Button>

                        {project.liveLink && (
                            <Button size="lg" asChild className="group">
                                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    Live Preview
                                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        )}
                    </motion.div>

                    {/* Project Details */}
                    <motion.div variants={itemVariants} className="mt-8">
                        <Card className="border-none shadow-md">
                            <CardContent className="p-6 md:p-8">
                                <h2 className="text-xl font-semibold mb-3">Project Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-muted-foreground">Project ID</p>
                                        <p className="text-sm">{project._id}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-muted-foreground">Status</p>
                                        <p className="text-sm capitalize">{project.status}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-muted-foreground">Start Date</p>
                                        <p className="text-sm">{formatDate(project.startDate)}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-muted-foreground">Last Updated</p>
                                        <p className="text-sm">{formatDate(project.updatedAt)}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default SingleProject
