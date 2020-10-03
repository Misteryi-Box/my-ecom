import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dispatch } from "redux";
import {connect} from 'react-redux'

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { AppState } from './redux/store';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUserAction } from './redux/user/user.actions';
import './App.css';

interface AppProps {
  currentUser: any;
  setCurrentUser: any;
}
const App = ({
  currentUser,
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
        {/* <Route exact path='/signin' component={SignInSignUpPage}/> */}
        <Route exact path='/signin' render={() => 
          ( currentUser ? (<Redirect to='/' />) : <SignInSignUpPage /> )
        }/>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({user}: AppState) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = (dispatch: Dispatch ) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUserAction(user))
})
export default connect( mapStateToProps, mapDispatchToProps )(App);
