import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthorDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ type: 'string', required: false, example: 'Igor', description: 'First name of the Author' })
    readonly firstName?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ type: 'string', required: false, example: 'Reshniov', description: 'Last name of the Author' })
    readonly lastName?: string;

    @IsDateString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ type: 'Date', required: false, example: '2020-01-03T00:00:00.001Z', description: 'Birthday of the Author' })
    readonly birthday?: Date;
}
