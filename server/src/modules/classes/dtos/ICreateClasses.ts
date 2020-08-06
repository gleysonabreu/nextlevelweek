import Schedule from "../infra/typeorm/entities/Schedule";

export default interface ICreateClasses {
  subject: string;
  cost: number;
  user_id: number;
  schedule: Schedule[]
}