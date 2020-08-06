import express from 'express';
import ClassesController from '../../../../controllers/ClassesController';
import ConnectionsController from '../../../../controllers/ConnectionsController';
import routesConnections from '../../../../modules/connections/infra/http/routes/routes.connections';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.use('/connections', routesConnections);
//routes.get('/connections', connectionsController.index);

export default routes;