import { PartialType } from "@nestjs/mapped-types"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string

    @IsString()
    readonly lastname: string

    @IsString()
    @IsNotEmpty()
    readonly phone: string
}

export class UpdateCustomerDto extends PartialType (CreateCustomerDto) {}