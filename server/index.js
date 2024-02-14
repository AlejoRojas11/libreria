const express = require('express')
const app = express();
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

let userFilePath = path.join(__dirname, 'usuariosRegistrados.json')
let userJSON= fs.readFileSync(userFilePath, 'utf8')
let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'))
console.log(users.length)

app.get("/", (req, res)=>{
    res.send("Saludando desde el puerto")
})

app.post('/registro-usuario', function(req, res){
    console.log(req.body)
    let ultimo = users.length
    let usuarioNuevo={
        id: ultimo + 1,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        password: req.body.password,
        fecha_creacion:new Date()
    }
    let userNuevo
    if(userJSON == ""){let userNuevo=[]}
    else{  userNuevo = JSON.parse(userJSON)}
    userNuevo.push(usuarioNuevo)
    let userAux = JSON.stringify(userNuevo, null, "\t")
    fs.writeFileSync(userFilePath, userAux)
})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto", PORT )
})