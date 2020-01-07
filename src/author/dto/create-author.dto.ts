import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: 'string', required: true, example: 'Igor', description: 'First name of the Author' })
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: 'string', required: true, example: 'Reshniov', description: 'Last name of the Author' })
    readonly lastName: string;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({ type: 'Date', required: false, example: '2020-01-03T00:00:00.001Z', description: 'Birthday of the Author' })
    readonly birthday: Date;
}
