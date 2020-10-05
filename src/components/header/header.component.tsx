import React from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../redux/store';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import './header.styles.scss';

type HeaderProps = ConnectedProps<typeof connector>

const Header = ({
  currentUser,
  hidden
}: HeaderProps) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div> :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
const mapStateToProps = (state: AppState) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
})

const connector = connect(mapStateToProps);

export default connector(Header);