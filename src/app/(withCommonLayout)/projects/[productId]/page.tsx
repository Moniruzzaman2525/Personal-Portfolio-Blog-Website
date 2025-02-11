import SingleProject from "@/components/SingleProject";


type ProductDetailsProps = {
    params: {
        productId: string;
    };
    searchParams?: Record<string, string>;
};
const fetchProject = async (id: string) => {
    return fetch(`http://localhost:5000/api/projects/${id}`)
        .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch project");
            return res.json();
        })
        .catch((error) => {
            console.error("Error fetching project:", error);
            return null;
        });
};

const SingleProjectPage = async ({params}: ProductDetailsProps) => {

    const { productId } = await params
    const project = await fetchProject(productId)

    return (
        <div>
            <SingleProject project={project.data} />
        </div>
    );
};

export default SingleProjectPage;
