class SchedulingEntity {
    ID: string
    clientId: string
    horarioId: string
    createdAt: Date
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
    SchedulingEntity
}