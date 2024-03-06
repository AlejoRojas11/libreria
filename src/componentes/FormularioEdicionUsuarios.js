import React, { useState } from 'react';

function FormularioEdicionUsuario({ usuario, onUsuarioEditado, onClose }) {
  const [nombres, setNombres] = useState(usuario.nombres);
  const [apellidos, setApellidos] = useState(usuario.apellidos);
  const [email, setEmail] = useState(usuario.email);
  const [telefono, setTelefono] = useState(usuario.telefono);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de campos aquí...

    // Crear objeto de usuario actualizado con los nuevos valores del formulario
    const usuarioActualizado = {
      id: usuario.id,
      nombres,
      apellidos,
      email,
      telefono
    };

    // Llamar a la función proporcionada para pasar el usuario actualizado al componente padre
    onUsuarioEditado(usuarioActualizado);

    // Cerrar el formulario después de editar el usuario
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario y botones de guardar y cancelar */}
    </form>
  );
}

export default FormularioEdicionUsuario;
