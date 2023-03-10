import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PersonalData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    firstName: string;

    @Column({
        nullable: false
    })
    lastName: string;

    @Column({
        nullable: false
    })
    email: string;

    @Column({
        nullable: false
    })
    phone: string;

    @Column({
        nullable: false
    })
    city: string;

    @Column({
        nullable: true
    })
    address: string;
}