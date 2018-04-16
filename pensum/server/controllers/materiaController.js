// Importar librerias
import mongoose from 'mongoose';

// Importar modelos
import Materia from '../models/materiaModel';

mongoose.set('debug');
// GET de materias
export const getMaterias = (req, res) => {
  Materia.find({}).exec((err, materias) => {
    if(err){
      return res.json({'success':false, 'message':'Error xd','error':err});
    }
    return res.json({'success':true, 'message': 'Materias obtenidas', materias});
  });
}

// POST de materia
export const addMateria = (req, res) => {
  const nuevaMateria = new Materia(req.body);
  nuevaMateria.save((err, materia) => {
    if(err){
      return res.json({'success':false, 'message':'Error xd','error':err});
    }
    return res.json({'success':true, 'message': 'Materia agregada', materia});
  });
}

// PUT de materia
export const updateMateria = (req, res) => {
  Materia.findOneAndUpdate({codigo: req.body.codigo}, req.body, { new:true }, (err, materia) => {
    if(err){
      return res.json({'success':false,'message':'Error xd','error':err});
    }
    console.log(materia);
    return res.json({'success':true,'message':'Materia actualizada',materia});
  });
}

// GET de materia por ID
export const getMateria = (req, res) => {
  var cod = req.params.codigo;
  var algo = '"'+cod+'"';
  mongoose.set('debug', true);
  Materia.find({[cod]: {$exists: true}}).exec((err, materia) => {
    if(err){
      return res.json({'success':false,'message':'Error xd','error':err});
    }
    if(materia.length){
      return res.json({'success':true,'message':'Materia por ID obtenida.',materia});
    }
    else{
      return res.json({'success':false,'message':'No existe una materia con ese ID'});
    }
  })
}
