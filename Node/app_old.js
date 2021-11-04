const express = require('express');

// Creo la instancia de express app
const app = express();

// Registro mi view engine; buscará en la carpeta views por defecto
app.set('view engine', 'ejs');
//app.set('views', 'vistas'); para buscar mejor en la carpeta vistas

// Escucho requests de localhost
app.listen(3000);

app.get('/', (req, res) => {
    //res.send(<p>Homepage</p>); Express deduce así los headers y status codes
    //para poder tomar bien la ruta relativa paso el directorio como segundo parámetro
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

// Redirects:
app.get('/about-us', (req, res) => {
    res.redirect('about');
});

// Página 404: use es el método típico de middleware. Se lanza sólo si no entra en los anteriores, para todo url.
app.use((req, res)=> {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
