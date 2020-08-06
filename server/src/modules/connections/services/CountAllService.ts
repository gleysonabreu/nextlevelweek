import { injectable, inject } from "tsyringe";
import IConnectionsRepository from "../repositories/IConnectionsRepository";

@injectable()
class CountAllService {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ){}

  execute = async (): Promise<number> => {
    const countAll = await this.connectionsRepository.countAll();

    return countAll;
  }
}

export default CountAllService;