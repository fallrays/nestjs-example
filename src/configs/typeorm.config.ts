import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BoardsEntity } from 'src/boards/entity/boards.entity';
import { TokensEntity } from 'src/users/entity/tokens.entity';
import { UsersEntity } from 'src/users/entity/users.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        BoardsEntity,
        UsersEntity,
        TokensEntity
    ],
    synchronize: true
}