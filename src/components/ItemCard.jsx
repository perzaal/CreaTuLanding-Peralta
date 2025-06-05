
import { Link } from 'react-router-dom';

function ItemCard({ producto }) {
  return (
    <div className="item-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%' }} />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <Link to={`/item/${producto.id}`} style={{ color: '#0044cc', textDecoration: 'none' }}>Ver detalle</Link>
    </div>
  );
}

export default ItemCard;
