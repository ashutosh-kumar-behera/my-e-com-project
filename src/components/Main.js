import { useDispatch } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action';

export const Main = () => {
    const dispatch = useDispatch();
    const product = {
        name: 'I Phone',
        type: 'mobile',
        price: 10000,
        color: 'red'
    }
    return (
        <div>
            <div>
                <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(removeFromCart(product))}>Remove from Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div>
        </div>
    )
}