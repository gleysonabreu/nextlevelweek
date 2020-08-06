import { Request, Response } from "express"
import { container } from "tsyringe";
import CreateConnecntionsService from "../../../services/CreateConnectionsService";
import CountAllService from "../../../services/CountAllService";

class ConnectionsController {
  create = async (request: Request, response: Response): Promise<Response> => {
    const { user_id } = request.body;

    const createConnections = container.resolve(CreateConnecntionsService);
    const connection = await createConnections.execute({ user_id });

    return response.status(201).send(connection);
  }

  index = async (request: Request, response: Response): Promise<Response> => {
    const countAllService = container.resolve(CountAllService);
    const total = await countAllService.execute();

    return response.json({ total })
  }
}

export default ConnectionsController;
