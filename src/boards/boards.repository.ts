import { Repository, DataSource } from 'typeorm';
import { BoardsEntity } from './entity/boards.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsRepository extends Repository<BoardsEntity> {
    constructor(dataSource: DataSource) {
        super(BoardsEntity, dataSource.createEntityManager());
    }
}