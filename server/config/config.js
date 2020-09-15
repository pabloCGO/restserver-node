/*
PUERTO
*/
process.env.PORT = process.env.PORT || 3000;

/*
ENTORNO
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================
// vencimiento del token
// ===========================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===========================
// seed de autenticacion
// ===========================
process.env.SEED = process.env.SEED || 'hola-que-hace-jwt';


/*
BASE DE DATOS
*/
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;