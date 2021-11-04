const express = require('express');

// Creo la instancia de express app, registro view engine y escucho localhost
const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

//Logger middleware
app.use((req, res, next) => {
    console.log('New request: ' + req.hostname + ', ' + req.path + ', ' + req.method)
    next(); //next avanza a la siguiente función
});

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
