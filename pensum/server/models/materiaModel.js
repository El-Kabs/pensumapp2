// Importar librerias
import mongoose from 'mongoose';
// Importar Schema de Mongoose
const Schema = mongoose.Schema;

// Declarar Schema de los datos
const materiaSchema = new Schema({
    codigo: {type: String},
    nombre: {type: String},
    creditos: {type: String},
    restriccionS: {type: String},
    restriccionN: {type: String},
    restriccionP: {type: String},
    Prerrequisitos: {type: String},
    Correquisitos: {type: String},
}, { collection: 'Materias' });

// Exportar el esquema
export default mongoose.model('Materia', materiaSchema);
