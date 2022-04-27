const express = require('express');
const router = express.Router();
const multer = require('multer');
const FileAppender = require('multer/lib/file-appender');
const path = require('path');
const controller = require('../controllers/mainController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/img/'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newfilename = 'img_' + Date.now() + path.extname(file.originalname);
        cb(null, newfilename);
    }
});
 
const upload = multer({ storage });

            // Todos los grupos
router.get('/', controller.index);
    
            // Formulario de creación
router.get('/create', controller.create);
    
            // Formulario de creación
router.get('/edit', controller.edit);
    
            // Procesamiento del formulario de creación
router.post('/', controller.store);
    
            // Detalle de un grupo
router.get('/:id', controller.show);
    
module.exports = router;


