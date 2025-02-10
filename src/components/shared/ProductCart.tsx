"use client"

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: string | number;
    image: string;
    title: string;
    description: string;
}

interface ProductCartProps {
    project: Project;
    index: number;
}

const ProductCart = ({ project, index }: ProductCartProps) => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col"
            >
                <div className="relative w-full h-40">
                    <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-xl"
                    />
                </div>

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
        </div>
    );
};

export default ProductCart;
