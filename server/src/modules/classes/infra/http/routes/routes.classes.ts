import { Router } from 'express';
import ClassesController from '../controllers/ClassesController';

const routesClasses = Router();
const classesController = new ClassesController();

routesClasses.post('/', classesController.create);
routesClasses.get('/', classesController.index);

export default routesClasses;