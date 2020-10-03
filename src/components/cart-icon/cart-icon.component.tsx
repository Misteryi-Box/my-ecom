import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { toggleCartHiddenAction } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { AppState } from '../../redux/store';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const mapStateToProps = (state: AppState) => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch:Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
})
const connector = connect(mapStateToProps, mapDispatchToProps);

type CartIconProps = ConnectedProps<typeof connector>

const CartIcon = ({
  toggleCartHidden,
  itemCount
}: CartIconProps) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
<span className='item-count'>{itemCount}</span>
  </div>
);

export default connector(CartIcon);