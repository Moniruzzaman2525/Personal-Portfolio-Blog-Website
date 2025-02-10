"use client";
import { useState } from "react";
import { Menu, LayoutDashboard, BarChart3, Settings, MessageCircle, User, LogOut } from "lucide-react";
import NavItem from "./NavItem";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Dashboard({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside
                className={`fixed md:relative h-screen bg-white shadow-lg transition-all duration-300 p-4 z-50 md:w-64 w-16" ${isMobileMenuOpen ? "block" : "hidden"} md:block`}
            >
                <div className="flex items-center justify-between">
                    <h1 className={`md:block  hidden text-xl font-bold`}>Dashboard</h1>
                    <button
                        className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
                <nav className="mt-6 space-y-4">
                    <NavItem href="/dashboard" icon={LayoutDashboard} label="Dashboard" />
                    <NavItem href="/blogs" icon={BarChart3} label="Blog Management" />
                    <NavItem href="/manageProjects" icon={Settings} label="Project Management" />
                    <NavItem href="/messages" icon={MessageCircle} label="Message Management" />
                </nav>
            </aside>

            <div className="flex flex-col flex-1">
                <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed w-full top-0 left-0 right-0 z-40">

                    <button
                        className="md:hidden p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    <h2 className="text-xl font-semibold hidden md:block">Admin Panel</h2>

                    <div className="flex items-center space-x-4">
                        <Link href="/dashboard">
                            <button className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                                <User className="h-5 w-5" />
                                <span className="hidden md:block font-medium">Profile</span>
                            </button>
                        </Link>

                        <button
                            onClick={() => signOut()}
                            className="flex items-center space-x-2 p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                        >
                            <LogOut className="h-5 w-5" />
                            <span className="hidden md:block font-medium">Logout</span>
                        </button>
                    </div>
                </nav>

                <main className="flex-1 p-6 mt-20">{children}</main>
            </div>
        </div>
    );
}
