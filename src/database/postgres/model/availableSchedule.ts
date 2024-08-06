import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SchedulingEntity } from "../../../entity/scheduling";

@Entity({ schema: 'public', name: 'available_schedule' })
class AvailableScheduleModel {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    ID: string

    @Column({ type: 'varchar', name: 'date_time' })
    dateTime: Date

    @OneToOne(type => SchedulingEntity, scheduling => scheduling.horarioId)
    scheduling?: SchedulingEntity | null

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt: Date

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date


    constructor(
        ID: string,
        dateTime: Date,
        scheduling: SchedulingEntity,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.ID = ID
        this.dateTime = dateTime
        this.scheduling = scheduling
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export {
    AvailableScheduleModel
};

