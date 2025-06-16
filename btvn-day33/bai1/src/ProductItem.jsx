

const ProductItem = ({name,price}) => {
    return (
        <>
            <p>{name}:</p>
            <span>Giá: {price} VNĐ</span>
        </>
    )
}
export default ProductItem