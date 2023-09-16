import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../Store/cartSlice'

const Cart = () => {
    const items = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleRemove = (itemId) => {
        dispatch(remove(itemId))
    }
  return (
    <div style={{marginTop: '15px'}}>
        <div className='cartWrapper'>
            {
                items.map((item, index) => {
                    return (<div className='cartCard' key={index}>
                        <img  src={item.image}/>
                        <h5>{item.title}</h5>
                        <h6>Price : {item.price}</h6>
                        <button className='remove-btn' onClick={() => handleRemove(item.id)}>Remove Item</button>
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default Cart