import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../Store/cartSlice';
import { fetchProducts, STATUSES } from '../Store/productSlice';
const Home = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state) => state.products);
    useEffect( () => {
        const getProducts = async () => {
            dispatch(fetchProducts())
        }
        getProducts();
    }, [])
    const clickHandler = (product) => {
        dispatch(add(product))
    }
  return (
    <div style={{marginTop: '15px'}}>
      { status === STATUSES.LOADING && <div> <h2>Loading</h2> </div>}  
      { status === STATUSES.ERROR && <div><h2>Something Went Wrong</h2></div>}
      { status === STATUSES.SUCCESS  && <div className='productsWrapper'>
                {
                    products.map( (product) => {
                        return (
                            <div key={product.id} className='card'>
                                <img src={product.image}/>
                                <h6>{product.title}</h6>
                                <h5>{product.price}</h5>
                                <button className='btn' onClick={() => clickHandler(product)}>Add to Cart</button>
                            </div>
                        )
                    })
                }
        </div>}
    </div>
  )
}

export default Home