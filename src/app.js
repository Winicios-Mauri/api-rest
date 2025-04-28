const express = require('express');
const app = express();
const port = 3000;

// Criando a rota padrão
app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
// Escutando a porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando no Endereço http://localhost:${port}`)
})
