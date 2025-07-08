import { useEffect, useState } from "react";
import { getProducts, getCategories } from "../../plugins/api.js";
import { Button } from "@mui/material";
import AddProductDialog from "../ProductDialog/ProductDialog.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [openAdd, setOpenAdd] = useState(false);

    const fetchData = async () => {
        const [productsRes, categoriesRes] = await Promise.all([
            getProducts(),
            getCategories()
        ]);
        const merged = productsRes.map(p => {
            const cat = categoriesRes.find(c => c.id === p.categoryId);
            return { ...p, categoryName: cat?.name || "Unknown" };
        });
        setProducts(merged);
        setCategories(categoriesRes);
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div className="product-container">
            <h1>Quản lý sản phẩm</h1>
            <div className="product-title">
                <span>Danh sách sản phẩm</span>
                <Button variant="contained" onClick={() => setOpenAdd(true)}>THÊM MỚI</Button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>ID</th><th>Tên</th><th>Danh mục</th><th>STT</th><th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {products.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.categoryName}</td>
                        <td>{p.orderNum}</td>
                        <td>
                            <Button size="small" color="primary">Sửa</Button>
                            <Button size="small" color="error">Xoá</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <AddProductDialog
                open={openAdd}
                onClose={() => setOpenAdd(false)}
                onSuccess={fetchData}
            />
        </div>
    );
}
