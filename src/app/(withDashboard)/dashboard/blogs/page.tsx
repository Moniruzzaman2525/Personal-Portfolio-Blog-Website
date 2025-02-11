/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Trash2, Edit } from "lucide-react";
import { useRouter } from "next/navigation";

interface Blog {
    _id: string;
    title: string;
    createdAt: string;
}

const ListsBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()

    useEffect(() => {
        const storedSession = localStorage.getItem("userSession");
        const session = storedSession ? JSON.parse(storedSession) : null;
        const userEmail = session?.user?.email;

        if (!userEmail) {
            setError("User email not found. Please log in again.");
            setLoading(false);
            return;
        }

        fetch("http://localhost:5000/api/blogs/user-blogs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "user-email": userEmail,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog?")) return;
        const storedSession = localStorage.getItem("userSession");
        const session = storedSession ? JSON.parse(storedSession) : null;
        const userEmail = session?.user?.email;

        if (!userEmail) {
            setError("User email not found. Please log in again.");
            setLoading(false);
            router.push('/login')
            return;
        }
        try {
            const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "user-email": userEmail,
                },
            });

            if (!res.ok) {
                throw new Error("Failed to delete blog");
            }

            setBlogs(blogs.filter((blog) => blog._id !== id));
        } catch (err: any) {
            alert(err.message);
        }
    };

    if (loading) {
        return <div className="text-center py-10 text-gray-500">Loading blogs...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">All Blogs</h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr className="text-gray-700 text-sm md:text-base">
                            <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                            <th className="border border-gray-300 px-4 py-2 hidden sm:table-cell">Published Date</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <tr key={blog._id} className="hover:bg-gray-50 text-sm md:text-base">
                                    <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center hidden sm:table-cell">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                className="text-blue-600 hover:text-blue-800 p-2"
                                                onClick={() => alert(`Edit blog ${blog._id}`)}
                                            >
                                                <Edit size={18} />
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-800 p-2"
                                                onClick={() => handleDelete(blog._id)}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center text-gray-500 py-4">
                                    No blogs available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListsBlogs;

