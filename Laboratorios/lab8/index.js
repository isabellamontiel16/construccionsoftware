const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {

    switch (request.url) {

        case "/":
            response.setHeader('Content-Type', 'text/plain');
            response.write("Bienvenido a la ruta principal");
            response.end();
            break;

        case "/test_json":
            if (request.method === "GET") {
                response.setHeader('Content-Type', 'application/json');
                response.write(JSON.stringify({ code: 200, msg: "Ok GET" }));
                response.end();
            } else if (request.method === "POST") {
                response.setHeader('Content-Type', 'application/json');
                response.write(JSON.stringify({ code: 200, msg: "Ok POST" }));
                response.end();
            }
            break;

        case "/test_html":
            response.setHeader('Content-Type', 'text/html');
            response.write(`
                <h1>Hola desde HTML</h1>
                <a href="/form_method">Ir al formulario</a>
            `);
            response.end();
            break;

        case "/form_method":

            if (request.method === "GET") {
                const html = fs.readFileSync(
                    path.resolve(__dirname, './form.html'),
                    'utf8'
                );

                response.setHeader('Content-Type', 'text/html');
                response.write(html);
                response.end();

            } else if (request.method === "POST") {

                let body = [];

                request.on('data', chunk => {
                    body.push(chunk);
                });

                request.on('end', () => {
                    body = Buffer.concat(body).toString();

                    const indice = Number(body.split('&')[0].split('=')[1]);
                    const imprimir = body.split('&')[1].split('=')[1];

                    console.log("Indice:", indice);
                    console.log("Texto:", imprimir);

                    for (let i = 0; i < indice; i++) {
                        console.log(imprimir);
                    }

                    fs.appendFileSync('datos.txt', body + '\n');

                    response.setHeader('Content-Type', 'application/json');
                    response.write(JSON.stringify({ code: 200, msg: "Datos recibidos" }));
                    response.end();
                });
            }
            break;

        default:
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/plain');
            response.write("404 - Ruta no encontrada");
            response.end();
            break;
    }
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});