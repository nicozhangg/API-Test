import { useState, useEffect } from 'react';
import allProducts from '../data/products.json';
import ProductCard from './ProductCard';
import './ProductList.css';

export default function ProductList({ selectedTeam }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedTeam === 'Todos') {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.equipo === selectedTeam);
      setProducts(filtered);
    }
  }, [selectedTeam]);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => <ProductCard key={product.id} product={product} />)
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}
