"use client";

import { useEffect, useState } from "react";

interface Message {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
}

const MessagePage = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const storedSession = localStorage.getItem("userSession");
        const session = storedSession ? JSON.parse(storedSession) : null;
        const userEmail = session?.user?.email;

        if (!userEmail) {
            setError("User email not found. Please log in.");
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

    return (
        <div className="p-6 bg-white min-h-screen">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
                Your Messages
            </h2>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {loading ? (
                <p className="text-gray-600 text-center">Loading messages...</p>
            ) : messages.length === 0 ? (
                <p className="text-gray-600 text-center">No messages found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-sm md:text-base">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="p-3 border text-left">Name</th>
                                <th className="p-3 border text-left hidden sm:table-cell">Email</th>
                                <th className="p-3 border text-left">Subject</th>
                                <th className="p-3 border text-left hidden md:table-cell">Message</th>
                                <th className="p-3 border text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((msg) => (
                                <tr key={msg._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3 border">{msg.name}</td>
                                    <td className="p-3 border hidden sm:table-cell">{msg.email}</td>
                                    <td className="p-3 border">{msg.subject}</td>
                                    <td className="p-3 border hidden md:table-cell truncate max-w-xs">
                                        {msg.message.length > 50 ? msg.message.slice(0, 50) + "..." : msg.message}
                                    </td>

                                    <td className="p-3 border">
                                        {new Date(msg.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MessagePage;
