// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuração do body-parser para lidar com POSTs
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do EJS como view engine
app.set('view engine', 'ejs');

// Configuração das rotas
const clientesRouter = require('./controllers/clientes');
app.use('/clientes', clientesRouter);

// Configuração do Express para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
