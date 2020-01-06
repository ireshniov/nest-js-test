import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthorDto {
    @IsString()
    @ApiProperty({ type: 'string', required: true, example: 'Igor', description: 'First name of the Author' })
    readonly firstName: string;

    @IsString()
    @ApiProperty({ type: 'string', required: true, example: 'Reshniov', description: 'Last name of the Author' })
    readonly lastName: string;

    // TODO date field;
    // @IsDateString()
    // readonly birthday: string;
}
