class AuthUseCaseRequest {
    email: string
    password: string

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
}

class AuthUseCaseResponse {
    error?: string | null
    userTokenJwt?: string

    constructor(error?: string | null, userTokenJwt?: string) {
        this.error = error
        this.userTokenJwt = userTokenJwt
    }

}

export {
    AuthUseCaseRequest,
    AuthUseCaseResponse
}