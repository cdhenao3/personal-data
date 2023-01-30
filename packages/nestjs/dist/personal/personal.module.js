"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const personal_controller_1 = require("./controllers/personal/personal.controller");
const personal_service_1 = require("./services/personal/personal.service");
const academic_service_1 = require("./services/academic/academic.service");
let PersonalModule = class PersonalModule {
};
PersonalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([typeorm_2.PersonalData, typeorm_2.AcademicData])
        ],
        controllers: [personal_controller_1.PersonalController],
        providers: [{
                provide: 'PERSONAL_DATA_SERVICE',
                useClass: personal_service_1.PersonalService,
            },
            {
                provide: 'ACADEMIC_DATA_SERVICE',
                useClass: academic_service_1.AcademicService
            }]
    })
], PersonalModule);
exports.PersonalModule = PersonalModule;
//# sourceMappingURL=personal.module.js.map