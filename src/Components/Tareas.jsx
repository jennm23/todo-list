import React, { useState } from 'react';

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [hoverIndice, setHoverIndice] = useState(null);

  const agregarTarea = (e) => {
    if (e.key === 'Enter' && nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  return (
    <div className="contenedor-todo" style={{ width: '300px', margin: '0 auto', textAlign: 'center' }}>
      <h1 className='display-2 text-danger text-opacity-25'>todos</h1>
      <input type="text" placeholder="¿Qué se necesita hacer?" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} onKeyDown={agregarTarea} style={{ width: '100%', padding: '10px', fontSize: '18px' }}/>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.length === 0 ? (
          <li>No hay tareas, añade tareas</li>
        ) : (
          tareas.map((tarea, indice) => (
            <li key={indice} onMouseEnter={() => setHoverIndice(indice)} onMouseLeave={() => setHoverIndice(null)} style={{ padding: '10px', borderBottom: '1px solid #eee', fontSize: '18px', display: 'flex', justifyContent: 'space-between' }}>
              {tarea}
              {hoverIndice === indice && ( 
                <span onClick={() => eliminarTarea(indice)} style={{ cursor: 'pointer', color: 'red' }}>
                  &times;
                </span>
              )}
            </li>
          ))
        )}
      </ul>
      <div>{tareas.length} tarea{tareas.length !== 1 && 's'} restante{tareas.length !== 1 && 's'}</div>
    </div>
  );
};

export default Tareas;
