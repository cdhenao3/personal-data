import { Repository } from 'typeorm';
import { CreatePersonalDataDto } from 'src/personal/dto/CreatePersonalData.dto';
import { PersonalData } from 'src/typeorm';
export declare class PersonalService {
    private readonly personalDataRepository;
    constructor(personalDataRepository: Repository<PersonalData>);
    getPersonalDataById(id: number): Promise<PersonalData>;
    createPersonalData(createPersonalDataDto: CreatePersonalDataDto): Promise<PersonalData>;
}
