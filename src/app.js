const express = require('express');
const app = express();

// Configuración
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Rutas
const routes = require('./routes/music.js');

app.get('/', (req, res) => {
    res.redirect('./routes/music.js')
});
app.use('./routes', groupsRouter);

app.use('/', (req, res) => {
    res.status(200).send('<h1>La API funciona</h1>');
});
app.use('/', (req, res) => {
    res.status(404).send('<h1>La API dosnt work</h1>');
});

// Servidor
app.listen(3000, () => { console.log('Servidor funcionando en el puerto 3000.') })