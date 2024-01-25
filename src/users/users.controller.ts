import { Controller, Body, Header, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { TokenAuthUserDto } from './dto/token-auth.user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('login')
    token(@Body() loginData: LoginUserDto) {
        return this.usersService.login(loginData);
    }

    @Get('token/auth')
    tokenAuth(token: TokenAuthUserDto) {

    }

    @Post('token/refresh')
    refreshToken() {

    }

    @Get(':email')
    getBoard(@Param('email') email: string) {
        return this.usersService.findOne(email);
    }

    @Post()
    createBoards(@Body() createData: CreateUserDto) {
        return this.usersService.create(createData);
    }
}
