import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardsEntity } from './entity/boards.entity';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get()
    getBoards() {
        return this.boardsService.findAll();
    }

    @Get(':id')
    getBoard(@Param('id') id: number) {
        return this.boardsService.findOne(id);
    }

    @Post()
    createBoards(@Body() createData: CreateBoardDto) {
        return this.boardsService.create(createData);
    }

    @Put(':id')
    updateBoards(@Param('id') id: number, @Body() updateData: UpdateBoardDto) {
        return this.boardsService.update(id, updateData);
    }

    @Delete(':id')
    deleteBoards(@Param('id') id: number) {
        return this.boardsService.delete(id);
    }
}
