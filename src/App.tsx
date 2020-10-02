import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dispatch } from "redux";
import {connect} from 'react-redux'
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';

interface AppProps {
  setCurrentUser: any;
}
const App = ({
  setCurrentUser
}: AppProps) => {

  useEffect(() => {
    const unsubscribeFromAuth  = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef?.onSnapshot( snapShot => {
          console.log('snapShot.data()', snapShot.data())
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
      
    });
    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInSignUpPage}/>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch ) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
})
export default connect( null, mapDispatchToProps )(App);
