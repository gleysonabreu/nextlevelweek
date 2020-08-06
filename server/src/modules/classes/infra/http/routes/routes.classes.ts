import { Router } from 'express';
import ClassesController from '../controllers/ClassesController';

const routesClasses = Router();
const classesController = new ClassesController();

routesClasses.post('/', classesController.create);

export default routesClasses;