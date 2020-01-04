import {IsDateString, IsString, MaxLength} from 'class-validator';

export class UpdateBookDto {
    @IsString()
    readonly title: string;

    @IsString()
    @MaxLength(32)
    readonly iBan: string;

    @IsDateString()
    readonly publishedAt: string;
}
