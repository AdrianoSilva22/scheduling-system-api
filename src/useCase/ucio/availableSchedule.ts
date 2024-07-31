class CreateAvailableScheduleUseCaseRequest {
    dateTime: Date;

    constructor(dateTime: Date) {
        this.dateTime = dateTime
    }
}

class CreateAvailableScheduleUseCaseResponse{
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}

export {
    CreateAvailableScheduleUseCaseRequest,
    CreateAvailableScheduleUseCaseResponse
}