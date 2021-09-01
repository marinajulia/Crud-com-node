import { Router } from 'express';
import CadastroController from './Controller/CadastroController';

const routes = Router();

routes.post('/cadastros', CadastroController.create);
routes.put('/cadastros', CadastroController.update);
routes.get('/cadastros', CadastroController.list);
export default routes;