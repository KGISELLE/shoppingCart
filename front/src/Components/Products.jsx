import React from 'react';

import '../CSS/Products.css'


const Products = (props) => {
    return (
        <div className='productContainer'>
            {props.apiRes.map((product, i) => (
                <div key={i} className='itemContainer'>
                    <img src={`http://localhost:5000/${product.image}`} alt={product.name}/>
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <button>Add item to cart</button> 
                </div>
            ))}
        </div>
    )
}

export default Products;