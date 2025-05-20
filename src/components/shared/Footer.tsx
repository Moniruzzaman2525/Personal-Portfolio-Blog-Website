"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Heart, Facebook } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-[#fbfbfe]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        <div className="md:col-span-2">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Md Moniruzzaman</h3>
                                <p className="text-gray-600 mb-4 max-w-md">
                                    Passionate about building scalable web applications and interactive user experiences.
                                    Proficient in modern technologies like <strong>Javascript, Typescript, React.js, Redux.js, Next.js, Node.js, Express.js, MongoDB, PostgresSQL and Prisma</strong>.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/Moniruzzaman2525"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-900 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/moniruzzaman25/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-900 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/moniruzzaman255/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-900 transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <Facebook size={20} />
                                    </a>
                                    <a
                                        href="web.moniruzzaman1@gmail.com"
                                        className="text-gray-500 hover:text-gray-900 transition-colors"
                                        aria-label="Email"
                                    >
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Mail className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600">web.moniruzzaman1@gmail.com</span>
                                    </li>
                                    <li>
                                        <a
                                            href="https://calendly.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                                        >
                                            Schedule a call
                                            <ExternalLink className="h-3.5 w-3.5 ml-1" />
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-500">© {currentYear} Md Moniruzzaman. All rights reserved.</p>
                        <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-500">
                            <span>Made with</span>
                            <Heart className="h-4 w-4 mx-1 text-red-500" />
                            <span>Md Moniruzzaman</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
