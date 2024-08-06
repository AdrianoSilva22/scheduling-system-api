import { SchedulingEntity } from "../../entity/scheduling";

class CreateAvailableScheduleUseCaseRequest {
    dateTime: Date;
    scheduling?: SchedulingEntity;

    constructor(dateTime: Date, scheduling: SchedulingEntity) {
        this.scheduling = scheduling
        this.dateTime = dateTime
    }
}

class CreateAvailableScheduleUseCaseResponse{
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}

export {
    CreateAvailableScheduleUseCaseRequest,
    CreateAvailableScheduleUseCaseResponse
}