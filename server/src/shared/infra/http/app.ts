import "reflect-metadata";
import express from 'express';
import '../../container';
import '../typeorm';
import routes from './routes';
import cors from 'cors';


const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

export default app;