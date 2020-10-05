import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHiddenAction } from '../../redux/cart/cart.actions';

import { AppState } from '../../redux/store';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

type CartDropdownProps = ConnectedProps<typeof connector> & RouteComponentProps

const CartDropdown = ({
  cartItems,
  history,
  dispatch
} : CartDropdownProps) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
          ))
          ): (
            <span className='empty-message'>You're cart is empty</span>
          )}
    </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHiddenAction())
      }}>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state),
})

const connector = connect(mapStateToProps)

export default withRouter(connector(CartDropdown));