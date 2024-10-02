import { Inject, Injectable } from '@nestjs/common';
import { privateDecrypt } from 'crypto';

@Injectable()
export class AppService {
  constructor (
    @Inject('API_KEY') private apiKey: string, 
    @Inject('TASKS') private tasks: any
  ) {}
  getHello(): string {
    // console.log(this.tasks)
    return `Hello World! ${ this.apiKey }`;
  }
}
