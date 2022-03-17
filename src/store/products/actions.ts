import { SET_PRODUCTS } from '../actionTypes';
import { Product, ProductsActions } from './types';

export const setProducts = (products: Product[]): ProductsActions => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    };
};
