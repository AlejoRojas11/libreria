import React, { useState } from 'react';
import usuarios from './usuariosRegistrados.json';
import { BsPencil, BsTrash } from 'react-icons/bs';

function App() {
  const [userList, setUserList] = useState(usuarios);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditedUser(user);
  };

  const handleSave = (id) => {
    setUserList(prevList => prevList.map(user => user.id === id ? editedUser : user));
    setEditingUserId(null);
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setEditedUser({});
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (confirmDelete) {
      setUserList(prevList => prevList.filter(user => user.id !== id));
    }
  };

  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user.id}>
              <td>{editingUserId === user.id ? <input type="text" value={editedUser.nombres} onChange={(e) => setEditedUser({ ...editedUser, nombres: e.target.value })} /> : user.nombres}</td>
              <td>{editingUserId === user.id ? <input type="text" value={editedUser.apellidos} onChange={(e) => setEditedUser({ ...editedUser, apellidos: e.target.value })} /> : user.apellidos}</td>
              <td>{editingUserId === user.id ? <input type="text" value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} /> : user.email}</td>
              <td>{editingUserId === user.id ? <input type="text" value={editedUser.telefono} onChange={(e) => setEditedUser({ ...editedUser, telefono: e.target.value })} /> : user.telefono}</td>
              <td>
                {editingUserId === user.id ? (
                  <>
                    <button className="btn btn-success me-2" onClick={() => handleSave(user.id)}>Guardar</button>
                    <button className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-primary me-2" onClick={() => handleEdit(user)}>
                      <BsPencil />
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
                      <BsTrash />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
