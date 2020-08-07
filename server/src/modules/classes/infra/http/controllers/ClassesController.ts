import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateClassesService from '../../../services/CreateClassesService';
import FindClassesService from '../../../services/FindClassesService';
class ClassesController {
  index = async (request: Request, response: Response): Promise<Response> => {
    const filters = request;

    const findClasses = container.resolve(FindClassesService)
    const classes = await findClasses.execute({ filters });

    return response.json({ classes });

  }

  create = async (request: Request, response: Response): Promise<Response> => {
    const {
      name, avatar, bio, whatsapp, subject, cost, schedule
    } = request.body;

    const createClasse = container.resolve(CreateClassesService);
    const classe = await createClasse.execute({
      name,
      avatar,
      bio,
      whatsapp,
      subject,
      cost,
      schedule
    });

    return response.json({ infos: classe });
  }

}

export default ClassesController;