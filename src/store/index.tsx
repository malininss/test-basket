import { createStore, Store } from 'redux';
import { AppState, reducers } from './rootReducer';

export default function configureStore(
    initialState: AppState = {
        basket: {
            products: [],
        },
        products: [],
    }
): Store<AppState> {
    return createStore(reducers, initialState);
}
