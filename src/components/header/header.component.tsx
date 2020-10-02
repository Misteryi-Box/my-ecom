import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../redux/store';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
// import { User } from 'firebase';

interface HeaderProps {
  currentUser: any
}
const Header = ({
  currentUser
}: HeaderProps) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {/* <Link className='option' to='/signin'>SIGN IN</Link> */}
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div> :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);