import { Injectable, NotFoundException } from "@nestjs/common";
import { Category } from "../entities/category.entity";
import { CreateCategoryDto, UpdateCategoryDto } from "../dtos/category.dtos";

@Injectable()
export class CategoriesService {
    private counterId: number = 1
    private categories: Category[] = [
        {
            id: 1,
            name: 'Category 1'
        }
    ]

    getAll () {
        return this.categories
    }

    getOne (id: number) {
        const category = this.categories.find(item => item.id === id)

        if (!category) {
            throw new NotFoundException(`${id} no encontrado`)
        }

        return category
    }

    create (data: CreateCategoryDto) {
        this.counterId = this.counterId + 1

        const newCategory = {
            id: this.counterId,
            ...data
        }

        this.categories.push(newCategory)

        return newCategory
    }

    update (id: number, changes: UpdateCategoryDto) {
        const category = this.getOne(id)

        const index = this.categories.findIndex(item => item.id === id)

        this.categories[index] = {
            ...category,
            ...changes
        }

        return this.categories[index]
    }

    remove (id: number) {
        const index = this.categories.findIndex(item => item.id === id)

        if (index === -1) {
            throw new NotFoundException(`${id} no encontrado`)
        }

        this.categories.splice(index, 1)

        return true
    }
}