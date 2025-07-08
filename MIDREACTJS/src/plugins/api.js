import axios from "axios";

const baseUrl = 'http://localhost:3000';


export const getProducts = async () => {
    const [productsRes, categoriesRes] = await Promise.all([
        axios.get(`${baseUrl}/products`),
        axios.get(`${baseUrl}/categories`)
    ]);

    const products = productsRes.data;
    const categories = categoriesRes.data;

    const merged = products.map(product => {
        const category = categories.find(c => c.id === product.categoryId);
        return {
            ...product,
            categoryName: category ? category.name : 'Unknown'
        };
    });

    return merged;
};


export const createProduct = async (product) => {
    const response = await axios.post(`${baseUrl}/products`, product);
    return response.data;
};


export const updateProduct = async (id, product) => {
    const response = await axios.put(`${baseUrl}/products/${id}`, product);
    return response.data;
};


export const deleteProduct = async (id) => {
    const response = await axios.delete(`${baseUrl}/products/${id}`);
    return response.data;
};

export const getCategories = async () => {
    const res = await axios.get(`${baseUrl}/categories`);
    return res.data;
};
