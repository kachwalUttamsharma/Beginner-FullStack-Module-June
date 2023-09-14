import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div       style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span>Shopping Cart (Using Redux)</span>
        <div>
            <Link to="/" className='navLink'>Home</Link>
            <Link to="/cart" className='navLink'>Cart</Link>
        </div>
        <span className='cartCount'>Cart Item Count: 0</span>
    </div>
  )
}

export default NavBar