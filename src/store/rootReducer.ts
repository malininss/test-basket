import { combineReducers, Reducer } from 'redux';
import basketReducer from './basket/reducer';
import { BasketState } from './basket/types';
import productsReducer from './products/reducer';
import { ProductsState } from './products/types';

export interface AppState {
    basket: BasketState;
    products: ProductsState;
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
    basket: basketReducer,
    products: productsReducer,
});
