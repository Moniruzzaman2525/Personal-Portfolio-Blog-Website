import ProductCart from "@/components/shared/ProductCart";

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js and Tailwind CSS.",
        image: "/projects/portfolio.jpg",
        _id: "1",
    },
    {
        title: "E-Commerce App",
        description: "An e-commerce platform with a beautiful UI and API integration.",
        image: "/projects/ecommerce.jpg",
        _id: "2",
    },
    {
        title: "AI Chatbot",
        description: "A smart AI-powered chatbot using Next.js and OpenAI API.",
        image: "/projects/ai-chatbot.jpg",
        _id: "3",
    },
    {
        title: "Task Management App",
        description: "A full-stack task manager with user authentication and real-time updates.",
        image: "/projects/task-manager.jpg",
        _id: "4",
    },

];

const ProjectsPage = async () => {

    const res = await fetch('http://localhost:5000/api/products')
    console.log(await res.json())

    return (
        <div className="relative w-full bg-[#fbfbfe] py-16 px-6 md:px-12 lg:px-24">
            <div className=" mx-auto">

                {/* <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-extrabold text-gray-900 text-center"
                >
                    My Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-600 text-lg text-center mt-4"
                >
                    A showcase of my best projects, built with modern web technologies.
                </motion.p> */}
                <div className="text-4xl font-extrabold text-gray-900 text-center">
                    All Projects
                </div>
                <div className="text-gray-600 text-lg text-center mt-4">
                    A showcase of my best projects, built with modern web technologies.
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <ProductCart project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
