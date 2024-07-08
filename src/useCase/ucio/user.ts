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

export {
    CreateUserUseCaseRequest,
    CreateUserUseCaseResponse
}

