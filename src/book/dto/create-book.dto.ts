import {IsString, IsDateString, MaxLength} from 'class-validator';

export class CreateBookDto {
    @IsString()
    readonly title: string;

    @IsString()
    @MaxLength(32)
    readonly iban: string;

    @IsDateString()
    readonly publishedAt: string;
}
