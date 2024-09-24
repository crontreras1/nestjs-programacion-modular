import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/services.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { createUserDto, UpdateUserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {
    constructor (private usersService: UsersService) {}

    @Get ()
    getdAll () {
        return this.usersService.findAll()
    }

    @Get (':id')
    getOne (@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    @Post ()
    create (@Body() payload: createUserDto) {
        return this.usersService.create(payload)
    }

    @Put (':id') 
    update (@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUserDto) {
        return this.usersService.update(id, payload)
    }

    @Delete (':id')
    remove (@Param('id', ParseIntPipe) id: number) {
        return this.usersService.remove(id)
    }
}
