import React, { useEffect, useState } from 'react';

import Products from '../Components/Products';

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
    <>
      <Products 
      apiRes = {apiRes}/>
    </>
  )
}

export default ProductListPage;