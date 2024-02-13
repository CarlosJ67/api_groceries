import app from './app.js';

import database from './database.js'

app.listen(process.env.PORT, () => {
    console.log('Server listening on port: ' + process.env.PORT);
});





//un servicio que reciba un numero en decimal y devuelva en octal 
//nodemon es para mantener el server pensando y en ejecucacion y este en tiempo real y aplique los cambios
//morgan: pasa por todas las rutas y te da el tiempo en responder y sale en la consola 
//ORM: Extrae los datos y los expone metodos sencillos 
//ODM: para las bases de datos NoSQL a partir de un esquenma de los modelos de datos, si existen solo sirve de un filtro
//Mongoose