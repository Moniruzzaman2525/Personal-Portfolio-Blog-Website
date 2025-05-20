
import SingleProject from "@/components/SingleProject";
import { getSingleProject } from "@/services/Projects";

const SingleProduct = async ({ params }: { params: { id: string } }) => {

    const projectId = await params
    const pId = projectId?.id

    const project = await getSingleProject(pId)

    return (
        <div>
            <SingleProject project={project.data} />
        </div>
    );
};

export default SingleProduct;

