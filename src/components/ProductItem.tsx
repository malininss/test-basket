import { Product } from '../store/products/types';

interface ProductItemProps {
    product: Product;
    quantity?: number;
    button: {
        type: 'add' | 'remove';
        clickHandler: () => void;
    };
}

const ProductItem: React.FC<ProductItemProps> = props => {
    return (
        <div key={props.product.id} className="products__item">
            <div>
                <b>{props.product.name}</b>
            </div>
            <div>Price: {props.product.price}$</div>
            {props.quantity && <div>Quantity: {props.quantity}</div>}
            <button onClick={() => props.button.clickHandler()}>
                {props.button.type === 'add' ? 'Add to basket' : 'Remove'}
            </button>
        </div>
    );
};

export default ProductItem;
