import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';

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
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    )
}