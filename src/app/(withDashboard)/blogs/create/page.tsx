"use client";

import BlogForm from "@/components/dashboard/BlogForm";
import { FieldValues } from "react-hook-form";

export default function BlogManagementPage() {
    const handleAddBlog = (data: FieldValues) => {
        console.log(data)
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mb-4">Blog Management</h2>
            <BlogForm onAddBlog={handleAddBlog} />
        </div>
    );
}
