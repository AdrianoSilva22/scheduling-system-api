import { AvailableScheduleEntity } from "./availableSchedule"
import { UserEntity } from "./user"

class SchedulingEntity {
    ID: string
    client: UserEntity
    horario: AvailableScheduleEntity
    createdAt: Date
    updatedAt: Date

    constructor(ID: string, client: UserEntity, horario: AvailableScheduleEntity, createdAt: Date, updatedAt: Date) {
        this.ID = ID
        this.client = client
        this.horario = horario
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
export {
    SchedulingEntity
}