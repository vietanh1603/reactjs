export const DELETE_PRODUCT = 'DELETE_PRODUCT';

const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    value: id,
});

export {
    deleteProduct,
}
