import express from 'express';
import ClassesController from '../../../../controllers/ClassesController';
import routesConnections from '../../../../modules/connections/infra/http/routes/routes.connections';

const routes = express.Router();
const classesController = new ClassesController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.use('/connections', routesConnections);

export default routes;