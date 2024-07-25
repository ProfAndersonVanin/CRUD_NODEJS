// config/db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro_clientes'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida');
});

module.exports = connection;
