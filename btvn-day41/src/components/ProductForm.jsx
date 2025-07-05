import { useDispatch } from 'react-redux';
import { addProduct } from '../store/actions';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './style.sass';

export default function ProductForm() {
    const [form, setForm] = useState({
        name: '',
        price: '',
        quantity: '',
        unit: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, price, quantity, unit } = form;

        if (!name.trim() || !price || !quantity || !unit.trim()) {
            alert('Vui lòng nhập đầy đủ thông tin sản phẩm!');
            return;
        }
        if (!name.trim() || !unit.trim()) {
            alert('Tên và đơn vị không được để trống!');
            return;
        }

        if (price <= 0) {
            alert('Giá phải lớn hơn 0!');
            return;
        }

        dispatch(addProduct({
            name: name.trim(),
            price: Number(price),
            quantity: Number(quantity),
            unit: unit.trim()
        }));

        setForm({ name: '', price: '', quantity: '', unit: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField
                    sx={{ width: '200px' }}
                    name="name"
                    size="small"
                    label="Tên"
                    value={form.name}
                    onChange={handleChange}
                />
                <TextField
                    sx={{ width: '200px' }}
                    type="number"
                    size="small"
                    name="price"
                    label="Giá"
                    value={form.price}
                    onChange={handleChange}
                />
                <TextField
                    sx={{ width: '200px' }}
                    type="number"
                    size="small"
                    name="quantity"
                    label="Số lượng"
                    value={form.quantity}
                    onChange={handleChange}
                />
                <TextField
                    sx={{ width: '200px' }}
                    name="unit"
                    size="small"
                    label="Đơn vị"
                    value={form.unit}
                    onChange={handleChange}
                />
            </div>
            <Button
                sx={{ marginBottom: '20px' }}
                type="submit"
                variant="contained"
                disabled={
                    !form.name.trim() ||
                    !form.price ||
                    !form.quantity ||
                    !form.unit.trim()
                }
            >
                Thêm sản phẩm
            </Button>
        </form>
    );
}
