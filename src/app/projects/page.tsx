import Link from "next/link";

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio built with Next.js and Tailwind CSS.',
        id: '1',
    },
    {
        title: 'E-Commerce App',
        description: 'An e-commerce platform with a beautiful UI and API integration.',
        id: '2',
    },
];

const ProjectsPage = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                        <Link
                            href={`projects/${project.id}`}
                            className="text-blue-500 font-medium mt-2 inline-block"
                        >
                            View Project →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
