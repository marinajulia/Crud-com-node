import express, { request, response } from 'express';
import routes from './Routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Servidor inicializado na porta 3000"));

// app.get("/", (request, response) => {
//     return response.json({mensagem:"Hello world", ano: 2021});
// });