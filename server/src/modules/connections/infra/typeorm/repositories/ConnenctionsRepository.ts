import { Repository, getRepository } from 'typeorm';
import IConnectionsRepository from '../../../repositories/IConnectionsRepository';
import Connecntions from '../entities/Connecntions';

class ConnectionsRepository implements IConnectionsRepository {
  private ormRepository: Repository<Connecntions>;

  constructor() {
    this.ormRepository = getRepository(Connecntions);
  }

  countAll = async (): Promise<number> => {
    const [count, totalConnections] = await this.ormRepository.findAndCount()
    return totalConnections;
  }

  create = async (user_id: number): Promise<Connecntions> => {
    const connecntion = this.ormRepository.create({
      user_id,
    });

    await this.ormRepository.save(connecntion);

    return connecntion;
  }
}

export default ConnectionsRepository;