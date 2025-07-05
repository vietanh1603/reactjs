export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const updateProduct = (id, updates) => ({
    type: UPDATE_PRODUCT,
    value: { id, updates },
});

export {
    updateProduct
}