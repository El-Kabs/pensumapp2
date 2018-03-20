import Materia from '../models/materia';
import slug from 'limax';

/**
 * Get all materias
 * @param req
 * @param res
 * @returns void
 */
export function getMaterias(req, res) {
  Materia.find().exec((err, materias) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ materias });
  });
}

/**
 * Get a single materia
 * @param req
 * @param res
 * @returns void
 */
export function getMateria(req, res) {
  var cod = req.params.codigo
  Materia.find({[cod]: {$exists: true}}).exec((err, materia) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(res);
    console.log(materia);
    res.json({ materia });
  });
}
