import { useState } from 'react';
import { crearCurso } from '../servicios/cursoServicio';

const FormularioCurso = () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState(0);
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoCurso = { nombre, creditos, descripcion };
    try {
      await crearCurso(nuevoCurso);
      alert('Curso creado exitosamente');
    } catch (error) {
      console.error('Error creando el curso', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del curso:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
      </div>
      <div>
        <label>Créditos:</label>
        <input 
          type="number" 
          value={creditos} 
          onChange={(e) => setCreditos(Number(e.target.value))} 
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input 
          type="text" 
          value={descripcion} 
          onChange={(e) => setDescripcion(e.target.value)} 
        />
      </div>
      <button type="submit">Crear curso</button>
    </form>
  );
};

export default FormularioCurso;
