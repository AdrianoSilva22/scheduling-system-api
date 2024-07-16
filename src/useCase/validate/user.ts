import { CreateUserUseCaseRequest } from "../ucio/user"
interface CreateUserUseCaseValidateInterface {
  validateDriver(req: CreateUserUseCaseRequest): string | null
}

export {
  CreateUserUseCaseValidateInterface
}

