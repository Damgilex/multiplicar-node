const {crearArchivo,listarTabla} = require('./Multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];//Si revisas la variable argv veras que el hay un arreglo llamado: _ , el cual contiene comandos

switch (comando) {
  case 'listar':
      listarTabla(argv.base,argv.limite);
    break;

  case 'crear':
    crearArchivo(argv.base,argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(e => console.log(e));

    break;
  default:
    console.log('comando no reconocido');
    break;
}
//let base = '5';
 let argv2 = process.argv;
 //console.log('base: ' + argv.base + ' - Limite: ' + argv.limite);

//Cuando node se ejecuta crea una variable de entorno llamada: process
//console.log(process);