
"use client"
import { useState } from "react";
import { Menu, LayoutDashboard, BarChart3, Settings, LogOut } from "lucide-react";

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? "w-64" : "w-16"
                    } bg-white shadow-lg transition-all duration-300 p-4 fixed md:relative h-full z-50`}
            >
                <div className="flex items-center justify-between">
                    <h1 className={`${isSidebarOpen ? "block" : "hidden"} text-xl font-bold`}>Dashboard</h1>
                    <button
                        className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
                <nav className="mt-6 space-y-4">
                    <NavItem icon={LayoutDashboard} label="Dashboard" isSidebarOpen={isSidebarOpen} />
                    <NavItem icon={BarChart3} label="Analytics" isSidebarOpen={isSidebarOpen} />
                    <NavItem icon={Settings} label="Settings" isSidebarOpen={isSidebarOpen} />
                    <NavItem icon={LogOut} label="Logout" isSidebarOpen={isSidebarOpen} />
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 ml-16 md:ml-0 mt-16 md:mt-0">
                <h2 className="text-2xl font-semibold">Welcome to Your Dashboard</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    <StatCard title="Total Users" value="1,250" />
                    <StatCard title="Revenue" value="$45,000" />
                    <StatCard title="New Orders" value="120" />
                </div>
            </main>
        </div>
    );
}

function NavItem({ icon: Icon, label, isSidebarOpen }) {
    return (
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <Icon className="h-5 w-5" />
            <span className={`${isSidebarOpen ? "block" : "hidden"} font-medium`}>{label}</span>
        </div>
    );
}

function StatCard({ title, value }) {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center">
            <h3 className="text-lg font-medium text-gray-600">{title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
    );
}
