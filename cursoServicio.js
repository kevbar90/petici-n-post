export const crearCurso = async (curso) => {
    const respuesta = await fetch('https://test-deploy-12.onrender.com/cursos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(curso),
    });
    if (!respuesta.ok) {
      throw new Error('Error al crear el curso');
    }
    return await respuesta.json();
  };
  