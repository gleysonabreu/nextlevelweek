import { Repository, getRepository } from 'typeorm';
import IUsersRepository from '../../../repositories/IUsersRepository';
import User from '../entities/User';
import ICreateUser from '../../../dtos/ICreateUser';


class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  create = async ({ avatar, whatsapp, name, bio }: ICreateUser): Promise<User> => {
    const user = this.ormRepository.create({
      avatar,
      whatsapp,
      name,
      bio,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;