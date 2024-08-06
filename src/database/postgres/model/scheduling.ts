import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { UserEntity } from "../../../entity/user";
import { AvailableScheduleEntity } from "../../../entity/availableSchedule";

@Entity({ schema: 'public', name: 'scheduling' })
class SchedulingModel {
    @PrimaryGeneratedColumn('uuid', {name: 'id'})
    ID: string

    @ManyToOne(type => UserEntity, user => user.scheduling)
    clientId: string

    @OneToOne(type => AvailableScheduleEntity, avaibleSchedule => avaibleSchedule.scheduling)
    horarioId: string

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    constructor(ID: string, clientId: string, horarioId: string, createdAt: Date, updatedAt: Date) {
        this.ID = ID
        this.clientId = clientId
        this.horarioId = horarioId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export {
    SchedulingModel
}