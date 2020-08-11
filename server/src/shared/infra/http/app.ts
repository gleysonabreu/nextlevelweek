import "reflect-metadata";
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import '../../container';
import '../typeorm';
import routes from './routes';
import cors from 'cors';
import ApiError from "../../error/ApiError";
import { errors } from 'celebrate';


const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());
app.use((err: Error, request: Request, response: Response, _:NextFunction) => {
  if(err instanceof ApiError){
    return response.status(err.statusCode).json({
      status: 'Error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'Error',
    message: 'Server internal error!',
  })
})

export default app;