/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion } from "framer-motion"
import SkillCard from "@/components/skill-card"



export default function SkillSection({ skills }: { skills: any[] }) {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <div className="min-h-screen bg-[#fbfbfe] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        My <span className="text-purple-600">Skills</span>
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
                        Technologies and programming languages I specialize in
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skills.map((skill) => (
                        <SkillCard key={skill._id} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
