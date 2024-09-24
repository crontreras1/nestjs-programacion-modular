import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Controller('customers')
export class CustomersController {
    constructor (private customerService: CustomersService) {}

    @Get ()
    getAll () {
        return this.customerService.findAll()
    }

    @Get (':id')
    getOne (@Param('id', ParseIntPipe) id: number) {
        return this.customerService.findOne(id)
    }

    @Post()
    create (@Body() payload: CreateCustomerDto) {
        return this.customerService.create(payload)
    }

    @Put (':id')
    update (@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCustomerDto) {
        return this.customerService.update(id, payload)
    }

    @Delete (':id')
    remove (@Param('id', ParseIntPipe) id: number) {
        return this.customerService.remove(id)
    }
}
