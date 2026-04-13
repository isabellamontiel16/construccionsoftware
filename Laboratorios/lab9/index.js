const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const rutasFormulario = require('./routes/formulario.routes');
app.use('/formulario', rutasFormulario);

// middleware
app.use((req, res, next) => {
    console.log('Middleware!');
    next();
});

// ruta principal
app.get('/', (req, res) => {
    res.send("URL index /");
});

// JSON
app.get('/test_json', (req, res) => {
    res.json({ code: 200, msg: "Ok GET" });
});

// HTML
app.get('/test_html', (req, res) => {
    res.send("<h1>Hola mundo desde express</h1>");
});

// 404
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});


app.get('/form_method', (req, res) => {
    const html = fs.readFileSync(
        path.resolve(__dirname, 'form.html'),
        'utf8'
    );
    res.send(html);

app.post('/form_method', (req, res) => {
    const indice = Number(req.body.indice);
    const imprimir = req.body.imprimir;

    for (let i = 1; i <= indice; i++) {
        console.log(imprimir);
    }

    res.send("Datos recibidos");
});


});