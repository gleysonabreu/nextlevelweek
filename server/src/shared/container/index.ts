import { container } from 'tsyringe';

import IConnectionsRepository from '../../modules/connections/repositories/IConnectionsRepository';
import ConnectionsRepository from '../../modules/connections/infra/typeorm/repositories/ConnenctionsRepository';
import IClassesRepository from '../../modules/classes/repositories/IClassesRepository';
import ClassesRepository from '../../modules/classes/infra/typeorm/repositories/ClassesRepository';
import IUsersRepository from '../../modules/classes/repositories/IUsersRepository';
import UsersRepository from '../../modules/classes/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IConnectionsRepository>(
  'ConnectionsRepository',
  ConnectionsRepository,
);

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);