import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    MyPortfolio
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/projects" className="text-gray-600 hover:text-blue-500">
                        Projects
                    </Link>
                    <Link href="/blog" className="text-gray-600 hover:text-blue-500">
                        Blog
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-blue-500">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-500">
                        Contact
                    </Link>
                </div>
                <button className="md:hidden text-gray-800 text-2xl">☰</button>
            </div>
        </nav>
    );
};

export default Navbar;
