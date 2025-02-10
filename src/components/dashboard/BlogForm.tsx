/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import PPForm from "../form/PPForm";
import PPInput from "../form/PPInput";
import PPSelect from "../form/PPSelect";
import PPTextarea from "../form/PPTextarea";

const categoryOption = [
    { value: "Technology", label: "Technology" },
    { value: "Business", label: "Business" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Health", label: "Health" },
];

const BlogForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const onAddBlog = async (data: FieldValues) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("http://localhost:5000/api/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || "Failed to create blog");
            }
            router.push("/blogs"); 
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PPForm onSubmit={onAddBlog} style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0,0,0,0.1)" }}>
            <h3 className="text-xl font-semibold mb-4">Create a New Blog</h3>
            {error && <p className="text-red-500 text-center mb-2">{error}</p>}
            <PPInput required type="text" name="title" label="Title" placeholder="Enter blog title" />
            <PPTextarea required name="content" label="Content" placeholder="Write your blog content here..." rows={4} />
            <PPInput required type="text" name="image" label="Image URL" placeholder="Enter image URL" />
            <PPSelect required name="category" label="Category" options={categoryOption} />
            <button type="submit" disabled={loading} className={`inline-block px-6 py-3 text-white font-medium text-lg rounded-lg shadow-md transition duration-300 ${loading ? "bg-gray-400" : "bg-[#1e16df] hover:bg-[#3830cf]"}`}>
                {loading ? "Submitting..." : "Submit"}
            </button>
        </PPForm>
    );
};

export default BlogForm;
