// Importar librerias
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';

// Importar el archivo routes
import routes from './routes/routes';

// Definicion de express
const app = express();

// Express-busboy para parsear multipart/form-data
bb.extend(app);

// Headers
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Configurar app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configurar puerto
const port = process.env.PORT || 8000;

// Conectar la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://kabs:kabs83@ds014118.mlab.com:14118/materias', (error) => {
  console.log('Conectado');
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
  console.log('Conectado a mongo');
});

// Para ver donde fueron los errores
SourceMapSupport.install();

// Ruta de la api
app.use('/api', routes);

// Comprobación
app.get('/', (req, res) => {
  return res.end('API Andando');
});

// 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>404 Pagina no encontrada. </h2>');
});

// Iniciar servidor
app.listen(port, () => {
  console.log('Corriendo en el puerto: '+port);
});
