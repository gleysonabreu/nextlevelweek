import ICreateClasses from "../dtos/ICreateClasses";
import Classes from "../infra/typeorm/entities/Classes";
import IFindClasses from "../dtos/IFindClasses";

export default interface IClassesRepository {
  create(classe: ICreateClasses): Promise<Classes>;
  findClasses(filters: IFindClasses): Promise<Classes[] | undefined>;
}