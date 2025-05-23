import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get()
    findAll(){
        return 'find all songs endpoint';
    }

    @Get(':id')
    findOne(){
        return 'fetch songs on the based id';
    }

    @Post()
    insertOne(){
        return 'insert a new song endpoint';
    }

    @Put(':id')
    update(){
        return 'update songs on the based id';
    }

    @Delete(':id')
    deleteOne(){
        return 'delete songs on the based id';
    }
}
