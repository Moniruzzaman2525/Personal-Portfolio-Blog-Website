"use client";

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import PPForm from "@/components/form/PPForm";
import PPInput from "@/components/form/PPInput";

const SignupPage = () => {
    const handleSignup = (data: FieldValues) => {
        console.log("Signup Data:", data);
    };

    return (
        <section className="flex justify-center items-center min-h-screen bg-[#fbfbfe] px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-md w-full"
            >
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Create an Account</h2>
                <p className="text-gray-600 text-center mt-2">Sign up to get started</p>

                <PPForm onSubmit={handleSignup} style={{ marginTop: "24px" }}>
                    <PPInput type="text" name="fullName" label="Full Name" placeholder="Enter your name" />
                    <PPInput type="email" name="email" label="Email" placeholder="Enter your email" />
                    <PPInput type="password" name="password" label="Password" placeholder="Create a password" />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 w-full bg-[#1e16df] text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#3830cf] transition duration-300"
                    >
                        Sign Up
                    </motion.button>
                </PPForm>
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={() => signIn("google")}
                        className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition"
                    >
                        <FcGoogle className="text-2xl mr-3" />
                        <span className="text-gray-700 font-medium">Sign Up with Google</span>
                    </button>
                    <button
                        onClick={() => signIn("github")}
                        className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition text-gray-900"
                    >
                        <FaGithub className="text-2xl mr-3" />
                        <span className="font-medium">Sign Up with GitHub</span>
                    </button>
                </div>

                <p className="text-gray-600 text-center mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#1e16df] font-medium hover:underline">
                        Sign In
                    </Link>
                </p>
            </motion.div>
        </section>
    );
};

export default SignupPage;
