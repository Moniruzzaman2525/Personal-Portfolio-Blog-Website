"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) =>
        pathname === path ? "text-[#1e16df] font-bold" : "text-gray-600 hover:text-[#1e16df] transition duration-300";

    return (
        <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className={`text-2xl font-extrabold text-[#1e16df]`}>
                    MyPortfolio
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className={isActive("/")}>Home</Link>
                    <Link href="/projects" className={isActive("/projects")}>Projects</Link>
                    <Link href="/blog" className={isActive("/blog")}>Blog</Link>
                    <Link href="/contact" className={isActive("/contact")}>Contact</Link>
                    <Link href="/login" className={isActive("/login")}>Login</Link>
                </div>

                <button
                    className="md:hidden text-gray-800 text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-md py-4 px-6 absolute top-16 left-0 w-full">
                    <Link href="/" className={`block py-2 ${isActive("/")}`} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/projects" className={`block py-2 ${isActive("/projects")}`} onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="/blog" className={`block py-2 ${isActive("/blog")}`} onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link href="/contact" className={`block py-2 ${isActive("/contact")}`} onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link href="/login" className={`block py-2 ${isActive("/login")}`} onClick={() => setIsOpen(false)}>Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
