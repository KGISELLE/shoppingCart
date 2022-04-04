import React, { useEffect, useState } from 'react';

const ProductListPage = () => {

  const [apiRes, setApiRes] = useState([]); //Trae objeto results de la API

  const getData = async() => {
    const res = await fetch('http://localhost:5000/api/products')
    const dataJson = await res.json()
    console.log(dataJson);
    setApiRes(dataJson);
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      {apiRes.map(product => (
        <div>
          <img src={`http://localhost:5000/${product.image}`} alt={product.name}/>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      ))}
    
    </div>
  )
}

export default ProductListPage;