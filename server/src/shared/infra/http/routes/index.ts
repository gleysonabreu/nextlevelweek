import express from 'express';
import ClassesController from '../../../../controllers/ClassesController';
import routesConnections from '../../../../modules/connections/infra/http/routes/routes.connections';
import routesClasses from '../../../../modules/classes/infra/http/routes/routes.classes';

const routes = express.Router();
const classesController = new ClassesController();

//routes.post('/classes', classesController.create);
//routes.get('/classes', classesController.index);
routes.use('/connections', routesConnections);
routes.use('/classes', routesClasses);

export default routes;