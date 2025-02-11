

const ListsBlogs = async () => {

    const res = await fetch('http://localhost:5000/api/blogs')
    console.log(await res.json())




    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">All Blogs</h2>

        </div>
    );
};

export default ListsBlogs;

