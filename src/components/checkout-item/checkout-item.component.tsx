import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from "redux";
import { 
  clearItemFromCartAction, 
  addItemAction, 
  removeItemAction } from '../../redux/cart/cart.actions';
import { ItemType } from '../../redux/cart/cart.types';

import './checkout-item.styles.scss';

type CheckoutItemProps = ConnectedProps<typeof connector> & {
  cartItem: ItemType
}

const CheckoutItem = ({
  cartItem,
  cartItem: {name, imageUrl, price, quantity},
  clearItem,
  addItem,
  removeItem
}: CheckoutItemProps) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: ItemType) => dispatch(clearItemFromCartAction(item)),
  addItem: (item: ItemType) => dispatch(addItemAction(item)),
  removeItem: (item: ItemType) => dispatch(removeItemAction(item)),
})

const connector = connect(null, mapDispatchToProps)

export default connector(CheckoutItem);

