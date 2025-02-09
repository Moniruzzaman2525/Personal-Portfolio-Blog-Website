"use client"; // Ensure animations work in Next.js App Router

import { motion } from "framer-motion";
import Image from "next/image";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
    return (
        <section className="relative w-full bg-[#fbfbfe] py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center md:justify-start"
                >
                    <Image
                        src={profileImage}
                        alt="Profile Picture"
                        width={250}
                        height={250}
                        className="rounded-full border-4 border-gray-300 shadow-lg"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                        Md Moniruzzaman
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl text-[#1e16df] font-semibold mt-2"
                    >
                        Full Stack Web Developer
                    </motion.p>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Passionate about building scalable web applications and interactive user experiences.
                        Proficient in modern technologies like <strong>Typescript, React, Next.js, Node.js, and MongoDB</strong>.
                    </p>

                    <div className="mt-6 space-y-2">
                        <p className="text-gray-700 font-medium">📍 <span className="font-semibold">Location:</span> Dhaka, Bangladesh</p>
                        <p className="text-gray-700 font-medium">📧 <span className="font-semibold">Email:</span> <a href="mailto:monir@example.com" className="text-[#1e16df] hover:underline">web.moniruzzaman1@gmail.com</a></p>
                        <p className="text-gray-700 font-medium">🌐 <span className="font-semibold">Website:</span> <a href="web.moniruzzaman1@gmail.com" className="text-[#1e16df] hover:underline">www.moniruzzaman.dev</a></p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-6"
                    >
                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 bg-[#3830cf] text-white font-medium text-lg rounded-lg shadow-md hover:bg-[#1e16df] transition duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
