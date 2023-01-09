import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';

export const Main = () => {
    const dispatch = useDispatch();
    let data = useSelector((state)=>state.productData);
    console.log("data in Main component", data);
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
            <div>
                <button onClick={()=>dispatch(productList())}>Call Product List</button>
            </div>
        </div>
    )
}