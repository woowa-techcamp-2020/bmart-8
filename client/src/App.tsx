import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import UserProfilePage from './pages/UserProfilePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/profile">
          <UserProfilePage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
