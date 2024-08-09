import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SchedulingModel } from "./scheduling";
import { SchedulingEntity } from "../../../entity/scheduling";

@Entity({ schema: 'public', name: 'available_schedule' })
class AvailableScheduleModel {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    ID: string;

    @Column({ type: 'timestamp', name: 'date_time' })
    dateTime: Date;

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    constructor(
        ID: string,
        dateTime: Date,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.ID = ID;
        this.dateTime = dateTime;
        this.createdAt = createdAt;
         this.updatedAt = updatedAt;
    }
}

export { AvailableScheduleModel };

