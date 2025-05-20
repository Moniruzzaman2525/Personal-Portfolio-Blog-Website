"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface Skill {
    _id: string
    name: string
    image: string
    createdAt: string
    updatedAt: string
    __v: number
}

interface SkillCardProps {
    skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    console.log(skill.image)
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
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    }

    const iconVariants = {
        initial: { rotate: 0 },
        hover: {
            rotate: 5,
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                yoyo: Number.POSITIVE_INFINITY,
                repeatDelay: 0.5,
            },
        },
    }

    return (
        <motion.div
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
        >
            <div className="p-6 flex flex-col items-center">
                <motion.div
                    variants={iconVariants}
                    animate={isHovered ? "hover" : "initial"}
                    className="w-24 h-24 relative mb-4 flex items-center justify-center"
                >
                    <Image
                        src={skill.image}
                        alt="Python logo"
                        width={80}
                        height={80}
                        unoptimized // This skips Next.js optimization and loads image directly
                    />


                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.name}</h3>

                <motion.div
                    initial={{ width: "0%" }}
                    animate={isHovered ? { width: "100%" } : { width: "30%" }}
                    transition={{ duration: 0.5 }}
                    className="h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-2"
                />
            </div>
        </motion.div>
    )
}
