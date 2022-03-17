import { useDispatch } from 'react-redux';
import { addProductToBasket } from '../store/basket/actions';
import { useEffect } from 'react';
import { api } from '../services/apiService';
import { setProducts } from '../store/products/actions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ProductItem from './ProductItem';

interface Product {
    id: string;
    name: string;
    price: number;
}

const Products: React.FC = () => {
    const dispatch = useDispatch();
    const products = useTypedSelector(state => state.products);

    const addClickHandler = (product: Product) => {
        dispatch(addProductToBasket(product));
    };

    const elements = products.map(product => (
        <ProductItem
            key={product.id}
            product={product}
            button={{
                type: 'add',
                clickHandler: () => addClickHandler(product),
            }}
        />
    ));

    useEffect(() => {
        api<Product[]>('../products.json').then(result => {
            dispatch(setProducts(result));
        });
    }, [dispatch]);

    return (
        <div className="product-list">
            <h2>List of products</h2>
            <div className="products">{elements}</div>
        </div>
    );
};

export default Products;
