import { IsNotEmpty, MinLength } from "class-validator";

export class CreateAcademicDataDto {
    @IsNotEmpty()
    @MinLength(4)
    educationCenter: string;

    @IsNotEmpty()
    @MinLength(4)
    educationLevel: string;

    @IsNotEmpty()
    @MinLength(4)
    programName: string;

    @IsNotEmpty()
    @MinLength(4)
    city: string;

    @IsNotEmpty()
    @MinLength(4)
    initialDate: string;

    endDate: string;
}