import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/signin/signin.component';

import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';


function App() {

  const [currentUser, setCurrentUser] = useState<any>(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log('user in useEffect', user)
      setCurrentUser(user)
    })
    return () => {
      unsubscribe();
    }
  })
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInPage}/>
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
