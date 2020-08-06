import { Router } from 'express';
import ConnectionsController from '../controllers/ConnectionsController';

const routesConnections = Router();
const connectionsController = new ConnectionsController;

routesConnections.post('/', connectionsController.create);
routesConnections.get('/', connectionsController.index);

export default routesConnections;