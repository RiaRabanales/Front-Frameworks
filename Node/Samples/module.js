const objeto = require('./fruit');
//Así importo el archivo fruit; si lanzo node module me lista la fruta

/* Esto es destructuring: sólo traigo un elemento
const { frutas } = require('./frutas');
Aquí no traería los colores */

//console.log(objeto) devuelve un objeto vacío {} si no se ha importado la lista
console.log(objeto.frutas, objeto.colores);

//Node.js incluye varios módulos propios muy interesantes
const os = require('os');   //da info del sistema operativo
console.log(os.platform(), os.homedir());