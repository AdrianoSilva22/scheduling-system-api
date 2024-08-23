import { CreateSchedulingUseCaseRequest, ListSchedulingByIdUseCaseRequest } from "../ucio/scheduling"

interface CreateSchedulingUseCaseValidateInterface {
    validateScheduling(req: CreateSchedulingUseCaseRequest): string | null
}

interface ListSchedulingByIdUseCaseValidateInterface {
    validateSchedulingById(req: ListSchedulingByIdUseCaseRequest): string | null
  }

export {
    CreateSchedulingUseCaseValidateInterface,
    ListSchedulingByIdUseCaseValidateInterface
}