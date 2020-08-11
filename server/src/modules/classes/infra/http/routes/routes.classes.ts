import { Router } from 'express';
import ClassesController from '../controllers/ClassesController';
import { celebrate, Joi } from 'celebrate';

const routesClasses = Router();
const classesController = new ClassesController();

routesClasses.post('/', celebrate(
  {
    body: Joi.object().keys({
      name: Joi.string().required().min(3),
      avatar: Joi.string().required(),
      whatsapp: Joi.string().required(),
      bio: Joi.string().required(),
      subject: Joi.string().required().min(3),
      cost: Joi.number().required(),
      schedule: Joi.array().required(),
    })
  }
), classesController.create);
routesClasses.get('/', celebrate(
  {
    query: Joi.object().keys({
      week_day: Joi.number().required(),
      subject: Joi.string().required().min(3),
      time: Joi.string().required(),
    })
  }
), classesController.index);

export default routesClasses;