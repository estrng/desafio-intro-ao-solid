import express, { Request, Response } from 'express';

import { usersRoutes } from './routes/users.routes';

const app = express();

app.use(express.json());

/* app.use('/', (request: Request, response: Response) => {
  return response.status(200).json({ message: 'All good!' });
});
 */

app.use('/users', usersRoutes);

export { app };
