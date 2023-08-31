import React from "react";
import './Product.css'
const Product = ({ product = {} }) => {
  return (
    <div className='card'>
      {product.map((item, index) => {
        return (
          <div key={item?.id || index}>
            <article
            >
              <img src={item?.img || 'https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fHx8MTY4NjkzNjgyOHwx&ixlib=rb-4.0.3&q=80&w=1080'} alt="Sample photo" />
              <div class="text">
                <h3>{item?.name}</h3>
                <p>{item?.price}</p>
                <button>Here's why</button>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
