import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import ConnectionsController from '../controllers/ConnectionsController';

const routesConnections = Router();
const connectionsController = new ConnectionsController;

routesConnections.post('/', celebrate(
  {
    body: Joi.object().keys({
      user_id: Joi.number().required(),
    })
  }
), connectionsController.create);
routesConnections.get('/', connectionsController.index);

export default routesConnections;