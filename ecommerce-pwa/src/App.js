import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <ProductList />
      </Container>
    </div>
  );
};

export default App;
