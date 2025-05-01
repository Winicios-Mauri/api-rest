import app from "./src/app.js";

const PORT = 3000;

// Escutando a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando no Endereço http://localhost:${PORT}`)
})