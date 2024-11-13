import React, { useState, useEffect } from 'react';
import './UserList.css';

function UserList() {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            setUsuarios(data);
            setCargando(false);
          });
    }, []);

    if (cargando) {
    return <p>Cargando usuarios...</p>;
    }

    return (
        <div>
          <h2>Lista de Usuarios</h2>
          <ul className='prueba'>
            {usuarios.map(usuario => (
              <li key={usuario.id}>{usuario.name} - {usuario.email}</li>
            ))}
          </ul>
        </div>
    );
}

export default UserList;