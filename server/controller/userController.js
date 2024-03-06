const fs = require('fs').promises;
const path = require('path');


const userFilePath = path.join(__dirname, '../../src/componentes/usuariosRegistrados.json');



const controller = {
    register: async function (req, res) {
        try {
            // Leer el archivo JSON una sola vez
            const usersData = await fs.readFile(userFilePath, 'utf-8');
            const users = JSON.parse(usersData);

            const ultimo = users.length;
            const usuarioNuevo = {
                id: ultimo + 1,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                password: req.body.password,
                direccion: req.body.direccion,
                identificacion: req.body.identificacion,
                telefono: req.body.telefono,
                genero: req.body.genero,
                ciudadNacimiento: req.body.ciudadNacimiento,
                fechaNacimiento: req.body.fechaNacimiento,
                fecha_creación: new Date()
            };

            users.push(usuarioNuevo);

            // Escribir el archivo JSON
            await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));

            res.status(200).send('Usuario creado con éxito');
        } catch (error) {
            console.error('Error al procesar el registro:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
};

module.exports = controller;
