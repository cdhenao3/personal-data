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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicData = void 0;
const typeorm_1 = require("typeorm");
const PersonalData_1 = require("./PersonalData");
let AcademicData = class AcademicData {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AcademicData.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], AcademicData.prototype, "educationCenter", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], AcademicData.prototype, "educationLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], AcademicData.prototype, "programName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], AcademicData.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], AcademicData.prototype, "initialDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], AcademicData.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PersonalData_1.PersonalData, (PersonalData) => PersonalData.id, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'personalId' }),
    __metadata("design:type", PersonalData_1.PersonalData)
], AcademicData.prototype, "personalData", void 0);
AcademicData = __decorate([
    (0, typeorm_1.Entity)()
], AcademicData);
exports.AcademicData = AcademicData;
//# sourceMappingURL=AcademicData.js.map