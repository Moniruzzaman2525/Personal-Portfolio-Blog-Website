
import SingleBlog from "@/components/SingleBlog";
import { getBlocks } from "@/services/blocks";
import { TBlog } from "@/types/blog";

const BlogPage = async () => {
    const res = await getBlocks();
    const data = res.data;

    return (
        <div className="relative w-full bg-[#fbfbfe] py-16 px-6 md:px-12 lg:px-24">
            <div className="mx-auto">
                <div className="text-4xl font-extrabold text-gray-900 text-center">
                    All Blogs
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data?.map((blog: TBlog, index: number) => (
                        <SingleBlog key={blog._id} blog={blog} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
