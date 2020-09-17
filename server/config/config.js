// ===========================
// Puerto
// ===========================
process.env.PORT = process.env.PORT || 3000;

// ===========================
// Entorno
// ===========================
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


// ===========================
// Base de datos
// ===========================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ===========================
// Cliente ID de google
// ===========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '765035038324-afg6702mpvsr057fdm5grunpbsv1ms57.apps.googleusercontent.com';