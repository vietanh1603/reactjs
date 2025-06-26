import React from 'react';

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' VND';
}

const ProductItem = ({ product }) => {
    return (
        <div
            style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 6,
                marginBottom: 10,
            }}
        >
            <strong>{product.name}</strong> - {formatPrice(product.price)} - {product.category} - {product.brand}
        </div>
    );
}

export default ProductItem;
