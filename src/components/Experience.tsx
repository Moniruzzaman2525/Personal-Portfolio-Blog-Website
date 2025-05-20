"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Experience {
    _id: string
    company: string
    image: string
    role: string
    startDate: string
    description: string
    endDate: string
    createdAt: string
    updatedAt: string
    __v: number
}

interface HomeExperienceSectionProps {
    experience: Experience
}

export default function HomeExperienceSection({ experience }: HomeExperienceSectionProps) {


    // Format date to be more readable
    const formatDate = (dateString: string) => {
        if (dateString === "Present") return "Present"

        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "short",
        }
        return new Date(dateString).toLocaleDateString("en-US", options)
    }

    // Calculate duration
    const calculateDuration = (startDate: string, endDate: string) => {
        const start = new Date(startDate)
        const end = endDate === "Present" ? new Date() : new Date(endDate)

        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
        const years = Math.floor(months / 12)
        const remainingMonths = months % 12

        if (years === 0) {
            return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`
        } else if (remainingMonths === 0) {
            return `${years} year${years !== 1 ? "s" : ""}`
        } else {
            return `${years} year${years !== 1 ? "s" : ""}, ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`
        }
    }

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Professional Experience</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">My professional journey and current role</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 max-w-4xl mx-auto"
                >
                    <div className="md:flex items-center">
                        <div className="md:w-2/5 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 p-8 flex flex-col items-center justify-center">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm mb-6">
                                <Image
                                    src={experience.image || "/placeholder.svg"}
                                    alt={`${experience.company} logo`}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                    unoptimized
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-center text-gray-800">{experience.company}</h3>
                            <div className="mt-3 flex items-center text-sm text-gray-600">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>
                                    {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                                </span>
                            </div>
                            <div className="mt-1 text-sm text-blue-600 font-medium">
                                {calculateDuration(experience.startDate, experience.endDate)}
                            </div>
                        </div>

                        <div className="md:w-3/5 p-8">
                            <div className="flex items-center mb-4">
                                <div className="h-10 w-1 bg-blue-500 mr-4"></div>
                                <h4 className="text-xl font-bold text-gray-900">{experience.role}</h4>
                            </div>

                            <div className="prose prose-blue mb-6">
                                <div dangerouslySetInnerHTML={{ __html: experience.description }} />
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100/70 text-blue-800">
                                    Frontend
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100/70 text-indigo-800">
                                    React
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100/70 text-purple-800">
                                    Next.js
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100/70 text-pink-800">
                                    TypeScript
                                </span>
                            </div>

                            <Link
                                href="/resume"
                                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                            >
                                View full resume
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
