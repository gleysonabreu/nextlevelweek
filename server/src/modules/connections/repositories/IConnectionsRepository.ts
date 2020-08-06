import Connecntions from "../infra/typeorm/entities/Connecntions";

export default interface IConnectionsRepository {
  create(user_id: number): Promise<Connecntions>;
  countAll(): Promise<number>;
}