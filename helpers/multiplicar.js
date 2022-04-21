const { throws } = require('assert');
const fs =require('fs');
const colors = require('colors');
 

const  imprimirTabla = async (tabla,listar,hasta)=>{
    console.log(`"******************* Tabla del ${tabla} ***********************`.green);
    let salida = '';
    let archivo='';

    try{
        for (let index = 1; index <= hasta; index++) {
            salida += `${index} ${'X'} ${tabla} ${'='} ${index * tabla} \n`;
        }
        archivo=`./salida/tabla-${tabla}.txt`;
        if(listar)
            console.log(salida);
        fs.writeFile(archivo,salida,(err)=>{
            if(err)
                throw err;
        });
        return archivo
    }catch(err){
        throw err
    }

};
module.exports = {
   imprimirTabla 
} ;