import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const mapDispatch = (dispatch:Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
const connector = connect(null, mapDispatch);

type CartIconProps = ConnectedProps<typeof connector>

const CartIcon = ({
  toggleCartHidden
}: CartIconProps) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

export default connector(CartIcon);