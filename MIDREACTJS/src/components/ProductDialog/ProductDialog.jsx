import { useEffect, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    MenuItem
} from "@mui/material";
import {createProduct, getCategories, getProducts} from "../../plugins/api.js";
import './style.sass';

export default function ({ open, onClose, onSuccess }) {
    const [form, setForm] = useState({ name: '', categoryId: '', orderNum: '' });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await getCategories();
            setCategories(res);
        };
        if (open) fetchCategories();
    }, [open]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!form.name || !form.categoryId || !form.orderNum) {
            return alert("Vui lòng nhập đầy đủ");
        }

        const products = await getProducts();
        const maxId = products.reduce((max, p) => Math.max(max, p.id), 0);

        const newProduct = {
            id: maxId + 1,
            name: form.name,
            categoryId: form.categoryId,
            orderNum: Number(form.orderNum)
        };

        await createProduct(newProduct);
        onSuccess();
        onClose();
        setForm({ name: '', categoryId: '', orderNum: '' });
    };


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Thêm mới sản phẩm</DialogTitle>
            <DialogContent className="dialog-content">
                <TextField
                    fullWidth
                    label="Tên sản phẩm"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    size="small"
                    margin="dense"
                />
                <TextField
                    fullWidth
                    select
                    label="Danh mục"
                    name="categoryId"
                    value={form.categoryId}
                    onChange={handleChange}
                    size="small"
                    margin="dense"
                >
                    {categories.map((cat) => (
                        <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    fullWidth
                    label="Số thứ tự"
                    name="orderNum"
                    value={form.orderNum}
                    onChange={handleChange}
                    size="small"
                    type="number"
                    margin="dense"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button variant="contained" onClick={handleSubmit}>Lưu</Button>
            </DialogActions>
        </Dialog>
    );
}
