import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { AppState } from '../../redux/store';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

type CheckoutProps = ConnectedProps<typeof connector>
const Checkout = ({
  cartItems,
  total
}: CheckoutProps) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map( cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
    }
    <div className='total'>
      <span>Total: {total}</span>
    </div>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
})

const connector = connect(mapStateToProps)

export default connector(Checkout);