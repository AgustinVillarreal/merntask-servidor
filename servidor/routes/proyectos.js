const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const proyectoController = require("../controllers/proyectoController");
const { check } = require('express-validator')

router.post(
  "/",
  auth,
  [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
  ],  
  /*Controller*/
  proyectoController.crearProyecto
);

router.get(
  "/",
  auth,
  proyectoController.obtenerProyectos,
);

router.put('/:id', 
  auth,
  [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
  ],
  proyectoController.actualizarProyecto  
)

//Eliminar un proyecto

router.delete('/:id', 
  auth,
  proyectoController.eliminarProyecto  
)

module.exports = router;
