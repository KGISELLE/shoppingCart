import React from 'react';

import '../CSS/ModalPDP.css'

const ModalPDP = (props) => {
    return (
        <>
            {props.modalState &&
                <div className='overlay'>
                    <div className='modalContainer'>
                        <div className='detailHeader'>
                            <h3>Detalles del Producto</h3>
                            <button onClick={() => props.setModalState(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                        
                        <div className='detailBody'>
                            <img src={`http://localhost:5000/${props.nameState.image}`} alt={props.nameState.name}/>
                            <p>{props.nameState.name}</p>
                            <div>
                                <p><span>Marca </span>{props.nameState.brand}</p>
                                <p><span>Rating </span>{props.nameState.rating}⭐</p> 
                                <p><span>Reviews </span>{props.nameState.numReviews}</p>     
                            </div>
                            <p className='priceDetail'><span>Price: </span>${props.nameState.price}</p>
                            <p className='descriptionDetail'>
                                <span>Product Description: </span><br/>{props.nameState.description}</p>
                            <p className='categoryDetail'>{props.nameState.category}</p> 
                            <p className='stockDetail'><span>Stock: </span>{props.nameState.countInStock}</p> 
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default ModalPDP;