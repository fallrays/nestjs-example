import { IsEmail, IsNotEmpty, IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';

export class LoginUserDto 
{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}