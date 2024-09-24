import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@Injectable()
export class BrandsService {
    private counterId: number = 1
    private brands: Brand[] = [
        {
            id: 1,
            name: 'Brand 1',
            image: 'https://myimage.com/img.jpeg'
        }
    ]

    getAll () {
        return this.brands
    }

    getOne (id: number) {
        const brand = this.brands.find(item => item.id === id)

        if (!brand) {
            throw new NotFoundException(`${id} no encontrado`)
        }

        return brand
    }

    create (data: CreateBrandDto) {
        this.counterId = this.counterId + 1

        const newBrand = {
            id: this.counterId,
            ...data
        }

        this.brands.push(newBrand)

        return newBrand
    }

    update (id: number, changes: UpdateBrandDto) {
        const brand = this.getOne(id)

        const index = this.brands.findIndex(item => item.id === id)

        this.brands[index] = {
            ...brand,
            ...changes
        }

        return this.brands[index]
    }

    remove (id: number) {
        const index = this.brands.findIndex(item => item.id === id)

        if (index === -1) {
            throw new NotFoundException(`${id} no encontrado`)
        }

        this.brands.splice(index, 1)

        return true
    }
}
