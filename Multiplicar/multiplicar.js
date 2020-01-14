//Requires (Se acotumbra a declarar al inicio), hay tres tipos de requires
//Se recomienda que se declaren con 'fs'
const fs = require('fs');//1.: Libreria propia de node, solo hay que definirla
//const fs = require('express'); //2.: Libreria que no es nativa de node y hay que instalar
//3.: archivos que nosotros creamos, empiezan con ('./fs')
const color = require('colors');
let listarTabla = (base, limite=10)=>{//Se permite dar valor por defecto a parmetros en caso de no recibir nada
    
    let data = '';

    if(!Number(base) || !Number(limite)){
        reject('Uno de los datos no es numerico');
        return;
    }
  
    for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} X ${i} = ${resultado} \n`;  
    }
    console.log(data.blue);

}

let crearArchivo = (base, limite=10)=>{
    return new Promise((resolve, reject)=>{

        if(!Number(base)){
            reject('No es un número');
            return;
        }

        let data = '';
        for(let i=1; i<=limite; i++){
            let resultado = base * i;
            data += `${base} X ${i} = ${resultado} \n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve( `tabla-${base}.txt`);
        });
    })
    
}


module.exports={
    crearArchivo,
    listarTabla,
}