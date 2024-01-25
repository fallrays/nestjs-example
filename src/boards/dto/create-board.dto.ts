import { IsEmail, IsNotEmpty, IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateBoardDto 
{
    @IsOptional()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    name: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsOptional()
    @IsString()
    attach: string;
}