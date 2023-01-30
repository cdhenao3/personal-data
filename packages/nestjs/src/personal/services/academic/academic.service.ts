import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AcademicData } from 'src/typeorm';
import { CreateAcademicDataDto } from 'src/personal/dto/CreateAcademicData.dto';

@Injectable()
export class AcademicService {
    constructor(
        @InjectRepository(AcademicData) private readonly academicDataRepository: Repository<AcademicData>
    ) { }

    getPersonalAcademicDataList() {
        return this.academicDataRepository.find({
            relations: {
                personalData: true
            }
        })
    }

    async createAcademicData(id: number, createAcademicDataRepository: CreateAcademicDataDto) {
        const academicData = this.academicDataRepository.create({ ...createAcademicDataRepository, personalData: { id } })

        return this.academicDataRepository.save(academicData)
    }
}
