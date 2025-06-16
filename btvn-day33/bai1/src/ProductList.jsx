import ProductItem  from "./ProductItem.jsx";

const ProductList = ({products}) => {
    return (
        <div>
            {products.map(product => (
                    <ProductItem
                        id={product.id}
                        name={product.name}
                        price={product.price}
                    />
                ))}
        </div>
    )
}
export default ProductList