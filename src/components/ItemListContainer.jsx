// src/components/ItemListContainer.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../data';
import ItemCard from './ItemCard';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId && categoryId !== 'todos') {
          resolve(productos.filter(prod => prod.categoria === categoryId));
        } else {
          resolve(productos);
        }
      }, 1000);
    }).then(result => {
      setListaProductos(result);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="item-list-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {listaProductos.map(prod => (
        <ItemCard key={prod.id} producto={prod} />
      ))}
    </div>
  );
}

export default ItemListContainer;
