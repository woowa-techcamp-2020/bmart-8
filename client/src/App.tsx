import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import LoginCallbackPage from './pages/LoginCallbackPage';
import UserProfilePage from './pages/UserProfilePage';
import Footer from './components/Footer';

import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import SearchResultPage from './pages/SearchResultPage';

import CategoryDetailPage from './pages/CategoryDetailPage';
import { useCartDispatch } from './stores/cart-store';

const AppBlock = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  .main-wrapper {
    overflow: auto;
    height: 90vh;
  }
`;

function App() {
  const { data: cartData } = useQuery(gql`
    query {
      cart {
        id
        product {
          id
          name
          content
          img_url
          price
          discount
        }
        createdAt
        count
      }
    }
  `);

  const cartDispatch = useCartDispatch();

  useEffect(() => {
    if (cartData) cartDispatch({ type: 'INIT', payload: cartData.cart });
  }, [cartData, cartDispatch]);

  return (
    <AppBlock>
      <div className="App">
        <div className="main-wrapper">
          <Switch>
            <Route path="/categories">
              <CategoryPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/profile">
              <UserProfilePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/search/:query" component={SearchResultPage} />
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/loginCallback">
              <LoginCallbackPage />
            </Route>
            <Route path="/category/:query" component={CategoryDetailPage} />
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </AppBlock>
  );
}

export default App;
