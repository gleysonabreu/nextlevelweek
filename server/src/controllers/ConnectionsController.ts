import { Request, Response } from "express"
import db from "../shared/infra/sqlite3";

export default class ConnectionsController {
  index = async (request: Request, response: Response) => {
    const totalConnections = await db('connections').count('* as total');
    
    const { total } = totalConnections[0];

    return response.json({ total });
  }

  create = async (request: Request, response: Response) => {
    const { user_id } = request.body;

    await db('connections').insert({
      user_id,
    });

    return response.status(201).send();
  }
}