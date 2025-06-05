
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../data';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        const prod = productos.find(p => p.id === itemId);
        resolve(prod);
      }, 1000);
    }).then(result => {
      setProducto(result);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  function agregarAlCarrito() {
    alert(`Agregaste ${cantidad} unidad(es) de ${producto.nombre} al carrito.`);
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', maxWidth: '300px' }} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <div>
        <label>
          Cantidad:
          <input
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value) || 1)}
            style={{ marginLeft: '10px', width: '50px' }}
          />
        </label>
      </div>
      <button onClick={agregarAlCarrito} style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#0044cc', color: 'white', border: 'none', borderRadius: '5px' }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetailContainer;

