import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import AppError from '@shared/errors/AppError';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '124344334',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('124344334');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const date = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date,
      provider_id: '124344334',
    });

    await expect(
      createAppointment.execute({
        date,
        provider_id: '124344334',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
