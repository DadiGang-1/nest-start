import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: String;
    
    @IsNotEmpty()
    @IsArray()
    //@IsString()
    readonly artists: String[];

    @IsDateString()
    @IsNotEmpty()
    readonly reseaseDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date;
}