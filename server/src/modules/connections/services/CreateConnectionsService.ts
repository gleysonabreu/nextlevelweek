import { injectable, inject } from 'tsyringe';
import IConnectionsRepository from '../repositories/IConnectionsRepository';
import Connecntions from '../infra/typeorm/entities/Connecntions';

interface IRequest {
  user_id: number;
}

@injectable()
class CreateConnecntionsService {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ){}

  execute = async ({ user_id }: IRequest): Promise<Connecntions> => {
    const connection = await this.connectionsRepository.create(user_id);
    return connection;
  }
}

export default CreateConnecntionsService;