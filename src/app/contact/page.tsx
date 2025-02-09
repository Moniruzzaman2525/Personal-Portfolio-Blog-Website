"use client";

import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <section className="relative w-full bg-[#fbfbfe] py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#1e16df] text-white p-8 rounded-xl shadow-lg flex flex-col justify-center h-full"
                >
                    <h2 className="text-3xl font-extrabold">Contact Information</h2>
                    <p className="text-white mt-2">Reach out to me via email or visit my website.</p>

                    <div className="mt-6 space-y-4">
                        <p className="text-white font-medium">📍 <span className="font-semibold">Location:</span> Sherpur, Dhaka, Bangladesh</p>
                        <p className="text-white font-medium">📧 <span className="font-semibold">Email:</span> <a href="mailto:web.moniruzzaman1@gmail.com" className="hover:underline">web.moniruzzaman1@gmail.com</a></p>
                        <p className="text-white font-medium">🌐 <span className="font-semibold">Website:</span> <a href="https://www.moniruzzaman.dev" className="hover:underline">www.moniruzzaman.dev</a></p>
                    </div>

                    <div className="mt-6 flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300 transition text-lg">🔗 LinkedIn</a>
                        <a href="#" className="text-white hover:text-gray-300 transition text-lg">🐦 Twitter</a>
                        <a href="#" className="text-white hover:text-gray-300 transition text-lg">📘 Facebook</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-center h-full"
                >
                    <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 mt-2">I do love to hear from you! Feel free to drop me a message.</p>

                    <form className="mt-6 flex-grow flex flex-col justify-between">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e16df]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e16df]"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-gray-700 font-medium">Subject</label>
                            <input
                                type="text"
                                placeholder="Enter subject"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e16df]"
                            />
                        </div>
                        <div className="mt-6 flex-grow">
                            <label className="block text-gray-700 font-medium">Your Message</label>
                            <textarea
                                rows={5}
                                placeholder="Type your message..."
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e16df] resize-none"
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 w-full bg-[#1e16df] text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#3830cf] transition duration-300"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactPage;

