"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react"


// Assuming TBlog has the same structure as the blog data you provided earlier
interface TBlog {
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

const SingleBlocksPage = ({ blog }: { blog: TBlog }) => {


    // Format date to be more readable
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
        return new Date(dateString).toLocaleDateString("en-US", options)
    }

    // Calculate reading time (rough estimate)
    const calculateReadingTime = (text: string) => {
        const wordsPerMinute = 200
        const textLength = text.split(" ").length
        const readingTime = Math.ceil(textLength / wordsPerMinute)
        return readingTime < 1 ? 1 : readingTime
    }

    // Strip HTML to calculate reading time
    const stripHtml = (html: string) => {
        return html.replace(/<[^>]*>/g, '');
    };


    const readingTime = calculateReadingTime(stripHtml(blog.description))

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            {/* Hero Section with Image */}
            <div className="relative w-full h-80 md:h-[500px] overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={blog.image}
                        alt={blog.name}
                        layout="fill"
                        objectFit="cover"
                        className="brightness-90"
                        unoptimized={true}
                    />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4">
                                {blog.type}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-3xl md:text-5xl font-extrabold text-white"
                        >
                            {blog.name}
                        </motion.h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-3xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                >
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                            <span>{formatDate(blog.createdAt)}</span>
                        </div>

                        {blog.project && (
                            <div className="flex items-center">
                                <Tag className="h-4 w-4 mr-2 text-blue-500" />
                                <span>Project: {blog.project}</span>
                            </div>
                        )}

                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-blue-500" />
                            <span>{readingTime} min read</span>
                        </div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                    />

                    {/* Code Section (if available) */}
                    {blog.code && (
                        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h3 className="text-lg font-semibold mb-3">Code Snippet</h3>
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                                <code>{blog.code}</code>
                            </pre>
                        </div>
                    )}

                    {/* Back Button */}
                    <div className="mt-10 pt-6 border-t border-gray-100">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition font-medium"
                        >
                            <ArrowLeft size={16} /> Back to Blogs
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default SingleBlocksPage
