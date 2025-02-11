"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { TProject } from "@/types/project";



interface ProductCartProps {
    project: TProject;
    index: number;
}

const ProductCart = ({ project, index }: ProductCartProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col max-w-sm mx-auto"
        >
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={project?.image}
                    alt={project?.title}
                    layout="fill"
                    objectFit="cover"
                    unoptimized={true}
                    className="rounded-t-2xl transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{project?.title}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">{project?.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <Link
                        href={`/projects/${project?._id}`}
                        className="text-[#1e16df] font-medium hover:underline"
                    >
                        View Project →
                    </Link>
                    {project?.liveLink && (
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white bg-[#1e16df] px-3 py-1.5 rounded-lg hover:bg-[#1410b6] transition"
                        >
                            Live Demo <ExternalLink size={16} />
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCart;
