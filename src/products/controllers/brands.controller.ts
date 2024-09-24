import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BrandsService } from '../services/brands.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@Controller('brands')
export class BrandsController {
    constructor (private brandServide: BrandsService) {}

    @Get ()
    getAll () {
        return this.brandServide.getAll()
    }

    @Get (':id') 
    getOne (@Param('id', ParseIntPipe) id: number) {
        return this.brandServide.getOne(id)
    }

    @Post ()
    create (@Body() payload: CreateBrandDto) {
        return this.brandServide.create(payload)
    }

    @Put (':id')
    update (@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrandDto) {
        return this.brandServide.update(id, payload)
    }

    @Delete (':id')
    remove (@Param('id', ParseIntPipe) id: number) {
        return this.brandServide.remove(id)
    }
}
