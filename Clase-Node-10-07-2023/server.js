const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/home', function (req, res) {
    res.send('Bienvenido a la página de Node')
  })

app.listen(8000, () => console.log('Escuchando en puerto 8000'));