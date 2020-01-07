import { IsString, MaxLength, Length, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: 'string', required: true, example: 'HarryPotter', description: 'Book title' })
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    @Length(24, 24)
    @ApiProperty({ type: 'string', required: true, example: '5e11539a63effe16ddd558b7', description: 'Author ID' })
    readonly authorId: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    @ApiProperty({ type: 'string', required: true, example: 'here is valid IBAN', description: 'Book IBAN' })
    readonly iBan: string;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({ type: 'string', required: true, example: '2020-01-03T00:00:00.001Z', description: 'Book published at' })
    readonly publishedAt: Date;
}
