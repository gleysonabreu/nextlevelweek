import { injectable, inject } from "tsyringe";
import IClassesRepository from "../repositories/IClassesRepository";
import Classes from "../infra/typeorm/entities/Classes";
import IUsersRepository from "../repositories/IUsersRepository";
import convertHourToMinutes from "../../../shared/utils/convertHourToMinutes";
import User from "../infra/typeorm/entities/User";

interface IRequest {
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: number;
    schedule: Array<{
      week_day: number;
      to: number;
      from: number;
    }>;
}

@injectable()
class CreateClassesService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ){}

  execute = async ({
    avatar, bio, cost, name, schedule, subject, whatsapp, 
  }: IRequest): Promise<any> => {

    const user = await this.usersRepository.create({
      avatar,
      bio,
      name,
      whatsapp,
    });

    const classe = await this.classesRepository.create({
      subject,
      cost,
      user_id: user.id,
      schedule: schedule.map(item => {
        return {
          week_day: item.week_day,
          to: convertHourToMinutes(String(item.to)),
          from: convertHourToMinutes(String(item.from)),
        }
      })
    });

    return {classe, user};
  }
}

export default CreateClassesService;