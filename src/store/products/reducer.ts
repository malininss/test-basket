import { SET_PRODUCTS } from '../actionTypes';
import { Product, ProductsActions, ProductsState } from './types';

const initialProductsState: Product[] = [];

const productsReducer = (
    state: ProductsState = initialProductsState,
    action: ProductsActions
) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default productsReducer;
