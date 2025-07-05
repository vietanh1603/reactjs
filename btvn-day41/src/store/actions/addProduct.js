export const ADD_PRODUCT = 'ADD_PRODUCT';
const addProduct = (product) => ({
    type: ADD_PRODUCT,
    value: product,
})
export  {
    addProduct,
}