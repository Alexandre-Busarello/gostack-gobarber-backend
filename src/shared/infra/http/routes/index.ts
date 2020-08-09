import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouters from '@modules/users/infra/http/routes/users.routes';
import sessionsRouters from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouters);
routes.use('/sessions', sessionsRouters);

export default routes;
