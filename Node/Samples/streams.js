//Continuación de files: para archivos largos/pesados, puedo usar los datos antes de leerlos enteros
const fs = require('fs');

const readStream = fs.createReadStream('./docs/lorem.txt', { encoding: 'utf8'});
//Con el parámetro enconding me ahorro pasarlo a string

const writeStream = fs.createWriteStream('./docs/loremcopy.txt');

readStream.on('data', (chunk) => {
    //esto es similar a un eventListener: actúa cada vez que recibo un buffer de datos
    console.log('\n------- NUEVO CHUNK ---------\n');
    console.log(chunk);
    writeStream.write('\n------- NUEVO CHUNK ---------\n');
    writeStream.write(chunk);
});

/*
También puedo hacer proceso directo lectura/escritura a través de un pipe:
readStream.pipe(writeStream);
Esto es lo mismo que el cacho readStream.on de arriba
*/