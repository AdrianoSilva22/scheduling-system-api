import { AvailableScheduleEntity } from "../../entity/availableSchedule";
import { UserEntity } from "../../entity/user";

class CreateAvailableScheduleUseCaseRequest {
    dateTime: Date;
    professional: UserEntity;

    constructor(dateTime: Date, professional: UserEntity) {
        this.professional = professional
        this.dateTime = dateTime
    }
}

class CreateAvailableScheduleUseCaseResponse{
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}

class ListAvailableSchedulesUseCaseResponse {
    availableSchedules: AvailableScheduleEntity[]
    error?: string

    constructor(availableSchedules: AvailableScheduleEntity[], error?: string) {
        this.availableSchedules = availableSchedules
        this.error = error
    }
}

class ListAvailableScheduleByIdUseCaseRequest {
    ID: string

    constructor(ID: string) {
        this.ID = ID
    }
}
class ListAvailableScheduleByIdUseCaseResponse {
    availableSchedule?: AvailableScheduleEntity
    error?: string

    constructor(availableSchedule?: AvailableScheduleEntity | string, error?: string) {
        if (typeof availableSchedule === 'string') {
            this.error = availableSchedule
        } else {
            this.availableSchedule = availableSchedule
            this.error = error
        }
    }
}

class UpdateAvailableScheduleByIdUseCaseRequest {
    ID: string
    dateTime?: Date
    professional?: AvailableScheduleEntity
    updatedAt?: Date

    constructor(ID: string, dateTime?: Date, professional?: AvailableScheduleEntity, updatedAt?:Date,) {
        this.ID = ID
        this.dateTime = dateTime
        this.professional = professional
        this.updatedAt = updatedAt
    }
}

class UpdateAvailableScheduleByIdUseCaseResponse {
    availableSchedule?: AvailableScheduleEntity
    error?: string

    constructor(availableSchedule?: AvailableScheduleEntity | string, error?: string) {
        if (typeof availableSchedule === 'string') {
            this.error = availableSchedule
        } else {
            this.availableSchedule = availableSchedule
            this.error = error
        }
    }
}

class DeleteAvailableScheduleByIdUseCaseRequest {
    ID: string

    constructor(ID: string) {
        this.ID = ID
    }
}
class DeleteAvailableScheduleByIdUseCaseResponse {
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}

export {
    CreateAvailableScheduleUseCaseRequest,
    CreateAvailableScheduleUseCaseResponse,
    ListAvailableSchedulesUseCaseResponse,
    ListAvailableScheduleByIdUseCaseRequest,
    ListAvailableScheduleByIdUseCaseResponse,
    UpdateAvailableScheduleByIdUseCaseRequest,
    UpdateAvailableScheduleByIdUseCaseResponse,
    DeleteAvailableScheduleByIdUseCaseRequest,
    DeleteAvailableScheduleByIdUseCaseResponse
}