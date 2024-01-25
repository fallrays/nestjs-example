import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersEntity } from './entity/users.entity';
import { TokensEntity } from './entity/tokens.entity';
import { UsersRepository } from './users.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UsersEntity,
            TokensEntity
        ]),
        JwtModule.register({
            secret: '1212',
            signOptions: { expiresIn: '1h' }
        })
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        UsersRepository
    ]
})
export class UsersModule {}
