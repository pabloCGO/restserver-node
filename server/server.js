require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

//configuracion de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(response => {
    console.log('Conexión existosa');
}).catch(err => {
    console.log('Error al conectar a mongo', err);
})

app.listen(process.env.PORT, () => {
    console.log('escuchando el puerto:', process.env.PORT);
});