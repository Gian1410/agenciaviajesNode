// const express = require('express');

import express from 'express';
import router from './routes/index.js';

import db from './config/db.js'


const app = express();

// conectar base de datos
db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch(error =>console.log(error))

const port = process.env.PORT || 3000;

// req lo que enviamos o peticiones - res => lo que express responde

// Habilitar PUG
app.set('view engine', 'pug');

// obtener el año actual
// primero aqui vemos algo si imprimimos req veremos varios objetos y funciones igual pasa con el res, pero si usamos el res el codigo se detendra ahi por ello usamos next que pasa al siguiente
app.use((req,res,next)=>{
    const year = new Date();

    // cuando usamos locals de res pues enviamos como datos globales 
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next();
})

// agregar body parser para leer datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// agregar Router
app.use('/', router);

app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})