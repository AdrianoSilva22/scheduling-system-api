import { createAvailableSchedule } from "../database/postgres/availableSchedule";
import { AvailableScheduleEntity } from "../entity/availableSchedule";
import { CreateAvailableScheduleUseCaseRepositoryInterface } from "../useCase/repository/availableSchedule";

class CreateAvailableSchedulingUseCaseRepository implements CreateAvailableScheduleUseCaseRepositoryInterface {
    async createAvailableSchedule(availableSchedule: AvailableScheduleEntity): Promise<void> {
        await createAvailableSchedule(availableSchedule)
    }
}

export {
    CreateAvailableSchedulingUseCaseRepository
}