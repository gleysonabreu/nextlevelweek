import { container } from 'tsyringe';

import IConnectionsRepository from '../../modules/connections/repositories/IConnectionsRepository';
import ConnectionsRepository from '../../modules/connections/infra/typeorm/repositories/ConnenctionsRepository';

container.registerSingleton<IConnectionsRepository>(
  'ConnectionsRepository',
  ConnectionsRepository,
);