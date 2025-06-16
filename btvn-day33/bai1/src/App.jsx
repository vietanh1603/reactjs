import { useState } from 'react'
import ProductList from './ProductList.jsx'
import './App.css'

function App() {
    const [products] = useState([
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Smartphone", price: 800 },
        { id: 3, name: "Headphones", price: 100 },
        { id: 4, name: "Mouse", price: 50 }
    ]);

    return (
        <>
            <h1>Danh sách sản phẩm</h1>
            <ProductList products={products} />
        </>
    )
}

export default App