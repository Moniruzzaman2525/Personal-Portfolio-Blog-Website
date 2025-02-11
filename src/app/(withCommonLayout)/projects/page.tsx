import ProductCart from "@/components/shared/ProductCart";
import { TProject } from "@/types/project";

const ProjectsPage = async () => {
    const res = await fetch("http://localhost:5000/api/projects")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch projects");
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching projects:", error);
            return null;
        });

    if (!res || !res.data) {
        return <div className="text-center text-red-600">Failed to load projects.</div>;
    }

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
                    {res.data.map((project: TProject, index: number) => (
                        <ProductCart key={project._id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
