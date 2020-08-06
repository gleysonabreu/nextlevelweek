import { Request, Response } from "express"
import { container } from "tsyringe";
import CreateConnecntionsService from "../../../services/CreateConnectionsService";

class ConnectionsController {
  create = async (request: Request, response: Response) => {
    const { user_id } = request.body;

    const createConnections = container.resolve(CreateConnecntionsService);
    const connection = await createConnections.execute({ user_id });

    return response.status(201).send(connection);
  }
}

export default ConnectionsController;
