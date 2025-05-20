
import SingleBlocksPage from "@/components/SingleBlocksPage";
import { getSingleBlock } from "@/services/blocks";
const SingleBlog = async ({ params }: { params: { blockId: string } }) => {

    const blockId = await params
    const id = blockId?.blockId
    const block = await getSingleBlock(id)

    return (
        <div>
            <SingleBlocksPage blog={block.data} />
        </div>
    );
};

export default SingleBlog;
