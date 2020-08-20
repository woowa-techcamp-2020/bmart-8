import React from 'react';
import './App.css';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import UserProfilePage from './pages/UserProfilePage';
import Footer from './components/Footer';

import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import SearchResultPage from './pages/SearchResultPage';

const client = new ApolloClient({
  uri: '/graphql',
});

const AppBlock = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <AppBlock>
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
            <Route path="/search/:query" component={SearchResultPage} />
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </AppBlock>
    </ApolloProvider>
  );
}

export default App;
