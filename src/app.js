import express from 'express';
import conexao from '../infra/conexao.js';

const app = express();

// Indicando para o express ler body com json
app.use(express.json())

app.get('/selecoes', (req, res) => {
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql, (error, result) => {
        if (error) {
            res.status(404).json({'erro': error})
        }else {
            res.status(200).json(result)
        }
    })
})

app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        const line = result[0]
        if (error) {
            res.status(404).json({'erro': error})
        }else {
            res.status(200).json(line)
        }
    })
})

app.post('/selecoes', (req, res) => {
    const data = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, data, (error, result) => {
        if (error) {
            res.status(404).json({'erro': error})
        }else {
            res.status(201).json(result)
        }
    })
})

app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        if (error) {
            res.status(404).json({'erro': error})
        }else {
            res.status(200).json(result)
        }
    })
})

app.put('/selecoes/:id', (req, res) => {
    const data = req.body
    const id = req.params.id;
    const sql = "UPDATE selecoes SET ? WHERE id =?;"
    conexao.query(sql, [data, id], (error, result) => {
        if (error) {
            res.status(400).json({'erro': error})
        }else {
            res.status(200).json(result)
        }
    })
})

export default app