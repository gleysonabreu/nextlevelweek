import { injectable, inject } from "tsyringe";
import IClassesRepository from "../repositories/IClassesRepository";
import Classes from "../infra/typeorm/entities/Classes";
import IUsersRepository from "../repositories/IUsersRepository";
import Schedule from "../infra/typeorm/entities/Schedule";

interface IRequest {
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: number;
    schedule: Schedule[];
}

@injectable()
class CreateClassesService {
  constructor(
    @inject('ClassesRepository')
    private connectionsRepository: IClassesRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ){}

  execute = async ({
    avatar, bio, cost, name, schedule, subject, whatsapp
  }: IRequest): Promise<Classes> => {

    const user = await this.usersRepository.create({
      avatar,
      bio,
      name,
      whatsapp
    });

    const classe = await this.connectionsRepository.create({
      subject,
      cost,
      user_id: user.id,
      schedule
    });

    return classe;
  }
}

export default CreateClassesService;