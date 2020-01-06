import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: 'string', required: true, example: 'HarryPotter', description: 'Book title' })
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    @ApiProperty({ type: 'string', required: true, example: 'here is valid IBAN', description: 'IBAN' })
    readonly iBan: string;

    // TODO date field;
    // @IsDateString()
    // readonly publishedAt: string;
}
