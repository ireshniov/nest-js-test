import {IsString, IsDateString, MaxLength, MinLength, Length} from 'class-validator';

export class CreateBookDto {
    @IsString()
    readonly title: string;

    @IsString()
    @Length(24, 24)
    readonly authorId: string;

    @IsString()
    @MaxLength(32)
    readonly iBan: string;

    @IsDateString()
    readonly publishedAt: string;
}
