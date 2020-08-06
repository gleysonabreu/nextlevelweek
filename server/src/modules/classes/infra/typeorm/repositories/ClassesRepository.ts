import { Repository, getRepository } from 'typeorm';
import IClassesRepository from '../../../repositories/IClassesRepository';
import Classes from '../entities/Classes';
import ICreateClasses from '../../../dtos/ICreateClasses';

class ClassesRepository implements IClassesRepository {
  private ormRepository: Repository<Classes>;

  constructor() {
    this.ormRepository = getRepository(Classes);
  }

  create = async ({ cost, subject, user_id, schedule }: ICreateClasses): Promise<Classes> => {
    const classe = this.ormRepository.create({
      subject,
      cost,
      user_id,
      schedule
    });

    await this.ormRepository.save(classe);

    return classe;
  }
}

export default ClassesRepository;