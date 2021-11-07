const { describe } = require('yargs');

//yargs
const argv = require('yargs')
.options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es el valor base de la tabla de multiplicar'
})
.options ('v', {
    alias: 'verboso',
    type: 'boolean',
    default: false,
    describe: 'Muestra el resultado en la consola'
})
.options ('l', {
    alias: 'limite',
    type: 'number',
    default: 12,
    describe: 'Número limite de resultados de la tabla de multiplicar'
})
.check( (argv) => {
    if (isNaN(argv.b)){
        throw 'La base tiene que ser un número';
    }
    return true;
})
.check ( (argv) => {
    if (isNaN(argv.l)){
        throw 'El limite tiene que ser un número';
    }
    return true;
})
.argv;

module.exports = argv;