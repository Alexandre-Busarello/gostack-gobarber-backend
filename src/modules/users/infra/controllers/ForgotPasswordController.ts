import { Response, Request } from 'express';
import { container } from 'tsyringe';

import RecoverPasswordEmailService from '@modules/users/services/RecoverPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const recoverPassword = container.resolve(RecoverPasswordEmailService);

    await recoverPassword.execute({
      email,
    });

    return response.status(204).json();
  }
}
