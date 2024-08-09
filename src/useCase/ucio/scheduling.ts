import { AvailableScheduleEntity } from "../../entity/availableSchedule"
import { UserEntity } from "../../entity/user"

class CreateSchedulingUseCaseRequest {
    client: UserEntity
    horarioId: AvailableScheduleEntity

    constructor(client: UserEntity, horarioId: AvailableScheduleEntity) {
        this.client = client
        this.horarioId = horarioId
    }
}

class CreateSchedulingUseCaseResponse {
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}

export {
    CreateSchedulingUseCaseRequest,
    CreateSchedulingUseCaseResponse
}