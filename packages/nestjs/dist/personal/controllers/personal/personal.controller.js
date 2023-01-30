"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalController = void 0;
const common_1 = require("@nestjs/common");
const CreateAcademicData_dto_1 = require("../../dto/CreateAcademicData.dto");
const CreatePersonalData_dto_1 = require("../../dto/CreatePersonalData.dto");
const academic_service_1 = require("../../services/academic/academic.service");
const personal_service_1 = require("../../services/personal/personal.service");
let PersonalController = class PersonalController {
    constructor(personalDataService, academicDataService) {
        this.personalDataService = personalDataService;
        this.academicDataService = academicDataService;
    }
    getPersonalDataList() {
        return this.academicDataService.getPersonalAcademicDataList();
    }
    getPersonalDataById(id) {
        return this.personalDataService.getPersonalDataById(id);
    }
    createPersonalData(createPersonalDataDto) {
        return this.personalDataService.createPersonalData(createPersonalDataDto);
    }
    createAcademicData(personalId, createAcademicDataDto) {
        return this.academicDataService.createAcademicData(personalId, createAcademicDataDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonalController.prototype, "getPersonalDataList", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PersonalController.prototype, "getPersonalDataById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePersonalData_dto_1.CreatePersonalDataDto]),
    __metadata("design:returntype", void 0)
], PersonalController.prototype, "createPersonalData", null);
__decorate([
    (0, common_1.Post)(':id/academic'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CreateAcademicData_dto_1.CreateAcademicDataDto]),
    __metadata("design:returntype", void 0)
], PersonalController.prototype, "createAcademicData", null);
PersonalController = __decorate([
    (0, common_1.Controller)('personal'),
    __param(0, (0, common_1.Inject)('PERSONAL_DATA_SERVICE')),
    __param(1, (0, common_1.Inject)('ACADEMIC_DATA_SERVICE')),
    __metadata("design:paramtypes", [personal_service_1.PersonalService,
        academic_service_1.AcademicService])
], PersonalController);
exports.PersonalController = PersonalController;
//# sourceMappingURL=personal.controller.js.map