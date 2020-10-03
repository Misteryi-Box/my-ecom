import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { AppState } from '../../redux/store';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state),
})

const connector = connect(mapStateToProps)

type CartDropdownProps = ConnectedProps<typeof connector>

const CartDropdown = ({
  cartItems
} : CartDropdownProps) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
      ))}
    </div>
      <CustomButton>Go to checkout</CustomButton>
  </div>
);

export default connector(CartDropdown);