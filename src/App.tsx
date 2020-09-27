import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/signin/signin.component';

import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
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
