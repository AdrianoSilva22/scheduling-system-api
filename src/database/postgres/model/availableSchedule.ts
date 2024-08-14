import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../../entity/user";
import { UserModel } from "./user";

@Entity({ schema: 'public', name: 'available_schedule' })
class AvailableScheduleModel {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    ID: string;

    @Column({ type: 'timestamp', name: 'date_time' })
    dateTime: Date;

    @ManyToOne(() => UserModel, { nullable: false })
    professional: UserEntity

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    constructor(
        ID: string,
        dateTime: Date,
        professional: UserEntity,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.ID = ID;
        this.dateTime = dateTime;
        this.professional = professional
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export { AvailableScheduleModel };

