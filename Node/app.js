//TODO: toca https://www.youtube.com/watch?v=bxsemcrY4gQ&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=9
const express = require('express');
const morgan = require('morgan');   //middleware para logger; opciones dev, tiny...

// Creo la instancia de express app, registro view engine y escucho localhost
const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

// Middleware y archivos estáticos (públicos)
app.use(express.static('public'));  //todo lo que haya en esta carpeta se hace público
app.use(morgan('dev'));

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

//404 middleware
app.use((req, res)=> {
    res.status(404).render('404', { title: '404' });
});
