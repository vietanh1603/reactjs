import React, { useState, useMemo } from 'react';
import ProductList from './components/ProductList';

const products = [
    { id: 1, name: 'Áo thun thể thao', price: 350000, category: 'Áo', brand: 'Nike' },
    { id: 2, name: 'Quần jogger', price: 750000, category: 'Quần', brand: 'Adidas' },
    { id: 3, name: 'Nón lưỡi trai', price: 250000, category: 'Phụ kiện', brand: 'Puma' },
    { id: 4, name: 'Áo hoodie', price: 1200000, category: 'Áo', brand: 'Nike' },
];

function App() {
    const [priceFilter, setPriceFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [brandFilter, setBrandFilter] = useState('all');

    const filteredProducts = useMemo(() => {
        console.log('products');
        return products.filter((product) => {
            const priceMatch =
                priceFilter === 'all' ||
                (priceFilter === '<500' && product.price < 500000) ||
                (priceFilter === '500-1tr' && product.price >= 500000 && product.price <= 1000000) ||
                (priceFilter === '>1tr' && product.price > 1000000);

            const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
            const brandMatch = brandFilter === 'all' || product.brand === brandFilter;

            return priceMatch && categoryMatch && brandMatch;
        });
    }, [priceFilter, categoryFilter, brandFilter]);

    return (
        <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
            <h2 style={{ textAlign: 'center' }}> Danh sách sản phẩm</h2>

            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                    <option value="all">Tất cả giá</option>
                    <option value="<500">Dưới 500K</option>
                    <option value="500-1tr">500K - 1 triệu</option>
                    <option value=">1tr">Trên 1 triệu</option>
                </select>

                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="all">Tất cả loại</option>
                    <option value="Áo">Áo</option>
                    <option value="Quần">Quần</option>
                    <option value="Phụ kiện">Phụ kiện</option>
                </select>

                <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
                    <option value="all">Tất cả thương hiệu</option>
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                </select>
            </div>

            <ProductList products={filteredProducts} />
        </div>
    );
}

export default App;
