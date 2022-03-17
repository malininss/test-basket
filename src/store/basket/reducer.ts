import { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET } from '../actionTypes';
import { Product } from '../products/types';
import { BasketActions, BasketElem, BasketState } from './types';

const initialBasketState = {
    products: [],
};

const findCurrentItemIndex = (
    productId: string,
    productsArr: BasketElem[]
): number | undefined => {
    for (let i in productsArr) {
        const currentItem = productsArr[i];
        if (currentItem.product.id === productId) {
            return +i;
        }
    }
};

const removeProduct = (productId: string, state: BasketState): BasketElem[] => {
    const newProductsArr: BasketElem[] = [...state.products];
    const currentItemIndex = findCurrentItemIndex(productId, newProductsArr);

    if (currentItemIndex !== undefined) {
        newProductsArr[currentItemIndex].quantity--;
        if (newProductsArr[currentItemIndex].quantity <= 0) {
            newProductsArr.splice(currentItemIndex, 1);
        }
    }
    return newProductsArr;
};

const updateProducts = (product: Product, state: BasketState): BasketElem[] => {
    const newProductsArr: BasketElem[] = [...state.products];
    const currentItemIndex = findCurrentItemIndex(product.id, newProductsArr);

    if (currentItemIndex !== undefined) {
        newProductsArr[currentItemIndex].quantity++;
        return newProductsArr;
    }

    newProductsArr.push({
        product: product,
        quantity: 1,
    });

    return newProductsArr;
};

const basketReducer = (
    state: BasketState = initialBasketState,
    action: BasketActions
) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET:
            return {
                ...state,
                products: updateProducts(action.payload, state),
            };
        case REMOVE_PRODUCT_FROM_BASKET:
            return {
                ...state,
                products: removeProduct(action.payload, state),
            };
        default:
            return state;
    }
};

export default basketReducer;
