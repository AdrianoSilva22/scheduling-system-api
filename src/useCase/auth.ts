import { compare } from "bcryptjs"
import { AuthUseCaseRepositoryInterface } from "./repository/auth"
import { AuthUseCaseRequest, AuthUseCaseResponse } from "./ucio/auth"
import { AuthUseCaseValidateInterface } from "./validate/auth"
import { generateToken } from "../utils/generateToken"

class AuthUseCase {
    repository: AuthUseCaseRepositoryInterface
    validate: AuthUseCaseValidateInterface

    constructor(repository: AuthUseCaseRepositoryInterface, validate: AuthUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async authUser(req: AuthUseCaseRequest): Promise<AuthUseCaseResponse> {
        try {
            const { email, password } = req
            const errorMessage = this.validate.validateAuth(req)

            if (errorMessage) {
                return new AuthUseCaseResponse(errorMessage)
            }

            const user = await this.repository.authUser(email)

            if (!user) {
                return new AuthUseCaseResponse("Usuário não registrado!")
            }

            const passwordHash = user.password
            const passwordVerified = await compare(password, passwordHash)

            if (!passwordVerified) {
                return new AuthUseCaseResponse("Senha inválida!")
            }

            const authToken = generateToken(user)

            return new AuthUseCaseResponse(null, authToken)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new AuthUseCaseResponse(error)
        }
    }
}

export {
    AuthUseCase
}