import {IsString, IsDateString} from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsDateString()
    readonly birthday: string;
}
