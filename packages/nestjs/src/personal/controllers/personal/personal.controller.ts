import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';

import { CreateAcademicDataDto } from 'src/personal/dto/CreateAcademicData.dto';
import { CreatePersonalDataDto } from 'src/personal/dto/CreatePersonalData.dto';
import { AcademicService } from 'src/personal/services/academic/academic.service';
import { PersonalService } from 'src/personal/services/personal/personal.service';

@Controller('personal')
export class PersonalController {
    constructor(
        @Inject('PERSONAL_DATA_SERVICE') private readonly personalDataService: PersonalService,
        @Inject('ACADEMIC_DATA_SERVICE') private readonly academicDataService: AcademicService
    ) { }

    @Get()
    getPersonalDataList() {
        return this.academicDataService.getPersonalAcademicDataList()
    }

    @Get(':id')
    getPersonalDataById(@Param('id', ParseIntPipe) id: number) {
        return this.personalDataService.getPersonalDataById(id)
    }

    @Post()
    createPersonalData(@Body() createPersonalDataDto: CreatePersonalDataDto) {
        return this.personalDataService.createPersonalData(createPersonalDataDto)
    }

    @Post(':id/academic')
    createAcademicData(@Param('id', ParseIntPipe) personalId: number, @Body() createAcademicDataDto: CreateAcademicDataDto) {
        return this.academicDataService.createAcademicData(personalId, createAcademicDataDto)
    }

}
