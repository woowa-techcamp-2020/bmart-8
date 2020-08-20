import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import UserProfilePage from './pages/UserProfilePage';
import Footer from './components/Footer';

import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';

const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Switch>
          <Route path="/CategoryPage">
            <CategoryPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/profile">
            <UserProfilePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
