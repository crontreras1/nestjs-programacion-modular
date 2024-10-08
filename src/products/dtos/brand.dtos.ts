import { IsNotEmpty, IsString, IsUrl } from "class-validator"
import { PartialType } from "@nestjs/mapped-types"

export class CreateBrandDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    readonly image: string
}

export class UpdateBrandDto extends PartialType (CreateBrandDto) {}