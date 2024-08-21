import { AuthUseCaseRequest } from "../ucio/auth"

interface AuthUseCaseValidateInterface {
    validateAuth(req: AuthUseCaseRequest): string | null
  }

  export {
    AuthUseCaseValidateInterface
  }