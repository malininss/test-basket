import { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET } from '../actionTypes';
import { Product } from '../products/types';
import { BasketActions } from './types';

export const addProductToBasket = (product: Product): BasketActions => {
    return {
        type: ADD_PRODUCT_TO_BASKET,
        payload: product,
    };
};
export const removeProductFromBasket = (productId: string): BasketActions => {
    return {
        type: REMOVE_PRODUCT_FROM_BASKET,
        payload: productId,
    };
};
