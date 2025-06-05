import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService) {}

    @Post()
    insertOne(@Body() createSongDTO: CreateSongDTO) {
        return this.songsService.insertOne(createSongDTO);
    }

    @Get()
    findAll(){
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne(){
        return 'fetch songs on the based id';
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
