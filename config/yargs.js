const opts = { //Creacion de objeto con las opciones para yargs ya que se repiten en listar y crear
    base:{
    demand:true,
    alias: 'b'
  },
  limite:{
    demand:false,
    alias:'l',
    default: 10
  }}

const argv = require('yargs')//Paquete detro de los modulos de node
            .command('listar','imprime en consola la tabla de multiplicar',opts)
            .command('crear','Genera un archivo con la tabla de multiplicar',opts)
            .help()
            .argv;
           
module.exports = {
    argv
}



//DE LA MISMA FORMA PERO REPITIENDO CODIGO.---------------------
//Paquete detro de los modulos de node
// const argv = require('yargs')
//             .command('listar','imprime en consola la tabla de multiplicar',{
//               base:{
//                 demand:true,
//                 alias: 'b'
//               },
//               limite:{
//                 demand:false,
//                 alias:'l',
//                 default: 10
//               }
//             })
//             .command('crear','Genera un archivo con la tabla de multiplicar',{
//               base:{
//                 demand:true,
//                 alias: 'b'
//               },
//               limite:{
//                 demand:true,
//                 alias:'l',
//                 default: 10
//               }
//             })
//             .help()
//             .argv;
