import { SchedulingEntity } from "../entity/scheduling";
import { generateUUID } from "../utils/uuid";
import { CreateScheduleUseCaseRepositoryInterface } from "./repository/scheduling";
import { CreateSchedulingUseCaseRequest, CreateSchedulingUseCaseResponse } from "./ucio/scheduling";
import { CreateAvailableScheduleUseCaseValidateInterface } from "./validate/availableSchedule";
import { CreateSchedulingUseCaseValidateInterface } from "./validate/scheduling";

class CreateSchedulingUseCase {
    repository: CreateScheduleUseCaseRepositoryInterface
    validate: CreateSchedulingUseCaseValidateInterface

    constructor(repository: CreateScheduleUseCaseRepositoryInterface, validate: CreateSchedulingUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async createScheduling(req: CreateSchedulingUseCaseRequest): Promise<CreateSchedulingUseCaseResponse> {
        try {
            const errorMessage = this.validate.validateScheduling(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new CreateSchedulingUseCaseResponse(errorMessage)
            }

            const { clientId, horarioId } = req
            const UUID = generateUUID()
            const now = new Date()


            this.repository.createScheduling(new SchedulingEntity(UUID, clientId, horarioId, now, now))

            return new CreateSchedulingUseCaseResponse(null)
        } catch (error: any) {
            console.log('PRE_CONDITIONAL_ERROR', error)
            return new CreateSchedulingUseCaseResponse(error)
        }
    }

}

export {
    CreateSchedulingUseCase
}