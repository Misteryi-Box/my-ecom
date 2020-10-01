import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/signin/signin.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


function App() {

  const [currentUser, setCurrentUser] = useState<any>(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      // console.log('here', userAuth)
      // setCurrentUser({...currentUser, something: 'hello'});
      if(!currentUser && userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        console.log('userRef', userRef)
        userRef?.onSnapshot( snapShot => {
          console.log('snapShot.data()', snapShot.data())
          setCurrentUser({
            ...currentUser,
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        console.log('testing currentUser', currentUser)
      } else if (currentUser && !userAuth){
        setCurrentUser(undefined)
      }
    });
    return () => {
      unsubscribe();
    }
  }, [currentUser])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
