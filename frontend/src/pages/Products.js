import React, { useEffect, useState } from 'react';
import API from '../api';
import Navbar from '../components/Navbar';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get('/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.response.data.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.category} - Stock: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
