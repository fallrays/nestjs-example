import { Repository, DataSource } from 'typeorm';
import { TokensEntity } from './entity/tokens.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenRepository extends Repository<TokensEntity> {
    constructor(dataSource: DataSource) {
        super(TokensEntity, dataSource.createEntityManager());
    }
}