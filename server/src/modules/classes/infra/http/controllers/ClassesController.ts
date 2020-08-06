import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateClassesService from '../../../services/CreateClassesService';
class ClassesController {

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

    return response.json({ classe });
  }

}

export default ClassesController;