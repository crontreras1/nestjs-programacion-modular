import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/users.controller';
import { ServicesService } from './services/services.service';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';

@Module({
  controllers: [ControllersController, CustomersController],
  providers: [ServicesService, CustomersService]
})
export class UsersModule {}
