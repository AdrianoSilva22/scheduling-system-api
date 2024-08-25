import { CreateSchedulingUseCaseRequest, ListSchedulingByIdUseCaseRequest } from "../ucio/scheduling"

interface CreateSchedulingUseCaseValidateInterface {
  validateScheduling(req: CreateSchedulingUseCaseRequest): string | null
}

interface ListSchedulingByIdUseCaseValidateInterface {
  validateSchedulingById(req: ListSchedulingByIdUseCaseRequest): string | null
}

interface UpdateSchedulingByIdUseCaseValidateInterface {
  validateSchedulingById(req: ListSchedulingByIdUseCaseRequest): string | null
}

interface DeleteSchedulingByIdUseCaseValidateInterface {
  validateSchedulingById(req: ListSchedulingByIdUseCaseRequest): string | null
}

export {
  CreateSchedulingUseCaseValidateInterface,
  ListSchedulingByIdUseCaseValidateInterface,
  UpdateSchedulingByIdUseCaseValidateInterface,
  DeleteSchedulingByIdUseCaseValidateInterface
}