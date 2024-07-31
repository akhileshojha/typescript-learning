// src/App.tsx

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { client } from './graphql/client';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles.css';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="App">
          <h1>React E-commerce App</h1>
          <ProductList />
          <Cart />
        </div>
      </Provider>
    </ApolloProvider>
  );
};

export default App;