require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/usuario'));

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