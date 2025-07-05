
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../store/actions';
import { TextField } from '@mui/material';
import {useState} from "react";


export default function ProductList() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [searchId, setSearchId] = useState('');

    const handleEdit = (product) => {
        const name = prompt('Tên mới:', product.name);
        const price = prompt('Giá mới:', product.price);
        const quantity = prompt('Số lượng mới:', product.quantity);
        const unit = prompt('Đơn vị mới:', product.unit);

        dispatch(updateProduct(product.id, {
            name,
            price: Number(price),
            quantity: Number(quantity),
            unit
        }));
    };
    const filteredProducts = searchId
        ? products.filter(p => p.id.toLowerCase().includes(searchId.toLowerCase()))
        : products;
    return (
        <div>
            <TextField
                type="text"
                label="Search ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                style={{ marginBottom: '20px'}}
            />

            <table border="1" cellPadding="8" cellSpacing="0">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá bán (VNĐ)</th>
                    <th>Số lượng</th>
                    <th>Đơn vị</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price.toLocaleString()}</td>
                        <td>{product.quantity}</td>
                        <td>{product.unit}</td>
                        <td>
                            <button onClick={() => handleEdit(product)}>Sửa</button>
                            <button onClick={() => dispatch(deleteProduct(product.id))}>Xoá</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
