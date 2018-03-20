import { Router } from 'express';
import * as MateriaController from '../controllers/materia.controller';
const router = new Router();

// Get all Posts
router.route('/materias').get(MateriaController.getMaterias);

// Get one post by cuid
router.route('/materias/:codigo').get(MateriaController.getMateria);

export default router;
