import { Router } from 'express';
import ConnectionsController from '../controllers/ConnectionsController';

const routesConnections = Router();
const connectionsController = new ConnectionsController;

routesConnections.post('/', connectionsController.create);

export default routesConnections;