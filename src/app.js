import express from 'express';

const app = express();

// Indicando para o express ler body com json
app.use(express.json())

// Mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Suécia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSeleceao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

// Criando a rota padrão
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção Cadastrada com Sucesso!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSeleceao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com ID ${req.params.id} Excluída com Sucesso!`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSeleceao(req.params.id)
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json(selecoes[index])
})

export default app