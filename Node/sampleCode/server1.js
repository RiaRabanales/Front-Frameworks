//Aquí creo mi servidor node
//Cada vez que haga un cambio tengo que relanzar el servidor con node server
const http = require('http');

//Esta función se lanza cada vez que llamo al servidor; tiene request y response
const server = http.createServer((req, res) => {
    //console.log(req); si entro por el navegador en localhost:3000 veo info
    console.log('Request realizada');
    //esto se loguea en la terminal, pero no en el navegador: es por parte de servidor
    console.log(req.url, req.method);

    //Trabajo los headers de respuesta; puedo verlos en herramientas de desarrollador/network:
    res.setHeader('Content-Type', 'text/html');

    //Envío los datos:
    res.write('<head><link rel="stylesheet" hred="#"></head>');
    res.write('<h1>BUENAAAAASSSS</h1>');
    res.write('<p>que taaaaal</p>');
    res.end();
});

//así marco en qué servidor se tiene que escuchar
server.listen(3000, 'localhost', () => {
    console.log('Escuchando requests en el puerto 3000 de localhost');
}); 