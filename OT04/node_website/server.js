const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

// Configuração para servir arquivos estáticos do diretório 'express'
app.use(express.static(path.join(__dirname, 'express')));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.debug('Server inicializado na porta ' + port);
});