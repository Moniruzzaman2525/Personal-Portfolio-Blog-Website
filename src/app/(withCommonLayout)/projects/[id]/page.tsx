import SingleProject from "@/components/SingleProject";


type ProductDetailsProps = {
    params: {
        id: string;
    };
};

const SingleProjectPage = async ({ params }: ProductDetailsProps) => {

    const { id } = params
    const res = await fetch(`http://localhost:5000/api/projects/${id}`)
    const project = await res.json()

    return (
        <div>
            <SingleProject project={project.data} />
        </div>
    );
};

export default SingleProjectPage;
