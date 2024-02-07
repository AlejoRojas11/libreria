const express = require('express')
const app = express();
app.get("/", (req, res)=>{
    res.send("Saludando desde el puerto")
})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto", PORT )
})