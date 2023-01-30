import { CreateAcademicDataDto } from 'src/personal/dto/CreateAcademicData.dto';
import { CreatePersonalDataDto } from 'src/personal/dto/CreatePersonalData.dto';
import { AcademicService } from 'src/personal/services/academic/academic.service';
import { PersonalService } from 'src/personal/services/personal/personal.service';
export declare class PersonalController {
    private readonly personalDataService;
    private readonly academicDataService;
    constructor(personalDataService: PersonalService, academicDataService: AcademicService);
    getPersonalDataList(): Promise<import("../../../typeorm").AcademicData[]>;
    getPersonalDataById(id: number): Promise<import("../../../typeorm").PersonalData>;
    createPersonalData(createPersonalDataDto: CreatePersonalDataDto): Promise<import("../../../typeorm").PersonalData>;
    createAcademicData(personalId: number, createAcademicDataDto: CreateAcademicDataDto): Promise<import("../../../typeorm").AcademicData>;
}
