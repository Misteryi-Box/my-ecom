import React from 'react';
import { itemType } from '../../redux/cart/cart.types';

import './cart-item.styles.scss';

type CartItemProps = {
  item: itemType
}
const CartItem = ({
  item: {
    imageUrl, 
    price,
    name,
    quantity
  }
}: CartItemProps) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${price}</span>      
    </div>
  </div>
);

export default CartItem;