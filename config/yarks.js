//forma manual
//const yargs = require('yargs/yargs');
//const { hideBin } = require('yargs/helpers');
//forma curso fernando 
const yargsFer= require('yargs');
const { argv } = require('process');
const { boolean } = require('yargs');
const { isBooleanObject } = require('util/types');

//const argv = yargs(hideBin(process.argv)).argv;
// o bien solamente 

const obtieneArgv=()=>{
    const argvFer = yargsFer
    .option('b',{
            alias: 'base',
            type:'number',
            demandOption:true,
            describe:'Esa base de la tabla de mutiplicar'
    }) 
    .option('l',{
            alias: 'listar',
            type: 'boolean',
            default :false,
            describe:'Muestra la tabla en consola'
            
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default :10,
        describe:'Muestra hasta que valor iria'
        
})
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'El valor de la base debe ser un número!';
        }else if (isNaN(argv.h)){
            throw 'El valor de hasta debe ser un número!';
        }else{
            return true;
        }
    })
    .argv;
    return argvFer;
}
module.exports={
    obtieneArgv
}
