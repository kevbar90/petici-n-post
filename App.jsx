import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioCurso from './componentes/FormularioCurso';
import Menu from './componentes/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/crear-curso" element={<FormularioCurso />} />
        <Route path="/consulta-alumnos" element={<h1>Consulta de Alumnos</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
