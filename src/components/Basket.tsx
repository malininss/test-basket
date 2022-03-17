import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { removeProductFromBasket } from '../store/basket/actions';
import { BasketState } from '../store/basket/types';
import ProductItem from './ProductItem';

const getTotalPrice = (basketState: BasketState): number => {
    return basketState.products.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    );
};

const Basket: React.FC = () => {
    const dispatch = useDispatch();
    const state = useTypedSelector(state => state.basket);

    const totalPrice = getTotalPrice(state);

    const removeClickHandler = (productId: string) => {
        dispatch(removeProductFromBasket(productId));
    };

    const elem = (
        <div className="basket">
            <h2>Basket</h2>
            <div className="products">
                {state.products.length ? (
                    state.products.map(item => (
                        <ProductItem
                            key={item.product.id}
                            product={item.product}
                            quantity={item.quantity}
                            button={{
                                type: 'remove',
                                clickHandler: () =>
                                    removeClickHandler(item.product.id),
                            }}
                        />
                    ))
                ) : (
                    <div>No products in the basket</div>
                )}
            </div>
            {Boolean(totalPrice) && (
                <div>
                    Total price: <b>{totalPrice}</b>
                </div>
            )}
        </div>
    );
    return elem;
};

export default Basket;
