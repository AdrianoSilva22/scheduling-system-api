import { CreateAvailableScheduleUseCaseRequest, ListAvailableScheduleByIdUseCaseRequest } from "../ucio/availableSchedule";

interface CreateAvailableScheduleUseCaseValidateInterface {
    validateAvailableSchedule(req: CreateAvailableScheduleUseCaseRequest): string | null
}

interface ListAvailableScheduleByIdUseCaseValidateInterface {
    validateAvailableScheduleById(req: ListAvailableScheduleByIdUseCaseRequest): string | null
  }

export {
    CreateAvailableScheduleUseCaseValidateInterface,
    ListAvailableScheduleByIdUseCaseValidateInterface
}