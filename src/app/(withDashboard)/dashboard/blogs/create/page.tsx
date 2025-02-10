"use client";

import BlogForm from "@/components/dashboard/BlogForm";
import { FieldValues } from "react-hook-form";

export default function BlogManagementPage() {
    const handleAddBlog = (data: FieldValues) => {
        console.log(data)
    };

    return (
        <div>
            <BlogForm onAddBlog={handleAddBlog} />
        </div>
    );
}
