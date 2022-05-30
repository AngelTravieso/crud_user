const mongoose = require('mongoose');

mongoose.connect(process.env.URI)
    .then(() => console.log('BD conectada...🔥'))
    .catch(err => console.log('Falló la conexión',err));