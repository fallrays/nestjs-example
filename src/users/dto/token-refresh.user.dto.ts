import { IsEmail, IsNotEmpty, IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';

export class TokenRefreshUserDto 
{
    @IsNotEmpty()
    @IsString()
    accessToken: string;

    @IsNotEmpty()
    @IsString()
    refreshToken: string;
}