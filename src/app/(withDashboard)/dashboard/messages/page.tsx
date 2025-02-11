/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import { Trash2, Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import Loading from "@/components/shared/Loading";

interface Message {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
}

const ListsMessages = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedSession = localStorage.getItem("userSession");
        const session = storedSession ? JSON.parse(storedSession) : null;
        const userEmail = session?.user?.email;

        if (!userEmail) {
            setError("User email not found. Please log in again.");
            setLoading(false);
            return;
        }

        fetch("http://localhost:5000/api/messages", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "user-email": userEmail,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch messages");
                }
                return res.json();
            })
            .then((data) => {
                setMessages(data.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this message?")) return;
        const storedSession = localStorage.getItem("userSession");
        const session = storedSession ? JSON.parse(storedSession) : null;
        const userEmail = session?.user?.email;

        if (!userEmail) {
            router.push("/login");
            return;
        }
        try {
            const res = await fetch(`http://localhost:5000/api/messages/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "user-email": userEmail,
                },
            });

            if (!res.ok) {
                throw new Error("Failed to delete message");
            }

            setMessages(messages.filter((message) => message._id !== id));
        } catch (err) {
            setError("Error deleting message. Please try again.");
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center md:text-left">All Messages</h2>
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr className="text-gray-700 text-sm md:text-base">
                            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-300 px-4 py-2 hidden lg:table-cell">Email</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                            <th className="border border-gray-300 px-4 py-2 hidden xl:table-cell">Message</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Date</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.length > 0 ? (
                            messages.map((message) => (
                                <tr key={message._id} className="hover:bg-gray-50 text-sm md:text-base">
                                    <td className="border border-gray-300 px-4 py-2">{message.name}</td>
                                    <td className="border border-gray-300 px-4 py-2 hidden lg:table-cell">{message.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{message.subject}</td>
                                    <td className="border border-gray-300 px-4 py-2 hidden xl:table-cell truncate max-w-xs">
                                        {message.message.length > 50 ? `${message.message.slice(0, 50)}...` : message.message}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {new Date(message.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                className="text-blue-600 hover:text-blue-800 p-2"
                                                onClick={() => router.push(`/dashboard/messages/edit/${message._id}`)}
                                            >
                                                <Edit size={18} />
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-800 p-2"
                                                onClick={() => handleDelete(message._id)}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center text-gray-500 py-4">
                                    No messages available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden">
                {messages.length > 0 ? (
                    messages.map((message) => (
                        <div key={message._id} className="bg-gray-100 p-4 rounded-lg shadow mb-4">
                            <h3 className="text-lg font-semibold">{message.subject}</h3>
                            <p className="text-gray-600 text-sm">{message.message.length > 50 ? `${message.message.slice(0, 50)}...` : message.message}</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-xs text-gray-500">{new Date(message.createdAt).toLocaleDateString()}</span>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="text-blue-600 hover:text-blue-800"
                                        onClick={() => router.push(`/dashboard/messages/edit/${message._id}`)}
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button
                                        className="text-red-600 hover:text-red-800"
                                        onClick={() => handleDelete(message._id)}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No messages available.</p>
                )}
            </div>
        </div>
    );
};

export default ListsMessages;
