const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const Router = require('./Routes');
app.use('/api', Router)

app.get('/', function(req, res) {
    res.send(`<h1>Hola mundo</h1>
    <p>Bienvenido</p>`)
})

app.listen(3000, () => console.log('Escuchando el puerto'));