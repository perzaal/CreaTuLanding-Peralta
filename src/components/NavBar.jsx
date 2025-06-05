
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { categorias } from '../data';

function NavBar() {
  return (
    <nav>
      <h1><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Mi Pagina</Link></h1>
      <ul>
        {categorias.map(cat => (
          <li key={cat}>
            <Link to={cat === 'todos' ? '/' : `/category/${cat}`} style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
