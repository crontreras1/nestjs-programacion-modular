import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { createUserDto, UpdateUserDto } from '../dtos/user.dto';
import { Order } from '../entities/order.entity';
import { ProductsService } from 'src/products/services/products.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
    constructor(
        private productsService: ProductsService,
        private configService: ConfigService
    ) {}

    private counterId = 1
    private users: User[] = [
        {
            id: 1,
            email: 'correo@mail.com',
            password: '12345',
            role: 'admin'
        }
    ]

    findAll () {
        const apiKey = this.configService.get('API_KEY')
        const dbName = this.configService.get('DATABASE_NAME')
        console.log(apiKey, dbName)
        return this.users
    }

    findOne (id: number) {
        const user = this.users.find(item => item.id === id)

        if (!user) {
            throw new NotFoundException(`${id} no encontrado`)
        }

        return user
    }

    create (data: createUserDto) {
        this.counterId = this.counterId + 1

        const newUser = {
            id: this.counterId,
            ...data
        }

        this.users.push(newUser)

        return newUser
    }

    update (id: number, changes: UpdateUserDto) {
        const user = this.findOne(id)

        const index = this.users.findIndex(item => item.id === id)

        this.users[index] = {
            ...user,
            ...changes
        }

        return this.users[index]
    }

    remove (id: number) {
        const index = this.users.findIndex( item => item.id === id)

        if (index === -1) {
            throw new NotFoundException(`${id} no encontrado`)
        }

        this.users.splice(index, 1)

        return true
    }

    getOrtderByUser (id: number): Order {
        const user = this.findOne(id)

        return {
            date: new Date(),
            user,
            product: this.productsService.findAll()
        }
    }
}
