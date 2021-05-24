import { Module } from '@nestjs/common';
import { ReceivePointsService } from './application/cashback/ReceivePoints';
import { GetWelcomeMessageService } from './application/welcome/GetWelcomeMessage';
import { MemoryUserRepository } from './infra/user/MemoryUserRepository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'UserRepository',
      useClass: MemoryUserRepository,
    },
    {
      provide: 'GetWelcomeMessageService',
      useClass: GetWelcomeMessageService,
    },
    {
      provide: 'ReceivePointsService',
      useClass: ReceivePointsService,
    },
  ],
})
export class AppModule {}
