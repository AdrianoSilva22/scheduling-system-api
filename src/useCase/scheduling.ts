import { SchedulingEntity } from "../entity/scheduling";
import { generateUUID } from "../utils/uuid";
import { CreateScheduleUseCaseRepositoryInterface } from "./repository/scheduling";
import { CreateSchedulingUseCaseRequest, CreateSchedulingUseCaseResponse } from "./ucio/scheduling";
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
           

            const {client, horarioId } = req
            const UUID = generateUUID()
            const now = new Date()


            this.repository.createScheduling(new SchedulingEntity(UUID, client, horarioId, now, now))

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