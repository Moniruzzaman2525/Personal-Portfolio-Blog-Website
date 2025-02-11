"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Blog {
    _id: string | number;
    title: string;
    image: string;
    description: string;
    createdAt: string;
}

const BlogPage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data.data))
            .catch((err) => console.error("Error fetching blogs:", err));
    }, []);

    return (
        <div className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center">
                    Our Latest Blogs
                </h2>
                <p className="text-gray-600 text-lg text-center mt-4">
                    Stay updated with our latest articles, tutorials, and insights.
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {blogs.length > 0 ? (
                        blogs.map((blog, index) => (
                            <motion.div
                                key={blog._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col"
                            >
                                <div className="relative w-full h-48 overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        layout="fill"
                                        objectFit="cover"
                                        unoptimized={true}
                                        className="rounded-t-xl transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                                        {blog.description.length > 100
                                            ? `${blog.description.substring(0, 100)}...`
                                            : blog.description}
                                    </p>
                                    <div className="mt-4">
                                        <Link
                                            href={`/blogs/${blog._id}`}
                                            className="text-[#1e16df] font-medium hover:underline"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 text-lg col-span-full">
                            No blogs available at the moment.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
