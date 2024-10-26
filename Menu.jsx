import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/consulta-alumnos">Consulta de Alumnos</Link></li>
        <li><Link to="/crear-curso">Creación de Cursos</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
