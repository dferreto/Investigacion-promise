import { Router } from 'express';
import ProductosController from '../controller/ProductosController';
import { checkjwt } from '../middleware/jwt';
import { checkRoles } from '../middleware/roles';
import CategoriasController from '../controller/CategoriasController';

const routes = Router();

routes.get('', CategoriasController.getAll);
export default routes;
