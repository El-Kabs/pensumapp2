// Importar librerias
import express from 'express';

// Importar controlador
import * as materiaController from '../controllers/materiaController';

// Instancia de express Router
const router = express.Router();

// Obtener desde /
router.route('/')
  .get(materiaController.getMaterias)
  .post(materiaController.addMateria)
  .put(materiaController.updateMateria);

router.route('/:codigo')
  .get(materiaController.getMateria);

export default router;
