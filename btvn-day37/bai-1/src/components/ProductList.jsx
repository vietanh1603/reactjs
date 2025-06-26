import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    if (products.length === 0) {
        return <p>Không có sản phẩm phù hợp</p>;
    }

    return (
        <div>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
