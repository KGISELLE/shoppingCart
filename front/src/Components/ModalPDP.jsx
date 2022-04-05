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
                        </div>
                        {/* <div className='detailBody'>
                            <img src='' alt='imagen producto'/>
                            
                            <p>Nombre producto</p>
                            
                            <p>$100.00</p>
                        </div> */}

                        <button onClick={() => props.setModalState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default ModalPDP;