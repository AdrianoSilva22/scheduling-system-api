import { CreateSchedulingUseCaseRequest } from "../ucio/scheduling"

interface CreateSchedulingUseCaseValidateInterface {
    validateScheduling(req: CreateSchedulingUseCaseRequest): string | null
}

export {
    CreateSchedulingUseCaseValidateInterface
}