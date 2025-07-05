
import { createStore, combineReducers } from 'redux';
import index from './Product/index.js';

const rootReducer = combineReducers({
    products: index,
});

export const store = createStore(rootReducer);
