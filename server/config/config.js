/*
PUERTO
*/
process.env.PORT = process.env.PORT || 3000;

/*
ENTORNO
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/*
BASE DE DATOS
*/
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/cafe'
} else {
    urlDB = 'mongodb+srv://Aegon:LXVgD3A8WQtOJ9sq@cluster0.72ncx.mongodb.net/cafe'
}

process.env.URLDB = urlDB;