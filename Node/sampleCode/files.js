//fs -file system- permite interactuar con el sistema de archivos en una máquina
const fs = require('fs');

//Leer archivos:
fs.readFile('./docs/sample.txt', (err, data) => {
    //Este método es asíncrono
    if (err) {
        console.log(err);
    }
    console.log(data.toString());   //sin toString recibo sólo el buffer
});

//Escribir archivos:
const texto = 'Hola Mundo'
fs.writeFile('./docs/banana.txt', texto, () => {
    //Si uso un archivo que no existe, me lo crea; sino me lo sobreescribe
    console.log('Se ha escrito el archivo')
});

//Directorios:
if (!fs.existsSync('./assets')) {
    //Si la carpeta ya existe da error; por eso la comprobación anterior
    //Este método es síncrono
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);   
        }
        console.log('Carpeta assets creada');
    });
} else {
    console.log('Carpeta assets ya existe: se elimina');
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log (err);
        }
    });
}

//Eliminar archivos:
if (fs.existsSync('./dots/banana.txt')) {
    fs.unlink('./docs/banana.txt'), (err) => {
        if (err) {
            console.log (err);
        };
        console.log('archivo eliminado');
    }
}