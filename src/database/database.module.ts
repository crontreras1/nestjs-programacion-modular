import { Global, Module } from '@nestjs/common';

const API_KEY = '123456789'
const API_KEY_PROD = 'PROD-123456789'

@Global()
@Module({
    providers: [
        {
            provide: 'API_KEY',
            // useValue: API_KEY  -----> Forma estática
            useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY // Forma dinámica
        },
    ],
    exports: ['API_KEY']
})
export class DatabaseModule {}
