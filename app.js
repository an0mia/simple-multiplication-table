const { crearArchivo } = require('./helpers/multiplicar');
const argv = require("./config/yargs");

require('colors');

console.clear();

crearArchivo(argv.b, argv.v, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'.green))
    .catch(err => console.log(err))
;

