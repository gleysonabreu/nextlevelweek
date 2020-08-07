import { injectable, inject } from "tsyringe";
import IClassesRepository from "../repositories/IClassesRepository";
import Classes from "../infra/typeorm/entities/Classes";
import IUsersRepository from "../repositories/IUsersRepository";
import convertHourToMinutes from "../../../shared/utils/convertHourToMinutes";
import User from "../infra/typeorm/entities/User";
import { Request } from "express";
import ApiError from "../../../shared/error/ApiError";

interface IRequest {
    filters: Request;
}

@injectable()
class FindClassesService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ){}

  execute = async ({
    filters 
  }: IRequest): Promise<Classes[] | undefined> => {

    const subject = filters.query.subject as string;
    const week_day = filters.query.week_day as string;
    const time = filters.query.time as string;

    if(!subject || !week_day || !time) throw new ApiError('Fill in all fields.');

    const classes = await this.classesRepository.findClasses({ subject, week_day, time });

    return classes;
  }
}

export default FindClassesService;