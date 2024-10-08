import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, deleteCart } from './Slice/productSlice/productSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const totalCount = Object.values(cart).reduce((total, item) => total + item.count, 0);


  return (
    <>
      <h3 className='d-flex align-items-center justify-content-center mt-3'>
        Total no. of items in cart: {totalCount || 0}
      </h3>
      <div className='d-flex flex-wrap gap-3 mt-2 px-4'>
        {
          Object.entries(cart).map(([productName, product], i) => (
            <div style={{width:'350px'}} key={i} className='d-flex flex-column gap-2 border rounded p-4 '>
              <h3>{productName}</h3>
              <hr className='m-0 p-0'></hr>
              <div className='d-flex justify-content-between align-items-center mt-2'>
                <h6>Price: </h6>
                <p className='mb-0'>&#36;{product.rate}</p>
              </div>
              
              <div className='d-flex justify-content-between align-items-center mb-2'>
                <h6>Quantity: </h6>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                  <button className='btn btn-light border ' onClick={() => { dispatch(addCart({ name: productName, rate: product.rate })) }}>+</button>
                  <p className='mb-0'>{product.count}</p>
                  <button className='btn btn-light border px-3' onClick={() => { dispatch(deleteCart({ name: productName })) }}>-</button>
                </div>
              </div>
              <hr className='m-0 p-0'></hr>
              <div className='d-flex justify-content-between align-items-center'>
                <h6>Amount:</h6>
                <p className='mb-0'>&#36;{(product.rate * product.count).toFixed(2)}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div style={{height:'350px'}}  className='d-flex align-items-center justify-content-center'><button className='btn btn-primary' onClick={()=>{navigate('/')}}>Back To Home</button></div>
      
    </>
  );
};

export default Cart;
