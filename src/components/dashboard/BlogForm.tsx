/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PPForm from "../form/PPForm";
import PPInput from "../form/PPInput";
import PPSelect from "../form/PPSelect";
import PPTextarea from "../form/PPTextarea";
interface BlogFormProps {
    onAddBlog: (blog: any) => void;
}
const BlogForm = ({ onAddBlog }: BlogFormProps) => {


    return (
        <PPForm onSubmit={onAddBlog} style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0,0,0,0.1)" }}>
            <h3 className="text-xl font-semibold mb-4">Create a New Blog</h3>
            <PPInput type="text" name="title" label="Title" placeholder="Enter blog title" />
            <PPTextarea name="content" label="Content" placeholder="Write your blog content here..." rows={4} />
            <PPInput type="text" name="image" label="Image URL" placeholder="Enter image URL (optional)" />
            <PPSelect
                name="category"
                label="Category"
                options={[
                    { value: "Technology", label: "Technology" },
                    { value: "Business", label: "Business" },
                    { value: "Lifestyle", label: "Lifestyle" },
                    { value: "Health", label: "Health" },
                ]}
            />
        </PPForm>
    );
};

export default BlogForm;
