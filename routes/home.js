const express = require('express');
const router = express.Router();
const { 
    leerUsuarios,
    agregarUsuario,
    borrarUsuario,
 } 
= require('../controllers/homeController');



router.get('/', leerUsuarios);
router.post('/', agregarUsuario);
router.get('/eliminar/:id', borrarUsuario);


module.exports = router;