
import SingleBlog from "@/components/SingleBlog";
import { TBlog } from "@/types/blog";



const BlogPage = async () => {
    const res = await fetch("http://localhost:5000/api/blogs");
    const data = await res.json();

    return (
        <div className="relative w-full bg-[#fbfbfe] py-16 px-6 md:px-12 lg:px-24">
            <div className="mx-auto">
                <div className="text-4xl font-extrabold text-gray-900 text-center">
                    All Projects
                </div>
                <div className="text-gray-600 text-lg text-center mt-4">
                    A showcase of my best projects, built with modern web technologies.
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data?.data.map((blog: TBlog, index: number) => (
                        <SingleBlog key={blog._id} blog={blog} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
