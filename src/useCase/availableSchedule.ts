import { AvailableScheduleEntity } from "../entity/availableSchedule";
import { generateUUID } from "../utils/uuid";
import { CreateAvailableScheduleUseCaseRepositoryInterface } from "./repository/availableSchedule";
import { CreateAvailableScheduleUseCaseRequest, CreateAvailableScheduleUseCaseResponse } from "./ucio/availableSchedule";
import { CreateAvailableScheduleUseCaseValidateInterface } from "./validate/availableSchedule";

class CreateAvailableScheduleUseCase {
    repository: CreateAvailableScheduleUseCaseRepositoryInterface
    validate: CreateAvailableScheduleUseCaseValidateInterface

    constructor(repository: CreateAvailableScheduleUseCaseRepositoryInterface, validate: CreateAvailableScheduleUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async createAvailableScheduling(req: CreateAvailableScheduleUseCaseRequest): Promise<CreateAvailableScheduleUseCaseResponse> {
        try {
            const errorMessage = this.validate.validateAvailableSchedule(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new CreateAvailableScheduleUseCaseResponse(errorMessage)
            }

            const { dateTime } = req
            const UUID = generateUUID()
            const now = new Date()


            this.repository.createAvailableSchedule(new AvailableScheduleEntity(UUID, dateTime, now, now))
            
            return new CreateAvailableScheduleUseCaseResponse(null)
        } catch (error: any) {
            console.log('PRE_CONDITIONAL_ERROR', error)
                return new CreateAvailableScheduleUseCaseResponse(error)
        }
    }

}

export {
    CreateAvailableScheduleUseCase
}