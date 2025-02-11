"use client";

import { LoaderCircle } from "lucide-react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-full min-h-screen">
            <LoaderCircle className="animate-spin text-[#1e16df]" size={40} />
        </div>
    );
};

export default Loading;
