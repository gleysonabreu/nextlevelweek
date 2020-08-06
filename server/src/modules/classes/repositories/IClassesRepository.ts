import ICreateClasses from "../dtos/ICreateClasses";
import Classes from "../infra/typeorm/entities/Classes";

export default interface IClassesRepository {
  create(classe: ICreateClasses): Promise<Classes>;
}