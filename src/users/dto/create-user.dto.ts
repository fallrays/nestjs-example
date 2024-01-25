import { IsEmail, IsNotEmpty, IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateUserDto 
{
    @IsOptional()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}