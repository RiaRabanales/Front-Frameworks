const express = require('express');

// Creo la instancia de express app
const app = express();

// Registro mi view engine; buscará en la carpeta views por defecto
app.set('view engine', 'ejs');

// Escucho requests de localhost
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Patatas fritas ricas', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'Los mejores sugus son los de piña', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: '¿Y si hoy pedimos sushi?', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

app.use((req, res)=> {
    res.status(404).render('404', { title: '404' });
});
