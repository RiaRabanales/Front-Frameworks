//Aquí creo mi servidor node
const http = require('http');

//Esta función se lanza cada vez que llamo al servidor; tiene request y response
const server = http.createServer((req, res) => {
    console.log('Request realizada');
    //esto se loguea en la terminal, pero no en el navegador: es por parte de servidor
});

//así marco en qué servidor se tiene que escuchar
server.listen(3000, 'localhost', () => {
    console.log('Escuchando requests en el puerto 3000 de localhost');
}); 