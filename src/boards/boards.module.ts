import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsRepository } from './boards.repository';
import { BoardsEntity } from './entity/boards.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            BoardsEntity
        ])
    ],
    controllers: [BoardsController],
    providers: [
        BoardsService, 
        BoardsRepository
    ]
})

export class BoardsModule {}
