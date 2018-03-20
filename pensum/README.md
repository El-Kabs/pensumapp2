# Pensumapp

### Recomendaciones

NUNCA SUBIR CON EL NODE_MODULES.
Siempre eliminarlo para hacer push.

Para instalar node_modules:
```sh
$ cd pensum
$ npm install
$ npm start
```
Mongo debe estar corriendo:

```sh
$ mongod
```

### Estado actual: 

 - El servidor es 'RESTful', se pueden hacer get de todas las materias o de una materia en especifico.
 - ADMI1101 Es el ejemplo
 ```sh
GET localhost:8000/materias
GET localhost:8000/materias/ADMI1101
```
 ### ¿Que hay para hacer manito?: 
- Entender el front xd.