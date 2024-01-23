import React from 'react';
import { ApiTopProduct } from '../sliderapi/TopProductApi';
import Product from './Product';
const Products = () => {
  return <div className='p-5 flex flex-wrap'>
      {
          ApiTopProduct.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>;
};

export default Products;
