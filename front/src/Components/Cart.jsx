import React, { useContext, useState } from 'react';

import { CartContext } from '../Context/CartContext';

import '../CSS/Cart.css';

const Cart = (props) => {
    const [cart, setCart] = useContext(CartContext);

    // Inicio codigo para mostrar carrito
    //UseState para manejar el estado de cuenado el carro se abra y se cierra
    const [cartOpen, setCartOpen] = useState(false);
    
    
    
    // console.log(props.nameState.price);
    // const curr = props.nameState.price;
    console.log(cart)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <div className='cartContainer' onClick={() => setCartOpen(!cartOpen)}>
            {/* <span>Items in cart : {cart.length}</span>
            <br/>
            <span>Total Price : {totalPrice} </span> */}
            <div className='imgCartContainer'>
                <div className='imgCart'>
                    {!cartOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                        ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    )} 
                </div>
                {!cartOpen && <div className='numberProducts'>{cart.length}</div>}
            </div>

            {cart && cartOpen && (
                <div className='cartBody'>
                    <h2>Your Cart</h2>
                    {cart.length === 0 ? <h4>Your cart is empty</h4> : (
                        <div>{cart.map((item) => (
                            <p>{item.name}</p>
                        ))}
                        </div>
                    )}

                    <h3>Total Price: ${totalPrice}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;