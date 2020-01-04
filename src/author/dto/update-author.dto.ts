import {IsDateString, IsString} from 'class-validator';

export class UpdateAuthorDto {
    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsDateString()
    readonly birthday: string;
}
