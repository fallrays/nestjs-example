import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardsRepository } from './boards.repository';
import { BoardsEntity } from './entity/boards.entity';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardsRepository)
        private boardsRepository: BoardsRepository
    ) {}

    async findAll(): Promise<BoardsEntity[]>
    {
        return await this.boardsRepository.find();
    }

    async findOne(id: number): Promise<BoardsEntity>
    {
        const result = await this.boardsRepository.findOne({ where: { id } });

        if (!result) {
            throw new NotFoundException('${id} is not exist')
        }

        return result;
    } 

    async create(board: CreateBoardDto) {
        const newBoard = this.boardsRepository.create({...board});
        await this.boardsRepository.save(newBoard);

        return newBoard;
    }

    async update(id: number, board: UpdateBoardDto) {
        const orgBoard = await this.boardsRepository.findOne({ where: { id } });

        let updateBoard = {...orgBoard, ...board};
        await this.boardsRepository.save(updateBoard);

        return updateBoard;
    }

    async delete(id: number): Promise<boolean>
    {
        const result = await this.boardsRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException('${id} is not exsit');
        } 

        return true;
    }
}
