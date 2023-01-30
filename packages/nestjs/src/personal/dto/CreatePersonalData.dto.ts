import { IsNotEmpty, MinLength } from "class-validator";

export class CreatePersonalDataDto {
    @IsNotEmpty()
    @MinLength(4)
    name: string;

    @IsNotEmpty()
    @MinLength(4)
    firstName: string;

    @IsNotEmpty()
    @MinLength(4)
    lastName: string;

    @IsNotEmpty()
    @MinLength(4)
    email: string;

    @IsNotEmpty()
    @MinLength(4)
    phone: string;

    @IsNotEmpty()
    @MinLength(4)
    city: string;

    address: string;
}