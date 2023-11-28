/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors';
import express, { Application, Request, Response, NextFunction } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  const message = err.message || 'something went wrong';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
});

export default app;
