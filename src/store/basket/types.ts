import { Product } from '../products/types';

export interface BasketState {
    products: BasketElem[];
}

export interface BasketElem {
    product: Product;
    quantity: number;
}

export interface addProductToBasket {
    type: 'ADD_PRODUCT_TO_BASKET';
    payload: Product;
}
export interface removeProductFromBasket {
    type: 'REMOVE_PRODUCT_FROM_BASKET';
    payload: string;
}

export type BasketActions = addProductToBasket | removeProductFromBasket;
