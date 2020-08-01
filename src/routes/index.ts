import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouters from './users.routes';
import sessionsRouters from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouters);
routes.use('/sessions', sessionsRouters);

export default routes;
