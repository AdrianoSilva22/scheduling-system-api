import { CreateUserUseCaseRequest, ListUserByIdUseCaseRequest } from "../ucio/user"
interface CreateUserUseCaseValidateInterface {
  validateUser(req: CreateUserUseCaseRequest): string | null
}
interface ListUserByIdUseCaseValidateInterface {
  validateUserById(req: ListUserByIdUseCaseRequest): string | null
}

export {
  CreateUserUseCaseValidateInterface,
  ListUserByIdUseCaseValidateInterface
}

