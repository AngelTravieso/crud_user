const express = require('express');
const app = express();
const { create } = require('express-handlebars');
require('dotenv').config();
require('./database/db');
const port = process.env.PORT || 5000;


// Para indicar la extension .hbs y no handlebars 
const hbs = create({
    extname: '.hbs',
    partialsDir: ['views/components'],
});


// Motor de plantilla
app.engine('.hbs', hbs.engine);

// La extension del motor va a ser .hbs
app.set('view engine', '.hbs');

// Indicar que los archivos de nuestro motor va a estar en la carpeta views
app.set('views', './views');


app.use(express.urlencoded({extended: true}));


app.use('/', require('./routes/home'));




app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));