import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePersonalDataDto } from 'src/personal/dto/CreatePersonalData.dto';
import { AcademicData, PersonalData } from 'src/typeorm';

@Injectable()
export class PersonalService {
    constructor(
        @InjectRepository(PersonalData) private readonly personalDataRepository: Repository<PersonalData>
    ) { }

    getPersonalDataById(id: number) {
        return this.personalDataRepository.findOneBy({ id })
    }

    async createPersonalData(createPersonalDataDto: CreatePersonalDataDto) {
        const personalData = this.personalDataRepository.create(createPersonalDataDto)

        return this.personalDataRepository.save(personalData)
    }
}
