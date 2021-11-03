//El objeto global es el equivalente al window
//console.log(global);

console.log(__dirname);     //ruta absoluta del folder de este archivo sin el nombre del archivo
console.log(__filename);    //ruta absoluta del folder de este archivo con el archivo
//Hay elementos del dom que no se pueden acceder, como document.querySelector; no están en el global namespace

setTimeout(() => {       //es lo mismo que global.setTimeout(
    console.log('3s timeout de global; para intervalo');
    clearInterval(int); //para parar el intervalo
}, 3000);

const int = setInterval(() => {
    console.log('1s intervalo de global');
}, 1000);