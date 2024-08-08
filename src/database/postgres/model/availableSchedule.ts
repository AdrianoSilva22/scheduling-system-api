import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SchedulingModel } from "./scheduling";

@Entity({ schema: 'public', name: 'available_schedule' })
class AvailableScheduleModel {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    ID: string;

    @Column({ type: 'timestamp', name: 'date_time' })
    dateTime: Date;

    @OneToOne(() => SchedulingModel, scheduling => scheduling.horario)
    scheduling?: SchedulingModel | null;

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    constructor(
        ID: string,
        dateTime: Date,
        scheduling: SchedulingModel | null,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.ID = ID;
        this.dateTime = dateTime;
        this.scheduling = scheduling;
        this.createdAt = createdAt;
         this.updatedAt = updatedAt;
    }
}

export { AvailableScheduleModel };

