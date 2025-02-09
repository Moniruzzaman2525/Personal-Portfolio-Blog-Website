"use client";

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

const LoginPage = () => {
    return (
        <section className="flex justify-center items-center min-h-screen bg-[#fbfbfe] px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-md w-full"
            >
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Welcome Back</h2>
                <p className="text-gray-600 text-center mt-2">Login to your account</p>

                <form className="mt-6">
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e16df]"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e16df]"
                        />
                    </div>

                    <div className="flex justify-end mt-2">
                        <a href="#" className="text-[#1e16df] text-sm hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 w-full bg-[#1e16df] text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#3830cf] transition duration-300"
                    >
                        Login
                    </motion.button>
                </form>

                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="flex flex-col space-y-4">
                    <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
                        <FcGoogle className="text-2xl mr-3" />
                        <span className="text-gray-700 font-medium">Continue with Google</span>
                    </button>
                    <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition text-[#1877F2]">
                        <FaFacebook className="text-2xl mr-3" />
                        <span className="font-medium">Continue with Facebook</span>
                    </button>
                    <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition text-gray-900">
                        <FaGithub className="text-2xl mr-3" />
                        <span className="font-medium">Continue with GitHub</span>
                    </button>
                </div>
                <p className="text-gray-600 text-center mt-6">
                    Do not have an account?{" "}
                    <a href="#" className="text-[#1e16df] font-medium hover:underline">
                        Sign Up
                    </a>
                </p>
            </motion.div>
        </section>
    );
};

export default LoginPage;
