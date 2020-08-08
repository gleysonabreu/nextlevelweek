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

    const classes = await this.ormRepository.query('select classes.*, users.* from classes inner join users on classes.user_id = users.id where exists (select class_schedule.* from class_schedule where class_schedule."classeId" = classes.id and class_schedule.week_day = $1 and class_schedule.from <= $2 and class_schedule.to > $3) and classes.subject = $4', [week_day, convertHourToMinutes(time), convertHourToMinutes(time), subject]);

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