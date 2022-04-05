import React, {useState} from 'react';

import ModalPDP from './ModalPDP';


import '../CSS/Products.css'


const Products = (props) => {

    const [modalState, setModalState] = useState(false);

    const [nameState, setNameState] = useState([]);


    return (
        <div className='productContainer'>
            {props.apiRes.map((product, i) => (
                <div key={i} className='itemContainer'>
                    <img src={`http://localhost:5000/${product.image}`} alt={product.name}/>
                    
                    <p  
                    onClick={() => {
                        setModalState(!modalState);
                        setNameState(product);
                    }}>{product.name}</p>
                    
                    <p>${product.price}</p>
                    <button>Add item to cart</button> 
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