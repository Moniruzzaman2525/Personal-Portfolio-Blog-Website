"use client";

import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <section className="relative w-full bg-white py-16 px-6 md:px-12 lg:px-24">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#1e16df] text-white p-10 rounded-xl shadow-xl flex flex-col justify-center h-full min-h-[400px]"
                >
                    <h2 className="text-4xl font-extrabold">Contact Information</h2>
                    <p className="text-white mt-3 text-lg">Reach out to me via email or visit my website.</p>

                    <div className="mt-6 space-y-5 text-lg">
                        <p className="text-white font-medium">📍 <span className="font-semibold">Location:</span> Sherpur, Dhaka, Bangladesh</p>
                        <p className="text-white font-medium">📧 <span className="font-semibold">Email:</span> <a href="mailto:web.moniruzzaman1@gmail.com" className="hover:underline">web.moniruzzaman1@gmail.com</a></p>
                        <p className="text-white font-medium">🌐 <span className="font-semibold">Website:</span> <a href="https://www.moniruzzaman.dev" className="hover:underline">www.moniruzzaman.dev</a></p>
                    </div>
                    <div className="mt-6 flex space-x-6 text-xl">
                        <a target="_blank" href="https://www.linkedin.com/in/moniruzzaman25/" className="text-white hover:text-gray-300 transition">🔗 LinkedIn</a>
                        <a target="_blank" href="https://x.com/Monir8699" className="text-white hover:text-gray-300 transition">🐦 Twitter</a>
                        <a target="_blank" href="https://www.facebook.com/moniruzzaman255" className="text-white hover:text-gray-300 transition">📘 Facebook</a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="bg-white p-10 rounded-xl shadow-xl border border-gray-200 flex flex-col justify-center h-full min-h-[400px]"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 mt-3 text-lg">I would love to hear from you! Feel free to drop me a message.</p>

                    <form className="mt-6 flex flex-col space-y-6">
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
                        <div>
                            <label className="block text-gray-700 font-medium">Subject</label>
                            <input
                                type="text"
                                placeholder="Enter subject"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e16df]"
                            />
                        </div>
                        <div>
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
                            className="mt-4 w-full bg-[#1e16df] text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#3830cf] transition duration-300"
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
