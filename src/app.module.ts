import { HttpModule, HttpService, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module'

const API_KEY = '123456789'
const API_KEY_PROD = 'PROD-123456789'

@Module({
  imports: [HttpModule, UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      // useValue: API_KEY  -----> Forma estática
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY // Forma dinámica
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise()

        return tasks.data
      }, 
      inject: [HttpService]
    }
  ],
})
export class AppModule {}
