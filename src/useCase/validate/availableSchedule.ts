import { CreateAvailableScheduleUseCaseRequest, ListAvailableScheduleByIdUseCaseRequest } from "../ucio/availableSchedule";

interface CreateAvailableScheduleUseCaseValidateInterface {
    validateAvailableSchedule(req: CreateAvailableScheduleUseCaseRequest): string | null
}

interface ListAvailableScheduleByIdUseCaseValidateInterface {
    validateAvailableScheduleById(req: ListAvailableScheduleByIdUseCaseRequest): string | null
}

interface UpdateAvailableScheduleByIdUseCaseValidateInterface {
    validateAvailableScheduleById(req: ListAvailableScheduleByIdUseCaseRequest): string | null
}

interface deleteAvailableScheduleByIdUseCaseValidateInterface {
    validateAvailableScheduleById(req: ListAvailableScheduleByIdUseCaseRequest): string | null
}

export {
    CreateAvailableScheduleUseCaseValidateInterface,
    ListAvailableScheduleByIdUseCaseValidateInterface,
    UpdateAvailableScheduleByIdUseCaseValidateInterface,
    deleteAvailableScheduleByIdUseCaseValidateInterface
}