import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService) {}

    @Get()
    findAll(){
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne(){
        return 'fetch songs on the based id';
    }

    @Post()
    insertOne(){
        return this.songsService.insertOne('new song');
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
