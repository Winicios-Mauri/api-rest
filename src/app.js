import express from 'express';
import routes from './routes.js';

const app = express();

// Usando o Router
app.use(routes)

// Indicando para o express ler body com json
app.use(express.json())



export default app
