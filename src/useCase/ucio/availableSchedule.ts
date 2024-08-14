import { SchedulingEntity } from "../../entity/scheduling";
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

export {
    CreateAvailableScheduleUseCaseRequest,
    CreateAvailableScheduleUseCaseResponse
}