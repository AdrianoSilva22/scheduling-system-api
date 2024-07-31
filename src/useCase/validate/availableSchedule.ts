import { CreateAvailableScheduleUseCaseRequest } from "../ucio/availableSchedule";

interface CreateAvailableScheduleUseCaseValidateInterface {
    validateAvailableSchedule(req: CreateAvailableScheduleUseCaseRequest): string | null
}

export {
    CreateAvailableScheduleUseCaseValidateInterface
}