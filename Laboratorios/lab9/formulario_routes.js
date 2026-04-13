const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/form_method', (req, res) => {
    const html = fs.readFileSync(
        path.resolve(__dirname, './../form.html'),
        'utf8'
    );
    res.send(html);
});

router.post('/form_method', (req, res) => {
    const indice = Number(req.body.indice);
    const imprimir = req.body.imprimir;

    for (let i = 1; i <= indice; i++) {
        console.log(imprimir);
    }

    res.send("OK");
});

module.exports = router;