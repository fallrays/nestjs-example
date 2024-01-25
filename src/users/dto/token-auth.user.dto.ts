import { IsEmail, IsNotEmpty, IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';

export class TokenAuthUserDto 
{
    @IsNotEmpty()
    @IsString()
    accessToken: string;
}