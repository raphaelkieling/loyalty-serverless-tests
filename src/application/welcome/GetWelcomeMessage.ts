import { Injectable } from '@nestjs/common';
import { GetWelcomeMessage } from '../../domain/welcome/GetWelcomeMessage';

@Injectable()
export class GetWelcomeMessageService implements GetWelcomeMessage {
  handle(): string {
    return 'Welcome message from the service';
  }
}
