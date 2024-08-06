import { createScheduling } from "../database/postgres/scheduling"
import { SchedulingEntity } from "../entity/scheduling"
import { CreateScheduleUseCaseRepositoryInterface } from "../useCase/repository/scheduling"

class CreateSchedulingUseCaseRepository implements CreateScheduleUseCaseRepositoryInterface {
    async createScheduling(scheduling: SchedulingEntity): Promise<void> {
        await createScheduling(scheduling)
    }
}

export {
    CreateSchedulingUseCaseRepository
}