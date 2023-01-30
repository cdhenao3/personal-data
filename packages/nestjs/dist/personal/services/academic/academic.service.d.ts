import { Repository } from 'typeorm';
import { AcademicData } from 'src/typeorm';
import { CreateAcademicDataDto } from 'src/personal/dto/CreateAcademicData.dto';
export declare class AcademicService {
    private readonly academicDataRepository;
    constructor(academicDataRepository: Repository<AcademicData>);
    getPersonalAcademicDataList(): Promise<AcademicData[]>;
    createAcademicData(id: number, createAcademicDataRepository: CreateAcademicDataDto): Promise<AcademicData>;
}
