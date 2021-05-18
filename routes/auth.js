const express = require('express');
const authController = require('../controllers/authController')
const router = express.Router();
const { check } = require('express-validator')
const auth = require("../middleware/auth");

// Iniciar sesion
// api/auth
router.post('/', 
    authController.autenticarUsuario
)

// Obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
)

module.exports = router;