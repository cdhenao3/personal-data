import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { PersonalData } from "./PersonalData";

@Entity()
export class AcademicData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    educationCenter: string;

    @Column({
        nullable: false
    })
    educationLevel: string;

    @Column({
        nullable: false
    })
    programName: string;

    @Column({
        nullable: false
    })
    city: string;

    @Column({
        nullable: false
    })
    initialDate: string;

    @Column({
        nullable: true
    })
    endDate: string;

    @ManyToOne(() => PersonalData, (PersonalData) => PersonalData.id, { cascade: true })
    @JoinColumn({ name: 'personalId' })
    personalData: PersonalData;
}