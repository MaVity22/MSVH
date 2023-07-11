const express = require('express')
// Se exportan los usuarios
const {listaUsuarios} = require('./data/data.js')
// Puerto a utilizar
const port = 8000;
const app = express()
// Middleware para que el servidor acepte las peticiones POST
app.use(express.json());
// Middleware para hacer el encode de la petición POST desde el URL
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.json({status: true, msg: 'Mateo Viteri'});
})
app.get('/home', function (req, res) {
    res.send('Bienvenido a la página de Node');
})

app.get('/api/users',(req, res) => {
  res.json(listaUsuarios);
})

app.post('/api/user/new',(req, res) => {
  listaUsuarios.push(req.body);
  //console.log(typeof req.body);
  res.json({status: true, msg: 'Usuario ingresado exitosamente'});
})
// Peticion GET para obtener un usuario por su ID
app.get('/api/user/:id', (req, res) => {
  //console.log(req.params);
  res.json(listaUsuarios[req.params.id]);
})

// Peticion PUT para actualizar el usuario
app.put('/api/user/:id', (req, res) => {
  let id = req.params.id;
  listaUsuarios[id] = req.body;
  res.json({status: true, msg: 'Usuario actualizado'});
})

// Peticion DELETE para eliminar un usuario
app.delete('/api/user/:id', (req, res) => {
  let id = req.params.id;
  listaUsuarios.splice(id,1);
  //listaUsuarios[id] = req.body;
  res.json({status: true, msg: 'Usuario eliminado'});
})
app.listen(port, () => console.log('Escuchando en puerto :',port));