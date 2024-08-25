import { CreateUserUseCaseRequest, ListUserByIdUseCaseRequest } from "../ucio/user"
interface CreateUserUseCaseValidateInterface {
  validateUser(req: CreateUserUseCaseRequest): string | null
}
interface ListUserByIdUseCaseValidateInterface {
  validateUserById(req: ListUserByIdUseCaseRequest): string | null
}

interface UpdateUserByIdUseCaseValidateInterface {
  validateUserById(req: ListUserByIdUseCaseRequest): string | null
}

interface DeleteUserByIdUseCaseValidateInterface {
  validateUserById(req: ListUserByIdUseCaseRequest): string | null
}

export {
  CreateUserUseCaseValidateInterface,
  ListUserByIdUseCaseValidateInterface,
  UpdateUserByIdUseCaseValidateInterface,
  DeleteUserByIdUseCaseValidateInterface
}

