import { UserEntity } from "../../entity/user"

class CreateUserUseCaseRequest {
    name: string
    email: string
    password: string
    phone: string

    constructor(name: string, email: string, password: string, phone: string) {
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
    }
}
class CreateUserUseCaseResponse {
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}
class ListUsersUseCaseResponse {
    users: UserEntity[]
    error?: string

    constructor(users: UserEntity[], error?: string) {
        this.users = users
        this.error = error
    }
}

class ListUserByIdUseCaseRequest {
    id: string

    constructor(id: string) {
        this.id = id
    }
}
class ListUserByIdUseCaseResponse {
    user?: UserEntity
    error?: string

    constructor(user?: UserEntity | string, error?: string) {
        if (typeof user === 'string') {
            this.error = user
        } else {
            this.user = user
            this.error = error
        }
    }
}

export {
    CreateUserUseCaseRequest,
    CreateUserUseCaseResponse,
    ListUserByIdUseCaseRequest,
    ListUserByIdUseCaseResponse,
    ListUsersUseCaseResponse
}

