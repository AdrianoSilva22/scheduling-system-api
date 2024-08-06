import { SchedulingEntity } from "../../entity/scheduling"

interface CreateScheduleUseCaseRepositoryInterface {
    createScheduling(scheduling: SchedulingEntity): Promise<void>
}

export {
    CreateScheduleUseCaseRepositoryInterface
}