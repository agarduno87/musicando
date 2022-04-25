const express = require('express');
const router = express.Router();
const actorsAPIController = require('../../controllers/api/musicsAPIController');

//Rutas
//Listado de todos los actores
router.get('/', musicAPIController.list);
//Detalle del actor
router.get('/:id', musicAPIController.detail);
//En que peliculas trabajo el actor con id tal
router.get('/:id/music', musicAPIController.actorMovies);

//Agregar un actor
router.post('/create', musicAPIController.create);
//Modificar un actor
router.put('/update/:id', musicAPIController.update);
//Eliminar un actor
router.delete('/delete/:id', musicAPIController.destroy);

module.exports = router;