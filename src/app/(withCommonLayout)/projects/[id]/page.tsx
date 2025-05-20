/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "@/components/shared/Loading";
import { urls } from "@/utils/urls";
import SingleProject from "@/components/SingleProject";
import { TProject } from "@/types/project";
const SingleProduct = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<TProject | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`${urls}/api/projects/${id}`);
                if (!res.ok) throw new Error("Projects not found");
                const data = await res.json();
                setBlog(data.data);
            } catch (err: any) {
                setError(err.message || "Failed to fetch");
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchBlog();
    }, [id]);

    if (loading) {
        return <Loading />
    }

    if (error || !blog) {
        return <div className="text-center text-red-500 py-20">Error: {error || "Blog not found"}</div>;
    }

    return (
        <div>
            <SingleProject project={blog} />
        </div>
    );
};

export default SingleProduct;

