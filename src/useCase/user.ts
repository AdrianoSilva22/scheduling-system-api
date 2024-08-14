import { compare } from "bcryptjs"
import { UserEntity } from "../entity/user"
import { passwordHash } from "../utils/passwordHashUtils"
import { generateUUID } from "../utils/uuid"
import { CreateUserUseCaseRepositoryInterface, DeleteUsersByIdUseCaseRepositoryInterface, ListUsersByIdUseCaseRepositoryInterface, ListUsersUseCaseRepositoryInterface, LoginUserUseCaseRepositoryInterface, UpdateUsersByIdUseCaseRepositoryInterface } from "./repository/user"
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, DeleteUserByIdUseCaseResponse, ListUserByIdUseCaseRequest, ListUserByIdUseCaseResponse, ListUsersUseCaseResponse, LoginUserUseCaseRequest, LoginUserUseCaseResponse, UpdateUserByIdUseCaseRequest, UpdteUserByIdUseCaseResponse } from "./ucio/user"
import { CreateUserUseCaseValidateInterface, ListUserByIdUseCaseValidateInterface, LoginUserUseCaseValidateInterface } from "./validate/user"

class CreateUserUseCase {
    validate: CreateUserUseCaseValidateInterface
    repository: CreateUserUseCaseRepositoryInterface

    constructor(validate: CreateUserUseCaseValidateInterface, respository: CreateUserUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = respository
    }

    async createUser(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        try {
            const errorMessage = this.validate.validateUser(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new CreateUserUseCaseResponse(errorMessage)
            }

            const { name, email, phone, password, role } = req

            const UUID = generateUUID()

            const now = new Date()

            const status = "ATIVO"

            await this.repository.createUser(
                new UserEntity(
                    UUID,
                    name,
                    email,
                    await passwordHash(password),
                    phone,
                    role,
                    status,
                    now,
                    now))
            return new CreateUserUseCaseResponse(null)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)

            return new CreateUserUseCaseResponse(error)
        }
    }
}

class ListUsersUseCase {
    repository: ListUsersUseCaseRepositoryInterface

    constructor(repository: ListUsersUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listUsers(): Promise<ListUsersUseCaseResponse> {
        try {

            const users = await this.repository.listUsers()
            return new ListUsersUseCaseResponse(users)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)

            return new ListUsersUseCaseResponse(error)
        }
    }
}
class ListUserByIdUseCase {
    repository: ListUsersByIdUseCaseRepositoryInterface
    validate: ListUserByIdUseCaseValidateInterface

    constructor(repository: ListUsersByIdUseCaseRepositoryInterface, validate: ListUserByIdUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async listUserById(req: ListUserByIdUseCaseRequest): Promise<ListUserByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateUserById(req)


            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new ListUserByIdUseCaseResponse(errorMessage)
            }

            const user = await this.repository.listUserById(req)

            return new ListUserByIdUseCaseResponse(user)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new ListUserByIdUseCaseResponse(error)
        }
    }
}
class UpdateUserByIdUseCase {
    repository: UpdateUsersByIdUseCaseRepositoryInterface

    constructor(repository: UpdateUsersByIdUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async UpdateUserById(req: UpdateUserByIdUseCaseRequest): Promise<UpdteUserByIdUseCaseResponse> {
        try {
            const { password } = req

            if (password) {
                const passwordHashUpdate = await passwordHash(password)
                req.password = passwordHashUpdate
            }

            const user = await this.repository.updateUserById(req)

            return new UpdteUserByIdUseCaseResponse(user)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new UpdteUserByIdUseCaseResponse(error)
        }
    }
}
class DeleteUserByIdUseCase {
    repository: DeleteUsersByIdUseCaseRepositoryInterface

    constructor(repository: DeleteUsersByIdUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async deleteUserById(req: ListUserByIdUseCaseRequest): Promise<DeleteUserByIdUseCaseResponse> {
        try {
            const { ID } = req
            const user = await this.repository.deleteUserById(ID)

            return new DeleteUserByIdUseCaseResponse(null)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new DeleteUserByIdUseCaseResponse(error)
        }
    }
}
class LoginUserUseCase {
    repository: LoginUserUseCaseRepositoryInterface
    validate: LoginUserUseCaseValidateInterface

    constructor(repository: LoginUserUseCaseRepositoryInterface, validate: LoginUserUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async loginUser(req: LoginUserUseCaseRequest): Promise<LoginUserUseCaseResponse> {
        try {
            const { email, password } = req
            const errorMessage = this.validate.validateLoginUser(req)

            if (errorMessage) {
                return new LoginUserUseCaseResponse(errorMessage)
            }

            const user = await this.repository.LoginUser(email)

            if (!user) {
                return new LoginUserUseCaseResponse("Usuário não registrado!")
            }

            const passwordHash = user.password
            const passwordVerified = await compare(password, passwordHash)

            if (!passwordVerified) {
                return new LoginUserUseCaseResponse("Senha inválida!")
            }

            return new LoginUserUseCaseResponse(null)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new DeleteUserByIdUseCaseResponse(error)
        }
    }
}

export {
    CreateUserUseCase,
    DeleteUserByIdUseCase,
    ListUserByIdUseCase,
    ListUsersUseCase,
    LoginUserUseCase,
    UpdateUserByIdUseCase
}

