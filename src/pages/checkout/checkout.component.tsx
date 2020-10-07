import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { AppState } from '../../redux/store';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';
import StripeButton from '../../components/stripe-button/stripe-button.component';

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
      cartItems.map( cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))
    }
    <div className='total'>
      <span className='total'>Total: {total}</span>
    </div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeButton price={total}/>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
})

const connector = connect(mapStateToProps)

export default connector(Checkout);