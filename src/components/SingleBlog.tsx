"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag } from "lucide-react"
import { useState } from "react"

interface Blog {
    _id: string
    name: string
    description: string
    type: string
    project: string
    image: string
    code: string
    createdAt: string
    updatedAt: string
    __v: number
}

interface SingleBlogProps {
    blog: Blog
    index: number
}

const SingleBlog = ({ blog, index }: SingleBlogProps) => {
    const [imageError, setImageError] = useState(false)

    const stripHtml = (html: string) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent || ""
    }

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "short",
            day: "numeric",
        }
        return new Date(dateString).toLocaleDateString("en-US", options)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col h-full"
        >
            <div className="relative w-full h-52 overflow-hidden">
                {!imageError ? (
                    <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        onError={() => setImageError(true)}
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <div className="text-gray-400 flex flex-col items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mb-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="text-sm">Image not available</span>
                        </div>
                    </div>
                )}
                <div className="absolute top-4 right-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">{blog.type}</span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{formatDate(blog.createdAt)}</span>
                    </div>
                    {blog.project && (
                        <div className="flex items-center">
                            <Tag className="h-3.5 w-3.5 mr-1" />
                            <span>Project: {blog.project}</span>
                        </div>
                    )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.name}</h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{stripHtml(blog.description)}</p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                        href={`/blogs/${blog._id}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                        Read More
                        <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default SingleBlog
