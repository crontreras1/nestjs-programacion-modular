import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { createUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {
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
}
