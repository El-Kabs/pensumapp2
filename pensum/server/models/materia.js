import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const materiaSchema = new Schema({
    codigo: {type: String},
    nombre: {type: String},
    creditos: {type: String},
    restriccionS: {type: String},
    restriccionN: {type: String},
    restriccionP: {type: String},
    Prerrequisitos: {type: String},
    Correquisitos: {type: String},
});

export default mongoose.model('Materia', materiaSchema);
