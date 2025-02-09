

const ProductDetails = async ({ params, searchParams }) => {
    const productId = await params.productId
    console.log(productId)
    return (
        <div>
            Single Product page
        </div>
    );
};

export default ProductDetails;
