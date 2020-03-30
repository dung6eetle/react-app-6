import React from 'react';
import productsData from './productsData'
import Product from './Product'
import './App.css';

function App() {
  const productComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)
  return (
    <div className="App">
      {productComponents}
    </div>
  );
}

export default App;
