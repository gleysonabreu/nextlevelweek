import express from 'express';
import routesConnections from '../../../../modules/connections/infra/http/routes/routes.connections';
import routesClasses from '../../../../modules/classes/infra/http/routes/routes.classes';

const routes = express.Router();
routes.use('/connections', routesConnections);
routes.use('/classes', routesClasses);

export default routes;