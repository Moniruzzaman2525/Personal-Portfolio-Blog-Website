type ProductDetailsProps = {
    params: {
        productId: string;
    };
    searchParams?: Record<string, string>;
};

const ProductDetails = async ({ params }: ProductDetailsProps) => {
    const productId = await params.productId
    console.log(productId)
    return (
        <div>
            Single Product page
        </div>
    );
};

export default ProductDetails;
