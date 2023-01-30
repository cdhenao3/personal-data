import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicData, PersonalData } from 'src/typeorm';
import { PersonalController } from './controllers/personal/personal.controller';
import { PersonalService } from './services/personal/personal.service';
import { AcademicService } from './services/academic/academic.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([PersonalData, AcademicData])
    ],
    controllers: [PersonalController],
    providers: [{
        provide: 'PERSONAL_DATA_SERVICE',
        useClass: PersonalService,
    },
    {
        provide: 'ACADEMIC_DATA_SERVICE',
        useClass: AcademicService
    }]
})
export class PersonalModule { }
