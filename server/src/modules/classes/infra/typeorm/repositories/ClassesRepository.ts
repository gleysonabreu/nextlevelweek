import { Repository, getRepository } from 'typeorm';
import IClassesRepository from '../../../repositories/IClassesRepository';
import Classes from '../entities/Classes';
import ICreateClasses from '../../../dtos/ICreateClasses';
import IFindClasses from '../../../dtos/IFindClasses';
import convertHourToMinutes from '../../../../../shared/utils/convertHourToMinutes';

class ClassesRepository implements IClassesRepository {
  private ormRepository: Repository<Classes>;

  constructor() {
    this.ormRepository = getRepository(Classes);
  }

  findClasses = async ({ subject, time, week_day }: IFindClasses): Promise<Classes[] | undefined> => {

    const classes = await this.ormRepository.find({
      relations: ['user', 'schedule']
    });

    return classes;

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