import {ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from '../actions/constants.js';

const initialState = [
    { id: 'p001', name: 'Táo Mỹ', price: 85000, quantity: 20, unit: 'kg' }
];

const index = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const newId = 'p' + String(state.length + 1).padStart(3, '0');
            return [...state, { id: newId, ...action.value }];

        case UPDATE_PRODUCT:
            return state.map(product =>
                product.id === action.value.id
                    ? { ...product, ...action.value.updates }
                    : product
            );

        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.value);

        default:
            return state;
    }
};

export default index;
