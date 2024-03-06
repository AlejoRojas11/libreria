const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRegister = require('./controller/userController');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(userJSON);
});

app.use(userRegister.register);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto ", PORT);
});
