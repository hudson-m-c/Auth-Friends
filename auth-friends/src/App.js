import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <PrivateRoute path='/friends-list' component={FriendsList} />
    </div>
  );
}

export default App;
