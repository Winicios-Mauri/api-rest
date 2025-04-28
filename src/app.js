import express from 'express';

const app = express();

// Mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Suécia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

// Criando a rota padrão
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

export default app