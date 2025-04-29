import app from "./src/app.js";
import conexao from './infra/conexao.js'

const PORT = 3000;

conexao.connect((error) => {
    if(error) {
        console.error(error)
    } else {
        console.log("Conexão realizada com sucesso!")

        // Escutando a porta 3000
        app.listen(PORT, () => {
            console.log(`Servidor rodando no Endereço http://localhost:${PORT}`)
        })
    }
})
