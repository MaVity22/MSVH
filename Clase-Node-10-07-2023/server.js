const express = require('express')
const app = express()

// Se exportan los usuarios
const {listaUsuarios} = require('./data/data.js')
// Puerto a utilizar
const port = 8000;

app.get('/', function (req, res) {
  res.json({status: true, msg: 'Mateo Viteri'});
})
app.get('/home', function (req, res) {
    res.send('Bienvenido a la página de Node');
})

app.get('/api/users',(req, res) => {
  res.json(listaUsuarios)
})
app.listen(port, () => console.log('Escuchando en puerto :',port));