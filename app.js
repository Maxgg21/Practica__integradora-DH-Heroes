// Se require Express
const express = require('express');
// Ejecuto express
const app = express();
//controlador de rutas
const path = require('path');
//activar distintas de funcionales
app.use(express.static(path.join(__dirname, 'public')))



//HOME
app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/views/index.html'))
});

//BABBEGE
app.get('/babbege', (req, res) => {
    return res.sendFile(path.join(__dirname, '/views/babbege.html'))
});

//BERNERS-LEE
app.get('/berners_lee', (req, res) => {
    return res.sendFile(path.join(__dirname, '/views/berners_lee.html'))
});

//CLARKE
app.get('/charke', (req, res) => {
    return res.sendFile(path.join(__dirname, '/views/charke.html'))
});

//HAMILTON
app.get('/hamilton', (req, res) => {
    return res.sendFile(path.join(__dirname, '/views/hamilton.html'))
});

//HOPPER
app.get('/hopper', (req, res) => {
    return res.sendFile(path.join(__dirname, '/views/hopper.html'))
});

//LOVELACE
app.get('/lovelace', (req, res) => {
    return res.sendFile(path.join(__dirname, '/views/lovelace.html'))
});

//TURING
app.get('/turing', (req, res) => {
    return res.sendFile(path.join(__dirname, '/views/turing.html'))
});

//Se levanta el servidor
app.listen(3030, () => {
    console.log('El servidor se esta escuchando el puesto 3030');
})

