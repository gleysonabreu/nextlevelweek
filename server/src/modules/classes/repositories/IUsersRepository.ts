import ICreateUser from "../dtos/ICreateUser";
import User from "../infra/typeorm/entities/User";

export default interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
}