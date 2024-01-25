import { Repository, DataSource } from 'typeorm';
import { UsersEntity } from './entity/users.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {
    constructor(dataSource: DataSource) {
        super(UsersEntity, dataSource.createEntityManager());
    }
}