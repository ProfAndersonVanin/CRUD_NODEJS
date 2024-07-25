// controllers/clientes.js
const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Rota para listar todos os clientes
router.get('/', (req, res) => {
    connection.query('SELECT * FROM clientes', (err, rows) => {
        if (err) throw err;
        res.render('index', { clientes: rows });
    });
});

// Rota para exibir formulário de criação de cliente
router.get('/new', (req, res) => {
    res.render('new');
});

// Rota para criar um novo cliente
router.post('/', (req, res) => {
    const { nome, email, telefone } = req.body;
    const cliente = { nome, email, telefone };
    connection.query('INSERT INTO clientes SET ?', cliente, (err, result) => {
        if (err) throw err;
        res.redirect('/clientes');
    });
});

// Rota para exibir formulário de edição de cliente
router.get('/:id/edit', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM clientes WHERE id = ?', [id], (err, rows) => {
        if (err) throw err;
        res.render('edit', { cliente: rows[0] });
    });
});

// Rota para atualizar um cliente
router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;
    const cliente = { nome, email, telefone };
    connection.query('UPDATE clientes SET ? WHERE id = ?', [cliente, id], (err, result) => {
        if (err) throw err;
        res.redirect('/clientes');
    });
});

// Rota para deletar um cliente
router.post('/:id/delete', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM clientes WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.redirect('/clientes');
    });
});

module.exports = router;
