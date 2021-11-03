//Continua https://www.youtube.com/watch?v=DQD00NAUPNk&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=4
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    //Paso un archivo html como respuesta
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
            /* Al enviar sólo un archivo es equivalente a:
            res.write(data);
            res.end();
            */
        }
        
    })
});


server.listen(3000, 'localhost', () => {
    console.log('Escuchando requests en el puerto 3000 de localhost');
}); 