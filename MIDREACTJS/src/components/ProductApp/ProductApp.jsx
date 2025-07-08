import {useEffect, useState} from "react";

import ProductForm from "../ProductFrom/ProductForm.jsx";
import {getProducts,createProducts,updateProducts,deleteProduct} from "../../plugins/api.js";


export default function () {
    const [products, setProducts] = useState([]);

    const fetchProduct = async () => {
        try {
            const data = await getProducts()
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <ProductForm/>
        </>
    )
}