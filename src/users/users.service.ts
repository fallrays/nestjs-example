import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { encrypt, validator } from 'src/utils/bcrypt.util';
import { UsersEntity } from './entity/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository
    ) {}

    async create(user: CreateUserDto) {
        user.password = await encrypt(user.password);
        const newUser = this.usersRepository.create({...user});
        await this.usersRepository.save(newUser);

        return newUser;
    }

    async findOne(email: string): Promise<UsersEntity>
    {
        const result = await this.usersRepository.findOne({ where: { email } });

        if (!result) {
            throw new NotFoundException('${email} is not exist')
        }

        return result;
    } 

    async login(loginData: LoginUserDto) {
        const email = loginData.email;
        const password = loginData.password;

        const result = await this.findOne(email);
        console.log(result);

        if (!result) {
            throw new NotFoundException('${email} is not exist')
        }

        const passCheck = await validator(password, result.password);
        console.log(passCheck);
        if (passCheck === false) {
            throw new NotFoundException('Password Invalid')
        }

        // Token

    }
}
