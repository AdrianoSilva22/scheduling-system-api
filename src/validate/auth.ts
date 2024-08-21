import { AuthUseCaseRequest } from "../useCase/ucio/auth"
import { AuthUseCaseValidateInterface } from "../useCase/validate/auth"
import { checkStringEmpty } from "./validate"

class AuthUseCaseValidate implements AuthUseCaseValidateInterface {
    validateAuth(req: AuthUseCaseRequest): string | null {
        const { email, password } = req
        if (checkStringEmpty(email)) return 'O email não pode ficar vazio!'
        if (checkStringEmpty(password)) return 'A senha não pode ficar vazia!'

        return null
    }
}

export {
    AuthUseCaseValidate
}