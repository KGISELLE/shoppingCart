import React, {useState, useContext} from 'react';

import { CartContext } from '../Context/CartContext';

import ModalPDP from './ModalPDP';
import Cart from './Cart';


import '../CSS/Products.css'


const Products = (props) => {

    const [modalState, setModalState] = useState(false);

    const [nameState, setNameState] = useState([]);

    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        console.log('Hiciste click')
        const info = {name: nameState.name, price: nameState.price};
        // console.log(priceProduct)
        setCart(currentState => [...currentState, info]);
    }

    return (
        <div className='productContainer'>
            <Cart />
            {props.apiRes.map((product, i) => (
                <div key={i} className='itemContainer'>
                    <img src={`http://localhost:5000/${product.image}`} alt={product.name}/>
                    
                    <p  
                    onClick={() => {
                        setModalState(!modalState);
                        setNameState(product);
                    }}>{product.name}</p>
                    
                    <p>${product.price}</p>
                    
                    <button 
                    onClick={() => {
                        addToCart();
                        setNameState(product);
                    }}>Add item to cart</button> 
                </div>
            ))}
            <ModalPDP 
            modalState={modalState}
            setModalState={setModalState}
            nameState={nameState}
            setNameState={setNameState}
            />

        </div>
    )
}

export default Products;