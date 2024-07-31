import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'public', name: 'available_schedule' })
class AvailableScheduleModel {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    ID: string

    @Column({ type: 'varchar', name: 'date_time' })
    dateTime: Date

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt: Date

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date


    constructor(
        ID: string,
        dateTime: Date,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.ID = ID
        this.dateTime= dateTime
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export {
    AvailableScheduleModel
};

