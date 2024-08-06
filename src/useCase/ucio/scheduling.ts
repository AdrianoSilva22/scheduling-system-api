class CreateSchedulingUseCaseRequest {
    clientId: string
    horarioId: string

    constructor(clientId: string, horarioId: string) {
        this.clientId = clientId
        this.horarioId = horarioId
    }
}

class CreateSchedulingUseCaseResponse {
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}

export {
    CreateSchedulingUseCaseRequest,
    CreateSchedulingUseCaseResponse
}