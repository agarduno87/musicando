const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/musicController');

router.get('/music', musicController.list);
router.get('/music/new', musicController.new);
router.get('/music/recommended', musicController.recomended);
router.get('/music/detail/:id', musicController.detail);
//Rutas exigidas para la creación del CRUD
router.get('/music/add', musicController.add);
router.post('/music/create', musicController.create);
router.get('/music/edit/:id', musicController.edit);
router.put('/music/update/:id', mmusicController.update);
router.get('/music/delete/:id', musicController.delete);
router.delete('/music/delete/:id', musicController.destroy);

router.post('/music/buscar', music.buscar);
module.exports = router;