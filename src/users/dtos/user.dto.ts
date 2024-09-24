import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class createUserDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string
    
    @IsString()
    @IsNotEmpty()
    @Length(6)
    readonly password: string

    @IsString()
    @IsNotEmpty()
    readonly role: string
}

export class UpdateUserDto extends PartialType (createUserDto) {}