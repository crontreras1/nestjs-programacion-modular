import { Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriesService } from "../services/categories.service";
import { CreateCategoryDto } from "../dtos/category.dtos";

@Controller('categories')
export class CategoriesController {
    constructor (private categoriesService: CategoriesService) {}

    @Get ()
    getAll () {
        return this.categoriesService.getAll
    }

    @Get (':id')
    getOne (@Param('id', ParseArrayPipe) id: number) {
        return this.categoriesService.getOne(id)
    }

    @Post () 
    create (@Body() payload: CreateCategoryDto) {
        return this.categoriesService.create(payload)
    }

    @Put (':id')
    update (@Param('id', ParseIntPipe) id: number, @Body() payload: CreateCategoryDto) {
        return this.categoriesService.update(id, payload)
    }

    @Delete (':id')
    remove (@Param('id', ParseIntPipe) id: number) {
        return this.categoriesService.remove(id)
    }
}