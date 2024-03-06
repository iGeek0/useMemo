import React, { useState, useMemo, useCallback } from 'react';

const Librero = ({ libros }) => {
  const totalLibros = useMemo(() => {
    console.log('Calculando total de libros...');
    return libros.length;
  }, [libros]);

  return (
    <div>
      <h2>Libros en el librero:</h2>
      <ul>
        {libros.map((libro, index) => (
          <li key={index}>{libro}</li>
        ))}
      </ul>
      <p>Total de libros: {totalLibros}</p>
    </div>
  );
}

const App = () => {
  const [listaLibros, setListaLibros] = useState(['Libro 1', 'Libro 2', 'Libro 3']);

  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Librería</h1>
      <h2>Contador: {contador}</h2>
      <Librero libros={listaLibros} />
      <button onClick={() => setListaLibros(['Libro 1', 'Libro 2', 'Libro 3', 'Libro 4'])}>Agregar Libro</button>
      <br />
      <br />
      <button onClick={() => setContador(contador + 1)}>Agregar Contador</button>
    </div>
  );
}

export default App;