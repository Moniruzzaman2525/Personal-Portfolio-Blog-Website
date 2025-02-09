"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path ? "text-blue-500 font-bold" : "text-gray-600 hover:text-blue-500";

    return (
        <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className={`text-2xl font-bold ${isActive('/')}`}>
                    MyPortfolio
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/projects" className={isActive('/projects')}>Projects</Link>
                    <Link href="/blog" className={isActive('/blog')}>Blog</Link>
                    <Link href="/about" className={isActive('/about')}>About</Link>
                    <Link href="/contact" className={isActive('/contact')}>Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-800 text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md py-4 px-6 absolute top-16 left-0 w-full">
                    <Link href="/projects" className={`block py-2 ${isActive('/projects')}`} onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="/blog" className={`block py-2 ${isActive('/blog')}`} onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link href="/about" className={`block py-2 ${isActive('/about')}`} onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" className={`block py-2 ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
