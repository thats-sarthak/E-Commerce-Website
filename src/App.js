// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import ProductTile from './components/ProductTile';
// import Cart from './components/Cart';
// import { faker } from '@faker-js/faker';

// const generateRandomProduct = () => {
//   return {
//     id: faker.datatype.uuid(),
//     name: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     image: faker.image.imageUrl(300, 300, 'products', true),
//   };
// };

// const generateRandomProducts = (count) => {
//   const products = [];
//   for (let i = 0; i < count; i++) {
//     products.push(generateRandomProduct());
//   }
//   return products;
// };

// function App() {
//   const products = generateRandomProducts(1000);
//   const [cartItems, setCartItems] = React.useState([]);

//   const addToCart = (product) => {
//     setCartItems(prevCartItems => [...prevCartItems, product]);
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <div className="grid">
//         {products.map(product => (
//           <ProductTile key={product.id} product={product} addToCart={addToCart} />
//         ))}
//       </div>
//       <Cart cartItems={cartItems} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductTile from './components/ProductTile';
import Cart from './components/Cart';
import { faker } from '@faker-js/faker'

const generateRandomProduct = () => {
  return {
    id: faker.random.uuidv4,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(300, 300, 'products', true),
  };
};

const generateRandomProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push(generateRandomProduct());
  }
  return products;
};

function App() {
  const productsPerPage = 8; // Change this as needed
  const initialProducts = generateRandomProducts(200);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = initialProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="grid">
        {currentProducts.map(product => (
          <ProductTile key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(initialProducts.length / productsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
