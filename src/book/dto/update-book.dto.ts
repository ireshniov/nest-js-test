import { IsDateString, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
    @IsString()
    @IsOptional()
    @ApiProperty({ type: 'string', required: true, example: 'HarryPotter', description: 'Book title' })
    readonly title?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @MaxLength(32)
    @ApiProperty({ type: 'string', required: true, example: 'here is valid IBAN', description: 'Book IBAN' })
    readonly iBan?: string;

    @IsDateString()
    @IsOptional()
    @IsNotEmpty()
    @ApiProperty({ type: 'Date', required: true, example: '2020-01-03T00:00:00.001Z', description: 'Book published at' })
    readonly publishedAt?: Date;
}
