export type ProductsState = Product[];

export interface Product {
    id: string;
    name: string;
    price: number;
}

export interface SetAction {
    type: 'SET_PRODUCTS';
    payload: Product[];
}

export type ProductsActions = SetAction;
