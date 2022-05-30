const express = require('express');
const router = express.Router();
const { 
    leerUsuarios,
    agregarUsuario
 } 
= require('../controllers/homeController');



router.get('/', leerUsuarios);
router.post('/', agregarUsuario);


module.exports = router;