"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "@/components/shared/Loading";
import { TBlog } from "@/types/blog";
import { urls } from "@/utils/urls";
import SingleBlocksPage from "@/components/SingleBlocksPage";
const SingleBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<TBlog | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(`${urls}/api/blogs/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Blog not found");
                }
                return res.json();
            })
            .then((data) => {
                setBlog(data.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loading />
    }

    if (error || !blog) {
        return <div className="text-center text-red-500 py-20">Error: {error || "Blog not found"}</div>;
    }

    return (
        <div>
            <SingleBlocksPage blog={blog} />
        </div>
    );
};

export default SingleBlog;
