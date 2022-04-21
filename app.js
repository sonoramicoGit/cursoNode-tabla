const {imprimirTabla} = require('./helpers/multiplicar');
const {obtieneArgv} =require('./config/yarks');
const colors = require('colors');
console.clear();
//mismos resultados de linea de comando node app --base=2

//const [,,base='base=5']=process.argv;
//const baseFinal=base.split('=');
//console.log(baseFinal[1]);
const argv=obtieneArgv();
console.log( argv);
imprimirTabla(argv.b,argv.l,argv.h).then((nombreArchivo)=>console.log(nombreArchivo.rainbow,'Creado!!'))
.catch((err)=>console.log(err))
;